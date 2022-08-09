# useState

## Lý thuyết

-   Chú ý hàm setState sau khi chạy xong, sẽ chạy lại toàn app => cập nhật giá trị state.
-   Tuy nhiên, nếu gọi setState liên tục nhiều lần thì nó vẫn chỉ cập nhật state 1 lần. Lý do là bởi nó lập lịch để re-render lại.
-   Từ khóa `preState` callback sẽ cập nhật ngay lập tức state, ko bị chờ như ở trên.

## Code

```js
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
```
