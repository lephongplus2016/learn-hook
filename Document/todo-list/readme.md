## Todo-list

```js
import { useState } from "react";

function App() {
    // toán tử Nullish , nếu storageJob là null hoặc underfine này (~~ coalescing ) thì nó chạy cái []
    const [jobs, setJobs] = useState(() => {
        // đưa vào đây thì chỉ chạy 1 lần thôi
        let storageJob = JSON.parse(localStorage.getItem("jobs"));

        // chuyển từ string -> json
        console.log(storageJob);
        return storageJob ?? [];
    });

    const [oneJob, setOneJob] = useState("");

    console.log("oneJob:", oneJob);

    const handleSubmit = () => {
        setJobs((prev) => {
            // cập nhật danh sách job
            const newJobs = [...prev, oneJob];
            // lưu vào local storage
            // cần ép json thành string trước
            let jsonJob = JSON.stringify(newJobs);

            localStorage.setItem("jobs", jsonJob);

            return newJobs;
        });
        setOneJob("");
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>
                Todo list - lưu ở localStorage nên refresh vẫn giữ được giá trị
            </h2>
            <input
                onChange={(e) => setOneJob(e.target.value)}
                value={oneJob}
            ></input>
            <button onClick={handleSubmit}>Add</button>
            <ul>
                {/* nếu dùng từ khóa index như vậy, thì cái mảng map này tự sinh ra index từ 0, 1, 2, ... 
                    để điền vô
                */}
                {jobs.map((job, index) => (
                    <li key={index}>{job}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
```
