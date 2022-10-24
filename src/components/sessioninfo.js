import React from "react";
import SessionBox from "./sessionbox";
import { v4 as uuidv4 } from "uuid";

export default function SessionInfo({ sessionInfo }) {
  return (
    <div className="p-2">
      <div className="flex flex-wrap flex-col w-full md:px-5">
        {sessionInfo
          ? sessionInfo.map((el) => (
              <SessionBox sessionInfo={el} key={uuidv4()} />
            ))
          : "Loading..."}
      </div>
    </div>
  );
}
