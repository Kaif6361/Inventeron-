import React, { useState}from "react";


function ToggleDemo() {
    const [visible, setVisible] = useState(true);
    return (
        <div>
            <button onClick={() => setVisible(!visible)}>Toggle Visibility</button>
            {visible && <p>This is visible!</p>}
        </div>
    );
}
export default ToggleDemo;