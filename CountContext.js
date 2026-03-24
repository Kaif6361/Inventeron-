import React,{useState,useContext} from "react"; 
import { createContext } from "react";
import ChildComponent from "../components/ChildComponent";   
function App() {
    
    const [count, setCount] = useState(50);     
    
    
    return (
        <CountContext.Provider value={{count, setCount}}>
        <div>       
            <h2>Dashboard</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase Count</button>     
            <button onClick={() => setCount(count - 1)}>Decrease Count</button>
            <ChildComponent></ChildComponent>
        </div>
        </CountContext.Provider>
        
    );
}
export default App;
