import { Dialog } from "@headlessui/react";
import type { Event } from "./EventCalendar"; // Adjust the import path as necessary

export default function EventModal({
  event,
  isOpen,
  setIsOpen,
}: {
  event: Event;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="fixed z-10 inset-0 overflow-y-auto"
    >
      <div className="flex items-center justify-center min-h-screen p-4">
        {/* Overlay as plain div */}
        <div
          className="fixed inset-0 bg-black opacity-30"
          aria-hidden="true"
        />

        <div className="bg-white rounded-lg max-w-md mx-auto p-6 z-20 shadow-lg">
          <Dialog.Title className="text-lg font-bold mb-2">{event.title}</Dialog.Title>
          <p>
            {event.start.toLocaleString()} - {event.end.toLocaleString()}
          </p>
          {event.location && (
            <p className="mt-2 font-medium">Location: {event.location}</p>
          )}
          {event.description && <p className="mt-2">{event.description}</p>}
          <button
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
        </div>
      </div>
    </Dialog>
  );
}
