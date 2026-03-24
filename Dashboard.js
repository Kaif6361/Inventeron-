import React, { useState,useEffect }from "react";

function Dashboard() {
const [count, setCount] = useState(50);
    function increaseCount(){
        setCount(count + 1);
    }
    function decreaseCount(){
        setCount(count - 1);
    }

    useEffect(() => {
        console.log("runs on every render");
    });
    useEffect(() => {     
        console.log("without dependency array, runs after every render");
    },[]);
    useEffect(() => {
        console.log("Count has changed:", count);
        if(count > 70){
        alert("Count is greater than 70!");
    } 
    },[count]);
    return (
        <div>
            <h2>Dashboard</h2>   
            <p>Count: {count}</p>
            <button onClick={increaseCount}>Increase Count</button>
            <button onClick={decreaseCount}>Decrease Count</button>
        </div>
    );         
}                                                                                      
    export default Dashboard;