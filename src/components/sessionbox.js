import React from "react";

export default function SessionBox({ sessionInfo }) {
  return (
    <div>
      <div className="my-5 lg:w-96 m-4">
        {" "}
        <div className="font-medium">{sessionInfo.title}</div>
        <div className="flex flex-row justify-between">
          <div className="my-1.5">
            {sessionInfo.startsAt.substring(11, 16)} -{" "}
            {sessionInfo.endsAt.substring(11, 16)}{" "}
          </div>
          <div>{" " + sessionInfo.room} </div>
        </div>
        <div>
          <span className="font-medium">DESCRIPTION: </span>
          <div>{sessionInfo.description}</div>
        </div>
      </div>{" "}
    </div>
  );
}
