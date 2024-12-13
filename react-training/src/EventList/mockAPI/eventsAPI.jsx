import { genId } from "../util";

const mockEvents = [
  { id: genId(), eventName: "Event 1", start: "2021-01-01", end: "2021-01-02" },
  { id: genId(), eventName: "Event 2", start: "2021-01-03", end: "2021-01-04" },
  { id: genId(), eventName: "Event 3", start: "2021-01-05", end: "2021-01-06" },
];

async function getEvents() {
  // return mockEvents;
  return [...mockEvents];

  // return JSON.parse(JSON.stringify(mockEvents));
}

async function addEvent(event) {
  const newEvent = {
    id: genId(),
    ...event,
  };
  mockEvents.push(newEvent);
  return newEvent;
}

export default {
  getEvents,
  addEvent,
};
