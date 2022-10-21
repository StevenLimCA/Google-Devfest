import React from "react";

export default function SessionBox({ sessionInfo }) {
  return (
    <div>
      <div className="my-5 sm:w-96 m-4">
        {" "}
        <div className="text-lg font-medium">{sessionInfo.title}</div>
        <div className="flex flex-row justify-between">
          <div>
            TIME: {sessionInfo.startsAt.substring(11, 16)} -{" "}
            {sessionInfo.endsAt.substring(11, 16)}{" "}
          </div>
          <div>{" " + sessionInfo.room} </div>
        </div>
        <div>
          DESCRIPTION: <div>{sessionInfo.description}</div>
        </div>
      </div>{" "}
    </div>
  );
}
