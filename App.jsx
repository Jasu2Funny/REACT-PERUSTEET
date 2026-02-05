import { useState } from "react";
import KasvatusButton from "./kasvatus";
import VahennysButton from "./vahennys";
import NollausButton from "./nollaus";
import TuplaKasvatusButton from "./tupla";
import CountDisplay from "./count";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter</h2>

      <CountDisplay count={count} />

      <KasvatusButton setCount={setCount} count={count} />
      <VahennysButton setCount={setCount} count={count} />
      <TuplaKasvatusButton setCount={setCount} count={count} />
      <NollausButton setCount={setCount} />
    </div>
  );
}

export default Counter;
