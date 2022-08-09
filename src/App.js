import { useState } from "react";

function App() {
    // khai báo biến state và hàm setter cho nó
    // useState: hàm khởi tạo, chỉ chạy 1 lần duy nhất
    const [counter, setCounter] = useState(1);

    const handleIncrease = () => {
        // setter của tk nào thì set value cho tk đó
        // truyền vào cái gì thì = new value
        // setCounter(counter + 1);

        // sử dụng call back
        setCounter((preState) => preState + 1);
        setCounter((preState) => preState + 1);
    };

    return (
        <div className="App" style={{ padding: "20px" }}>
            {/* không cần this, display trực tiếp state */}
            <h1>{counter}</h1>
            {/* không cần arrow function, gọi trực tiếp hàm */}
            <button onClick={handleIncrease}>Increase</button>
        </div>
    );
}

export default App;
