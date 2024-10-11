import { useState } from "react";

function ChildPropComponent({
  Hdr1,
  Hdr2,
  Para1,
  Para2,
  Count,
  fnCount,
  index,
}) {
  const [valState, setValState] = useState(10);
  const [valInput, setValInput] = useState("Name");
  function onCountVal() {
    setValState(valState + 2);
    fnCount(index);
  }

  function onInputChange(event) {
    setValInput(event.value);
  }

  return (
    <>
      <h1>{Hdr1}</h1>
      <h4>{Hdr2}</h4>
      <p>{Para1}</p>
      <p>{Para2}</p>
      <p>
        Count = {Count}/{valState}
      </p>
      <input onChange={onInputChange} value={valInput} type="text" />
      <button onClick={onCountVal}>Count</button>
    </>
  );
}

export default ChildPropComponent;
