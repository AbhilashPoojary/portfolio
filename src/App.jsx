import { useState } from "react";
import Leftpanel from "./components/Leftpanel";
import Rightpanel from "./components/Rightpanel";

function App() {
  const [active, setActive] = useState(false);
  return (
    <div className="sm:flex-none md:flex">
      <Leftpanel active={active} setActive={setActive} />
      <Rightpanel active={active} setActive={setActive} />
    </div>
  );
}

export default App;
