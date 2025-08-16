import { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { enUS } from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";
import PageLayout from "../components/PageLayout";

const locales = { "en-US": enUS };
const localizer = dateFnsLocalizer({ format, parse, startOfWeek, getDay, locales });

const events = [
  {
    title: "Pack Meeting",
    start: new Date(2025, 8, 21, 18, 30),
    end: new Date(2025, 8, 21, 20, 0),
  },
  {
    title: "Den 3 Hike",
    start: new Date(2025, 8, 28, 9, 0),
    end: new Date(2025, 8, 28, 12, 0),
  },
  {
    title: "Popcorn Fundraiser",
    start: new Date(2025, 9, 5, 10, 0),
    end: new Date(2025, 9, 5, 14, 0),
  },
];

export default function Events() {
  const [view, setView] = useState<"month" | "week" | "day" | "agenda">("month");
  const [date, setDate] = useState(new Date());

  return (
    <PageLayout>
      <h2 className="text-2xl font-bold mb-4">Events</h2>
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
        />
      </div>
    </PageLayout>
  );
}
