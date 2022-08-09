# Two - way binding

-   mảng

```js
import { useState } from "react";

const gifts = ["iphone 6", "iphone 7", "iphone 8"];

function App() {
    const [gift, setGift] = useState();

    const randomGift = () => {
        let index = Math.floor(Math.random() * gifts.length);
        setGift(gifts[index]);
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>{gift ? gift : "Chưa có phần thưởng"}</h1>
            <button onClick={randomGift}>Lấy thưởng</button>
        </div>
    );
}

export default App;
```

-   Nhắc đến two-way binding là nhắc đến form

```js
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
```

-   Còn ứng dụng trong radio button, select box

-   radio

```js
import { useState } from "react";

const data = [
    {
        id: 1,
        name: "Salah",
    },
    {
        id: 2,
        name: "Firmino",
    },
    {
        id: 3,
        name: "Diaz",
    },
];

function App() {
    const [check, setCheck] = useState(2);

    console.log(check);

    return (
        <div style={{ padding: "20px" }}>
            {data.map((item) => (
                <div key={item.id}>
                    <input
                        type="radio"
                        onChange={() => setCheck(item.id)}
                        checked={item.id === check}
                    />
                    {item.name}
                </div>
            ))}
        </div>
    );
}

export default App;
```

-   checkbox

```js
import { useState } from "react";

const data = [
    {
        id: 1,
        name: "Salah",
    },
    {
        id: 2,
        name: "Firmino",
    },
    {
        id: 3,
        name: "Diaz",
    },
];

function App() {
    const [check, setCheck] = useState([]);

    const handleCheck = (id) => {
        if (check.includes(id)) {
            // uncheck
            setCheck((prev) => {
                return check.filter((item) => item !== id);
            });
        } else {
            // check
            // ... toán tử copy để lấy lại mảng cũ
            setCheck((prev) => [...prev, id]);
        }
    };

    console.log(check);

    return (
        <div style={{ padding: "20px" }}>
            {data.map((item) => (
                <div key={item.id}>
                    <input
                        type="checkbox"
                        onChange={() => handleCheck(item.id)}
                        checked={check.includes(item.id)}
                    />
                    {item.name}
                </div>
            ))}
        </div>
    );
}

export default App;
```
