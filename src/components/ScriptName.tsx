import React from "react";

const ScriptName = (): JSX.Element => {
  return (
    <div>
      <input
        type="text"
        placeholder="スクリプトの名前を入力して下さい。"
        style={{ width: "400px" }}
      ></input>
    </div>
  );
};

export default ScriptName;
