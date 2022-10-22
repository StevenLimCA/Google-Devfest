import React from "react";

export default function SessionBox({ sessionInfo }) {
  return (
    <div>
      <div className="my-3 ">
        {" "}
        <div className="font-bold">{" " + sessionInfo.room} </div>
        <h4 className="font-medium">{sessionInfo.title}</h4>{" "}
        <div className="flex flex-row justify-between my-1.5"></div>
        <div>
          <div className="my-2">{sessionInfo.description}</div>
          <div className="font-medium">Speakers:</div>
          <div>{sessionInfo.speakers.map((el) => el.name + " ")}</div>
        </div>
      </div>{" "}
    </div>
  );
}
