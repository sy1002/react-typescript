import {useState} from "react";
import TrafficLight from "./components/TrafficLight/TrafficLight";

function App() {

    const [light , setLight] = useState<'red' | 'yellow' | 'green'>('red');

    const handleClick = (color: 'red' | 'yellow' | 'green') => {
        switch (color) {
            case 'red':
            setLight('yellow');
            break;
        case 'yellow':
            setLight('green');
            break;
        case 'green':
            setLight('red');
            break;
        default:
            console.error('Invalid color');
            setLight('red');
            break;
        }
    }


  return (
    <>
        <TrafficLight light={light} handleClick={handleClick}/>
    </>
  )
}

export default App
