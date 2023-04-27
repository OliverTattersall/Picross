import { useState } from "react";

export default function Node({ num, key }) {
  var [mine, updateMine] = useState(false);
  // var [noMine, updateNoMine] = useState(false);

  const handleClick = (e) => {
    updateMine(!mine);
  };

  return (
    <div className={"box" + (mine ? " filled" : "")} onClick={handleClick}>
      {/* {num} */}
    </div>
  );
}
