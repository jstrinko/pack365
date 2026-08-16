import { useState } from 'react';
import EventSlideShow from './EventSlideShow';
import { eventList } from './Data';
import type { AlbumSelection } from './useAlbumSelection';

type Props = {
  /** "card" sits inline on the Events page; "page" fills the box it's given. */
  layout?: 'card' | 'page';
  /** Album to jump to, from the calendar's camera badge. */
  selected?: AlbumSelection | null;
};

export default function EventSlideShowContainer({ layout = 'card', selected = null }: Props) {
  const [fullscreen, setFullscreen] = useState(false);

  return (
    <>
      <div
        className={
          layout === 'page'
            ? 'relative w-full h-full group'
            : 'relative w-full max-w-3xl mx-auto group'
        }
      >
        {/* "page" must not centre its child, or the viewer won't stretch to fill. */}
        <div
          className={
            layout === 'page'
              ? 'w-full h-full bg-black text-white'
              : 'w-full h-full bg-black flex items-center justify-center text-white'
          }
        >
          <EventSlideShow events={eventList} layout={layout} selected={selected} />
        </div>

        {/* Controls */}
        <button
          onClick={() => setFullscreen(true)}
          title="View fullscreen"
          className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 hover:bg-black/60 text-white px-2 py-1 rounded cursor-pointer"
        >
          ⛶
        </button>
      </div>

      {fullscreen && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center group">
          <div className="relative w-full h-full">
            <EventSlideShow events={eventList} layout="overlay" selected={selected} />
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
