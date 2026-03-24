import  React, {useContext} from "react";
import {CountContext} from "./context/CountContext";
function ChildComponent() {
    const {count,setCount}=useContext(CountContext);
    return (
        <div
        style={{
            marginTop:"30px",
            border: "2px solid gray",
            padding: "10px",
            borderRadius:  "5px" 
        }}>
        <h3>Child Component</h3>
        
         <h2>Child Component</h2>
         <button onClick={() => setCount(count + 1)}>Increase Count in Child</button>
         <button onClick={() => setCount(count - 1)}>Decrease Count in Child</button>
         <p>Count in Child: {count}</p> 
        </div>
    );
}
export default ChildComponent;