import React,{useState} from "react";
import ChildComponent from "./components/ChildComponent";
import {CountContext} from "./context/countContext";

function App() {
    const[count,setCount]=useState(0);
    return (
    <CountContext.Provider value={{count,setCount}}>
    <div style={{textAlign:"center"}}>
        <h1>useContext Example</h1>
        <ChildComponent />
        
        
        
    </div>
    </CountContext.Provider>
    );
}
export default App;