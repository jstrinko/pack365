import { useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { enUS } from "date-fns/locale/en-US";
import EventModal from "./EventModal";

const locales = { "en-US": enUS };
const localizer = dateFnsLocalizer({ format, parse, startOfWeek, getDay, locales });

export type Event = {
  id: string;
  summary: string;
  start: { dateTime?: string; date?: string };
  end: { dateTime?: string; date?: string };
  title: string;
  location?: string;
  description?: string;
};


const GoogleCalendarAPIKey = 'AIzaSyCRqQUsiiwCzUGXU3loavI_g2A-NYiaWR0';
//const calendarId = 'mlb_-m-02%7e_%7e_x_%4diami+%4darlins#sports@group.v.calendar.google.com';
const calendarId = 'e28c365873c5d4d1a66a9a90570f7bd6c4fc56ae9724a64f77acf53361bd81e1@group.calendar.google.com';

export default function EventCalendar() {
  const [events, setEvents] = useState<Event[]>([]);
  const [view, setView] = useState<"month" | "week" | "day" | "agenda">("month");
  const [date, setDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timeMin = new Date().toISOString();
    const fullUrl = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${GoogleCalendarAPIKey}&timeMin=${timeMin}&singleEvents=true&orderBy=startTime`;
    fetch(fullUrl)
      .then((response) => response.json())
      .then((data) => {
        const toLocalMidnight = (dateStr: string) => {
          const [y, m, d] = dateStr.split("-").map(Number);
          // Local midnight (no timezone shift)
          return new Date(y, m - 1, d, 0, 0, 0, 0);
        };

        const fetchedEvents = (data.items || []).map((item: any) => {
          const isAllDay = !!item.start?.date;

          let start: Date;
          let end: Date;

          if (isAllDay) {
            // All-day: build local dates and fix Google's exclusive end
            start = toLocalMidnight(item.start.date);
            const endNextDayLocal = toLocalMidnight(item.end.date);
            end = new Date(endNextDayLocal.getTime() - 1); // end inclusive (23:59:59.999 of previous day)
          } else {
            // Timed event
            start = new Date(item.start.dateTime);
            end = new Date(item.end.dateTime);
          }

          return {
            id: item.id,
            title: item.summary ?? "(Untitled)",
            start,
            end,
            allDay: isAllDay,
            location: item.location,
            description: item.description,
          };
        });

        setEvents(fetchedEvents);
      });
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div style={{ height: 600 }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "100%" }}
          view={view}
          onView={(v) => setView(v as "month" | "week" | "day" | "agenda")}
          date={date}
          onNavigate={(d) => setDate(d)}
          views={["month", "week", "day", "agenda"]}
          onSelectEvent={(event) => {
            setSelectedEvent(event);
            setIsOpen(true);
          }}
        />
        {selectedEvent && (
          <EventModal event={selectedEvent} isOpen={isOpen} setIsOpen={setIsOpen} />
        )}
      </div>
    </div>
  );
}