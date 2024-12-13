import { genId } from "../util";

const mockEvents = [
  { id: genId(), eventName: "Event 1", start: "2021-01-01", end: "2021-01-02" },
  { id: genId(), eventName: "Event 2", start: "2021-01-03", end: "2021-01-04" },
  { id: genId(), eventName: "Event 3", start: "2021-01-05", end: "2021-01-06" },
];

export async function getEvents() {
  return [...mockEvents];
}
