import React from "react";

export default function SessionBox({ sessionInfo }) {
  return (
    <div>
      <div className="my-5 bg-slate-100 rounded-2xl p-2 md:p-5">
        <div className="my-2">
          {sessionInfo.title ? (
            <>
              {" "}
              <div className=" text-sm uppercase text-slate-500">
                Session
              </div>{" "}
              <h4 className="font-medium text-lg">{sessionInfo.title} </h4>
            </>
          ) : (
            "Loading..."
          )}
        </div>{" "}
        <div className=" text-sm uppercase text-slate-500">location</div>
        <div className="text-md font-bold">
          {" " + sessionInfo.room ? sessionInfo.room : "Loading..."}
        </div>
        <div className="flex flex-row justify-between my-1.5"></div>
        <div>
          <div>
            {sessionInfo.description ? (
              <>
                {" "}
                <div className=" text-sm uppercase text-slate-500">
                  description
                </div>{" "}
                <div className="my-1">{sessionInfo.description} </div>
              </>
            ) : (
              ""
            )}
          </div>
          {sessionInfo.speakers.length > 0 ? (
            <>
              <div className="text-sm uppercase text-slate-500">Speakers:</div>
              <div>{sessionInfo.speakers.map((el) => el.name + " ")}</div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
