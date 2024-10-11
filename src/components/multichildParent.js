import ChildPropComponent from "./childComponent";
import { useState } from "react";

function MultiChildParent() {
  const [childData, setChildData] = useState([
    {
      hdr1: "This is Child Element#1 header",
      hdr2: "This is child Element#1 Sub-Header",
      para1: "This is a paragraph of data",
      para2: "This is a paragraph of data",
      count: 0,
    },
    {
      hdr1: "This is Child Element#2 header",
      hdr2: "This is child Element#2 Sub-Header",
      para1: "This is a paragraph of data#1",
      para2: "This is a paragraph of data#2",
      count: 0,
    },
    {
      hdr1: "This is Child Element#3 header",
      hdr2: "This is child Element#3 Sub-Header",
      para1: "This is a paragraph of data#1",
      para2: "This is a paragraph of data#2",
      count: 0,
    },
  ]);

  function shouldUnMount(index) {
    return childData[index].count !== 10;
  }

  function onComponentCount(indx) {
    let newChildData = [...childData];
    newChildData[indx].count = newChildData[indx].count + 1;
    setChildData(newChildData);
  }

  function showComponent(index) {
    let newChildData = [...childData];
    newChildData[index].count = 0;
    setChildData(newChildData);
  }

  return (
    <>
      {childData.map((data, index) => {
        if (shouldUnMount(index)) {
          return (
            <ChildPropComponent
              key={data.hdr1}
              Hdr1={data.hdr1}
              Hdr2={data.hdr2}
              Para1={data.para1}
              Para2={data.para2}
              Count={data.count}
              fnCount={onComponentCount}
              index={index}
            />
          );
        }
        return (
          <div key={data.hdr1}>
            <hr />
            <button onClick={() => showComponent(index)}>
              Component {index + 1}
            </button>
          </div>
        );
      })}
    </>
  );
}

export default MultiChildParent;
