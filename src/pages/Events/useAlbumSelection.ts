import { useCallback, useRef, useState } from "react";

/** An album the calendar asked the slideshow to show. */
export type AlbumSelection = {
  index: number;
  /** Bumped on every request so re-picking the same album still re-triggers. */
  nonce: number;
};

/**
 * Shared wiring for the pages that show a calendar and a slideshow together
 * (Home and Events): the calendar asks for an album, the slideshow jumps to it,
 * and the page scrolls the slideshow into view.
 */
export function useAlbumSelection() {
  const [selectedAlbum, setSelectedAlbum] = useState<AlbumSelection | null>(null);
  const slideshowRef = useRef<HTMLDivElement>(null);

  const selectAlbum = useCallback((index: number) => {
    setSelectedAlbum((prev) => ({ index, nonce: (prev?.nonce ?? 0) + 1 }));
    slideshowRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, []);

  return { selectedAlbum, selectAlbum, slideshowRef };
}
