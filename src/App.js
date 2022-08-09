import { useState } from "react";

function App() {
    const [name, setName] = useState();

    console.log(name);
    //onchange ở đây biểu hiện là chiều bình thường, nghĩa là đổi view -> đổi controller
    // value ở đây là chiều thứ 2: đổi ở controller -> đổi ở view
    return (
        <div style={{ padding: "20px" }}>
            <input
                onChange={(e) => setName(e.target.value)}
                value={name}
            ></input>
            <button onClick={(e) => setName("jack")}>jack</button>
        </div>
    );
}

export default App;
