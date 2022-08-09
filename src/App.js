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
