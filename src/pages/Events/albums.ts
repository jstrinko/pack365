import { eventList } from "./Data";

/** Midnight-local timestamp, so comparisons ignore time of day. */
const dayOf = (d: Date) =>
  new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();

/**
 * Albums whose photos are dated differently from the calendar entry they
 * belong to, keyed by album name. Everything else matches on date alone.
 */
const EXTRA_DATES: Record<string, string[]> = {
  // Photos start at the 8/30 kickoff; the calendar entry is the 9/4 kick-off.
  "Popcorn Kickoff & Fundraiser": ["2025-09-04"],
};

const extraDaysFor = (name: string) =>
  (EXTRA_DATES[name] ?? []).map((iso) => {
    const [y, m, d] = iso.split("-").map(Number);
    return dayOf(new Date(y, m - 1, d));
  });

/**
 * Index into `eventList` of the album covering a calendar event, or null.
 * A multi-day campout matches if the album's date falls anywhere in its range.
 */
export function findAlbumIndex(start: Date, end: Date): number | null {
  const from = dayOf(start);
  const to = dayOf(end);

  const index = eventList.findIndex((album) => {
    const days = [dayOf(album.date), ...extraDaysFor(album.name)];
    return days.some((day) => day >= from && day <= to);
  });

  return index === -1 ? null : index;
}
