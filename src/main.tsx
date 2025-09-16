import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import { HooksApp } from './HooksApp'
import "./index.css";
// import { MemoHook } from "./06-memo/MemoHook";
// import { MemoCounter } from "./06-memo/MemoCounter";
import { InstagromApp } from "./07-useOptimistic/InstagromApp";
import { Toaster} from 'sonner'
//import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithHook'
// import { PokemonPage } from './03-examples/PokemonPage'
// import { TasksApp } from './05-useReducer/TaskApp'
// import { ScrambleWords } from './reducer/ScrambleWords'
//import { FocusScreen } from './04-useRef/FocusScreen'
//import { TrafficLight } from './01-useState/TrafficLight'
//import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster/>
    {/* <HooksApp/> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithHook /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen/> */}
    {/* <TasksApp/> */}
    {/* <ScrambleWords/> */}
    {/* <MemoHook /> */}
    {/* <MemoCounter/> */}
    <InstagromApp />
  </StrictMode>,
);
