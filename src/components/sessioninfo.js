import React from "react";
import SessionBox from "./sessionbox";
import { v4 as uuidv4 } from "uuid";

export default function SessionInfo({ sessionInfo }) {
  console.log(sessionInfo);
  return (
    <div className=" bg-slate-100 rounded-2xl p-5">
      <div className="flex flex-wrap flex-col w-full px-10">
        {sessionInfo
          ? sessionInfo.map((el) => (
              <SessionBox sessionInfo={el} key={uuidv4()} />
            ))
          : "Loading..."}
      </div>
    </div>
  );
}
