import { useState } from "react";
function Contador() {
     const [count,  setCount] = useState(o);

    return (
        <div>
            <p>Contador: (count)</p>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
        </div>

    )
}

export default Contador;
