import { useState } from 'react';
import EventSlideShow from './EventSlideShow';
import { eventList } from './Data';

export default function EventSlideShowContainer() {
  const [fullscreen, setFullscreen] = useState(false);

  return (
    <>
      <div className="relative w-full max-w-3xl mx-auto group">
        <div className="w-full h-full bg-black flex items-center justify-center text-white">
          <EventSlideShow events={eventList} fullScreen={false} />
        </div>

        {/* Controls */}
        <button
          onClick={() => setFullscreen(true)}
          className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 hover:bg-black/60 text-white px-2 py-1 rounded cursor-pointer"
        >
          ⛶
        </button>
      </div>

      {fullscreen && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center group">
          <div className="relative w-full h-full">
            <EventSlideShow events={eventList} fullScreen={true} />
            <button
              onClick={() => setFullscreen(false)}
              className="z-100 cursor-pointer absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 hover:bg-black/60 text-white px-3 py-2 rounded"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}