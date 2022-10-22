import axios from "axios";
import { useEffect, useState } from "react";
import SessionBox from "./sessionbox";
import { v4 as uuidv4 } from "uuid";
export default function SessionSection() {
  const sessionStartTimes = ["10:30", "11:15", "12:00"];
  const sessionEndTimes = ["11:15", "12:00", "12:45"];
  const AmOrFm = (el) => (el >= 12 ? "PM" : "AM");
  const [firstSessionsInfo, setFirstSessionInfo] = useState();
  const [secondSessionsInfo, setSecondSessionInfo] = useState();
  const [thirdSessionsInfo, setThirdSessionInfo] = useState();
  console.log(sessionStartTimes[2].substring(0, 2));
  useEffect(() => {
    const { REACT_APP_SESSIONIZE_ID } = process.env;
    const fetchData = () => {
      axios(
        `https://sessionize.com/api/v2/${REACT_APP_SESSIONIZE_ID}/view/Sessions`
      ).then((res) => {
        setFirstSessionInfo(
          res.data[0].sessions.filter(
            (el) => el.startsAt.substring(11, 16) === sessionStartTimes[0]
          )
        );

        setSecondSessionInfo(
          res.data[0].sessions.filter(
            (el) => el.startsAt.substring(11, 16) === sessionStartTimes[1]
          )
        );
        setThirdSessionInfo(
          res.data[0].sessions.filter(
            (el) => el.startsAt.substring(11, 16) === sessionStartTimes[2]
          )
        );
      });
    };
    fetchData();
  }, []);

  return (
    <section>
      <img
        src="./schedule.jpg"
        className="rounded-2xl overflow-hidden h-full mx-auto md:h-96 w-full"
        alt="By Debby Hudson"
      />
      <h1 className="text-center">Schedule</h1>
      <h3 className="text-center text-Green500 font-semibold animate-pulse">
        Date: {process.env.REACT_APP_DEVFEST_DATE}
      </h3>
      <div className=" bg-slate-100 rounded-2xl p-5">
        <h3>
          {" "}
          {sessionStartTimes[0]} {AmOrFm(sessionStartTimes[0].substring(0, 2))}{" "}
          - {sessionEndTimes[0]} {AmOrFm(sessionEndTimes[0].substring(0, 2))}
        </h3>
        <div className="flex flex-wrap flex-col w-full px-10">
          {firstSessionsInfo
            ? firstSessionsInfo.map((el) => (
                <SessionBox sessionInfo={el} key={uuidv4()} />
              ))
            : "Loading..."}
        </div>
      </div>
      <div className="rounded-2xl p-5">
        <h3>
          {" "}
          {sessionStartTimes[1]} {AmOrFm(sessionStartTimes[1].substring(0, 2))}{" "}
          - {sessionEndTimes[1]} {AmOrFm(sessionEndTimes[1].substring(0, 2))}
        </h3>
        <div className="flex flex-wrap flex-col w-full px-10">
          {secondSessionsInfo
            ? secondSessionsInfo.map((el) => (
                <SessionBox sessionInfo={el} key={uuidv4()} />
              ))
            : "Loading..."}
        </div>{" "}
      </div>
      <div className=" bg-slate-100 rounded-2xl p-5">
        <h3>
          {" "}
          {sessionStartTimes[2]} {AmOrFm(sessionStartTimes[2].substring(0, 2))}{" "}
          - {sessionEndTimes[2]} {AmOrFm(sessionEndTimes[2].substring(0, 2))}
        </h3>
        <div className="flex flex-wrap flex-col w-full bg-slate-100 px-10">
          {thirdSessionsInfo
            ? thirdSessionsInfo.map((el) => (
                <SessionBox sessionInfo={el} key={uuidv4()} />
              ))
            : "Loading..."}
        </div>
      </div>
    </section>
  );
}
