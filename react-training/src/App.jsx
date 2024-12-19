import "./App.css";
import Day2 from "./day2/Day2";
import Day3 from "./day3/Day3";
import Day4 from "./day4";
import Day5 from "./day5";
import Day6 from "./day6";
import Day7 from "./Day7_Patterns";
import Day8 from "./Day8_Context";
import { CountProvider } from "./Day8_Context/context/CountContext";
import EventListApp from "./EventList";
import { EventsProvider } from "./EventList/context/EventsContext";

function App() {
  return (
    <>
      {/* <Day2 /> */}
      {/* <Day3 /> */}
      {/* <Day4 />  */}
      {/* <Day5 /> */}
      {/* <Day6 /> */}

      <CountProvider>
        <EventsProvider>
          <EventListApp />
        </EventsProvider>
      </CountProvider>
      {/* <Day7 /> */}
      {/* <Day8 /> */}
    </>
  );
}

export default App;
