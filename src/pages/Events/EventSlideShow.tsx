import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

export type Photo = {
  path: string;
  name: string;
  description: string;
};

export type EventItem = {
  name: string;
  description: string;
  date: Date;
  photos: Photo[];
};

export type SlideShowProps = {
  events: EventItem[];
  eventInterval?: number; // ms; default 5000
  photoInterval?: number; // ms; default 2000
  className?: string;
  fullScreen?: boolean;
};

const clampIndex = (i: number, len: number) => ((i % len) + len) % len;

export default function EventSlideshow({
  events,
  eventInterval = 6000,
  photoInterval = 2000,
  className = "",
  fullScreen = false,
}: SlideShowProps) {
  const totalEvents = events.length;
  const [eventIndex, setEventIndex] = useState(0);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [userInteracted, setUserInteracted] = useState(false);

  // For directional animations
  const [eventDir, setEventDir] = useState<1 | -1>(1);
  const [photoDir, setPhotoDir] = useState<1 | -1>(1);

  const eventTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const photoTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  const photosForEvent = useMemo(() => {
    return totalEvents > 0 ? events[eventIndex]?.photos ?? [] : [];
  }, [events, eventIndex, totalEvents]);

  const totalPhotos = photosForEvent.length;

  // Reset photo index when event changes
  useEffect(() => {
    setPhotoIndex(0);
  }, [eventIndex]);

  // Auto-cycle events
  useEffect(() => {
    if (!autoPlay || totalEvents === 0) return;
    if (eventTimer.current) clearInterval(eventTimer.current);
    eventTimer.current = setInterval(() => {
      setEventDir(1);
      setEventIndex((prev) => clampIndex(prev + 1, totalEvents));
    }, eventInterval);
    return () => {
      if (eventTimer.current) clearInterval(eventTimer.current);
    };
  }, [autoPlay, eventInterval, totalEvents]);

  // Auto-cycle photos within current event
  useEffect(() => {
    if (!autoPlay || totalPhotos === 0) return;
    if (photoTimer.current) clearInterval(photoTimer.current);
    photoTimer.current = setInterval(() => {
      setPhotoDir(1);
      setPhotoIndex((prev) => (totalPhotos > 0 ? (prev + 1) % totalPhotos : 0));
    }, photoInterval);
    return () => {
      if (photoTimer.current) clearInterval(photoTimer.current);
    };
  }, [autoPlay, photoInterval, totalPhotos, eventIndex]);

  const pauseAutoplayOnInteract = () => {
    setUserInteracted(true);
    setAutoPlay(false);
    if (eventTimer.current) clearInterval(eventTimer.current);
    if (photoTimer.current) clearInterval(photoTimer.current);
  };

  // --- Event controls ---
  const prevEvent = () => {
    if (totalEvents === 0) return;
    pauseAutoplayOnInteract();
    setEventDir(-1);
    setEventIndex((prev) => clampIndex(prev - 1, totalEvents));
  };

  const nextEvent = () => {
    if (totalEvents === 0) return;
    pauseAutoplayOnInteract();
    setEventDir(1);
    setEventIndex((prev) => clampIndex(prev + 1, totalEvents));
  };

  // --- Photo controls --- (only shown when user has paused autoplay)
  const prevPhoto = () => {
    if (totalPhotos === 0) return;
    pauseAutoplayOnInteract();
    setPhotoDir(-1);
    setPhotoIndex((prev) => (prev - 1 + totalPhotos) % totalPhotos);
  };

  const nextPhoto = () => {
    if (totalPhotos === 0) return;
    pauseAutoplayOnInteract();
    setPhotoDir(1);
    setPhotoIndex((prev) => (prev + 1) % totalPhotos);
  };

  const toggleAutoPlay = () => {
    setAutoPlay((a) => !a);
    if (!autoPlay) {
      // resuming
      setUserInteracted(false); // hide photo-only controls again when autoplay resumes
    }
  };

  // Animation variants
  const slideVariant = {
    enter: (direction: 1 | -1) => ({
      x: direction === 1 ? 60 : -60,
      opacity: 0,
      filter: "blur(2px)",
    }),
    center: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    exit: (direction: 1 | -1) => ({
      x: direction === 1 ? -60 : 60,
      opacity: 0,
      filter: "blur(2px)",
      transition: { duration: 0.25 },
    }),
  } as const;

  const fadeUp = {
    initial: { y: 10, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.25 } },
    exit: { y: -10, opacity: 0, transition: { duration: 0.2 } },
  } as const;

  const current = events[eventIndex];
  const currentPhoto = photosForEvent[photoIndex];

  return (
    <div
      className={fullScreen ? `fixed inset-0 z-50 w-full h-full bg-white` : `relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-xl bg-white group ${className}`}
    >
      {/* Image area */}
      <div className={fullScreen ? `relative w-full h-[50rem] bg-gray-100` : `relative h-[28rem] md:h-[32rem] bg-gray-100`}>
        <AnimatePresence custom={eventDir} mode="wait">
          {/* Wrap event layer so that changing events triggers a subtle slide */}
          <motion.div
            key={`event-${eventIndex}`}
            variants={slideVariant}
            custom={eventDir}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0"
          >
            <AnimatePresence custom={photoDir} mode="wait">
              {/* Photo level animation within the event */}
              <motion.img
                key={`photo-${eventIndex}-${photoIndex}`}
                src={currentPhoto?.path}
                alt={currentPhoto?.name || "Event photo"}
                className="absolute inset-0 h-full w-full object-cover"
                variants={slideVariant}
                custom={photoDir}
                initial="enter"
                animate="center"
                exit="exit"
              />
            </AnimatePresence>

            {/* Gradient overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

            {/* Top-right controls: autoplay */}
            <div className="absolute top-3 right-3 flex items-center gap-2">
              <button
                onClick={toggleAutoPlay}
                className="rounded-full bg-black/50 text-white p-2 opacity-0 group-hover:opacity-100 transition"
                aria-label={autoPlay ? "Pause slideshow" : "Play slideshow"}
              >
                {autoPlay ? <Pause size={18} /> : <Play size={18} />}
              </button>
            </div>

            {/* Event navigation (always available; visible on hover) */}
            <button
              onClick={prevEvent}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 text-white p-3 opacity-0 group-hover:opacity-100 transition"
              aria-label="Previous event"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={nextEvent}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 text-white p-3 opacity-0 group-hover:opacity-100 transition"
              aria-label="Next event"
            >
              <ChevronRight size={22} />
            </button>

            {/* Photo controls (only when autoplay is paused by user interaction) */}
            {!autoPlay && userInteracted && (
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition">
                <button
                  onClick={prevPhoto}
                  className="rounded-full bg-black/50 text-white px-3 py-1.5 text-sm"
                  aria-label="Previous photo"
                >
                  <div className="flex items-center gap-1"><ChevronLeft size={16} /> Photo</div>
                </button>
                <button
                  onClick={nextPhoto}
                  className="rounded-full bg-black/50 text-white px-3 py-1.5 text-sm"
                  aria-label="Next photo"
                >
                  <div className="flex items-center gap-1">Photo <ChevronRight size={16} /></div>
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Info panel */}
      <div className="p-4 md:p-6 bg-white">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div>
            <motion.h3
              key={`title-${eventIndex}`}
              className="text-xl md:text-2xl font-bold text-gray-900"
              variants={fadeUp}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {current?.name || "Untitled Event"}
            </motion.h3>
            <motion.p
              key={`date-${eventIndex}`}
              className="text-gray-300 md:text-gray-500 text-sm"
              variants={fadeUp}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {current?.date ? new Date(current.date).toLocaleDateString() : ""}
            </motion.p>
          </div>

          {/* Photo dots */}
          <div className="flex items-center gap-2">
            {photosForEvent.map((_, i) => (
              <button
                key={`dot-${i}`}
                onClick={() => {
                  pauseAutoplayOnInteract();
                  setPhotoDir(i > photoIndex ? 1 : -1);
                  setPhotoIndex(i);
                }}
                aria-label={`Go to photo ${i + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  i === photoIndex ? "bg-gray-900" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        <motion.p
          key={`desc-${eventIndex}`}
          className="mt-3 text-gray-700"
          variants={fadeUp}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {current?.description}
        </motion.p>

        {currentPhoto?.description && (
          <motion.p
            key={`photodesc-${eventIndex}-${photoIndex}`}
            className="mt-1 text-sm italic text-gray-500"
            variants={fadeUp}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {currentPhoto.description}
          </motion.p>
        )}
      </div>
    </div>
  );
}

/*
USAGE EXAMPLE:

<Slideshow
  events={[
    {
      name: "Campfire Night",
      description: "S'mores, storytelling, and skits!",
      date: new Date("2025-05-17"),
      photos: [
        { path: "/photos/campfire1.jpg", name: "Campfire 1", description: "Starting the fire" },
        { path: "/photos/campfire2.jpg", name: "Campfire 2", description: "Skits time" },
        { path: "/photos/campfire3.jpg", name: "Campfire 3", description: "S'mores!" },
      ],
    },
    // ...more events
  ]}
  eventInterval={5000}
  photoInterval={2000}
/>

NOTES:
- Photo prev/next controls appear only after the user has interacted and autoplay is paused, per requirements.
- The Play/Pause button toggles autoplay for both event and photo timers.
- Direction-aware slide animations via framer-motion (left/right).
- Tailwind classes rely on a parent .group for hover-reveal controls.
*/
