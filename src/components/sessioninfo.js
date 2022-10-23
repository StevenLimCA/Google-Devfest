import React from "react";
import SessionBox from "./sessionbox";
import { v4 as uuidv4 } from "uuid";

export default function SessionInfo({
  sessionTimes,
  sessionsInfo,
  sessionCloseTimes,
}) {
  return (
    <div className=" bg-slate-100 rounded-2xl p-5">
      <h3> {sessionTimes ? sessionTimes + " - " + sessionCloseTimes : ""}</h3>
      <div className="flex flex-wrap flex-col w-full px-10">
        {sessionsInfo
          ? sessionsInfo.map((el) => (
              <SessionBox sessionInfo={el} key={uuidv4()} />
            ))
          : "Loading..."}
      </div>
    </div>
  );
}
