import axios from "axios";
import { useEffect, useState } from "react";
import SessionBox from "./sessionbox";
import { v4 as uuidv4 } from "uuid";
export default function SessionSection() {
  const sessionTimes = ["10:30", "11:15", "12:00"];
  const [firstSessionsInfo, setFirstSessionInfo] = useState();
  const [secondSessionsInfo, setSecondSessionInfo] = useState();
  const [thirdSessionsInfo, setThirdSessionInfo] = useState();

  useEffect(() => {
    const { REACT_APP_SESSIONIZE_ID } = process.env;
    const fetchData = () => {
      axios(
        `https://sessionize.com/api/v2/${REACT_APP_SESSIONIZE_ID}/view/Sessions`
      ).then((res) => {
        setFirstSessionInfo(
          res.data[0].sessions.filter(
            (el) => el.startsAt.substring(11, 16) === sessionTimes[0]
          )
        );

        setSecondSessionInfo(
          res.data[0].sessions.filter(
            (el) => el.startsAt.substring(11, 16) === sessionTimes[1]
          )
        );
        setThirdSessionInfo(
          res.data[0].sessions.filter(
            (el) => el.startsAt.substring(11, 16) === sessionTimes[2]
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
        <h3> {sessionTimes[0]} AM - 11:15 PM</h3>
        <div className="flex flex-wrap flex-col w-full px-10">
          {firstSessionsInfo
            ? firstSessionsInfo.map((el) => (
                <SessionBox sessionInfo={el} key={uuidv4()} />
              ))
            : "Loading..."}
        </div>
      </div>
      <div className="rounded-2xl p-5">
        <h3> {sessionTimes[1]} AM - 12:00 PM</h3>
        <div className="flex flex-wrap flex-col w-full px-10">
          {secondSessionsInfo
            ? secondSessionsInfo.map((el) => (
                <SessionBox sessionInfo={el} key={uuidv4()} />
              ))
            : "Loading..."}
        </div>{" "}
      </div>
      <div className=" bg-slate-100 rounded-2xl p-5">
        <h3> {sessionTimes[2]} AM - 12:45 PM</h3>
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
