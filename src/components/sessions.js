import axios from "axios";
import { useEffect, useState } from "react";
import SessionBox from "./sessionbox";
import { v4 as uuidv4 } from "uuid";
export default function SessionSection() {
  const firstSessionsTime = "10:30";
  const [firstSessionsInfo, setFirstSessionInfo] = useState();
  const secondSessionsTime = "11:15";
  const [secondSessionsInfo, setSecondSessionInfo] = useState();
  const thirdSessionsTime = "12:00";
  const [thirdSessionsInfo, setThirdSessionInfo] = useState();
  const url = window.location.href;
  const str = "schedule";
  console.log(url.length);
  console.log(url.indexOf(str));
  useEffect(() => {
    const { REACT_APP_SESSIONIZE_ID } = process.env;
    const fetchData = () => {
      axios(
        `https://sessionize.com/api/v2/${REACT_APP_SESSIONIZE_ID}/view/Sessions`
      ).then((res) => {
        setFirstSessionInfo(
          res.data[0].sessions.filter(
            (el) => el.startsAt.substring(11, 16) === firstSessionsTime
          )
        );

        setSecondSessionInfo(
          res.data[0].sessions.filter(
            (el) => el.startsAt.substring(11, 16) === secondSessionsTime
          )
        );
        setThirdSessionInfo(
          res.data[0].sessions.filter(
            (el) => el.startsAt.substring(11, 16) === thirdSessionsTime
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
      ></img>
      <h1 className="text-center">Schedule</h1>
      <h3 className="text-center text-Green500 font-semibold animate-pulse">
        Date: {process.env.REACT_APP_DEVFEST_DATE}
      </h3>
      <div className=" bg-slate-100">
        <h3> {firstSessionsTime} AM - 11:15 PM</h3>
        <div className="flex flex-wrap flex-column w-full">
          {firstSessionsInfo
            ? firstSessionsInfo.map((el) => (
                <SessionBox sessionInfo={el} key={uuidv4()} />
              ))
            : "Loading..."}
        </div>
      </div>
      <div>
        <h3> {secondSessionsTime} AM - 12:00 PM</h3>
        <div className="flex flex-wrap flex-column w-full">
          {secondSessionsInfo
            ? secondSessionsInfo.map((el) => (
                <SessionBox sessionInfo={el} key={uuidv4()} />
              ))
            : "Loading..."}
        </div>{" "}
      </div>
      <div className=" bg-slate-100">
        <h3> {thirdSessionsTime} AM - 12:45 PM</h3>
        <div className="flex flex-wrap flex-column w-full bg-slate-100">
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
