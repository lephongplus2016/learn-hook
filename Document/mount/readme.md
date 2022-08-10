# Mount - unmount

```js
import { useState } from "react";

import Content from "./Content";

function App() {
    // mount: gắn vào, nghĩa là gắn 1 element vào
    // unmount: gỡ ra khỏi app

    const [show, setShow] = useState(false);

    return (
        <div style={{ padding: "20px" }}>
            <button
                onClick={() => {
                    setShow(!show);
                }}
            >
                Toggle
            </button>
            {show && <Content />}
        </div>
    );
}

export default App;
```
