import axios from "axios";
import { useEffect, useState } from "react";
import SessionBox from "./sessionbox";
import { v4 as uuidv4 } from "uuid";
export default function SessionSection() {
  const [sessionTimes, setSessionTimes] = useState([]);
  const [sessionCloseTimes, setSessionCloseTimes] = useState([]);
  const [firstSessionsInfo, setFirstSessionInfo] = useState();
  const [secondSessionsInfo, setSecondSessionInfo] = useState();
  const [thirdSessionsInfo, setThirdSessionInfo] = useState();
  const [fourthSessionsInfo, setFourthSessionInfo] = useState();
  const [fifthSessionsInfo, setFifthSessionInfo] = useState();
  const [sixthSessionsInfo, setSixthSessionInfo] = useState();
  //   const [seventhSessionsInfo, setSeventhSessionInfo] = useState();
  //   const sessionStartTimes = [];
  //   const sessionEndTimes = [];

  useEffect(() => {
    const { REACT_APP_SESSIONIZE_ID } = process.env;
    const sessionStartTimes = [];
    const sessionEndTimes = [];
    const fetchData = () => {
      axios(
        `https://sessionize.com/api/v2/${REACT_APP_SESSIONIZE_ID}/view/Sessions`
      ).then((res) => {
        for (let i = 0; i < res.data[0].sessions.length; i++) {
          const startTimes = res.data[0].sessions[i].startsAt.substring(11, 16);
          const endTimes = res.data[0].sessions[i].endsAt.substring(11, 16);
          if (!sessionStartTimes.includes(startTimes)) {
            sessionStartTimes.push(startTimes);
            sessionEndTimes.push(endTimes);
          }
        }

        setSessionTimes(sessionStartTimes);
        setSessionCloseTimes(sessionEndTimes);
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
        setFourthSessionInfo(
          res.data[0].sessions.filter(
            (el) => el.startsAt.substring(11, 16) === sessionTimes[3]
          )
        );
        setFifthSessionInfo(
          res.data[0].sessions.filter(
            (el) => el.startsAt.substring(11, 16) === sessionTimes[4]
          )
        );
        setSixthSessionInfo(
          res.data[0].sessions.filter(
            (el) => el.startsAt.substring(11, 16) === sessionTimes[5]
          )
        );
        // setSeventhSessionInfo(
        //   res.data[0].sessions.filter(
        //     (el) => el.startsAt.substring(11, 16) === sessionTimes[6]
        //   )
        // );
      });
    };
    fetchData();
  }, [sessionTimes]);

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
          {sessionTimes[0]} - {sessionCloseTimes[0]}{" "}
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
          {sessionTimes[1]} - {sessionCloseTimes[1]}{" "}
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
          {sessionTimes[2]} - {sessionCloseTimes[2]}{" "}
        </h3>
        <div className="flex flex-wrap flex-col w-full bg-slate-100 px-10">
          {thirdSessionsInfo
            ? thirdSessionsInfo.map((el) => (
                <SessionBox sessionInfo={el} key={uuidv4()} />
              ))
            : "Loading..."}
        </div>
      </div>
      <div className=" rounded-2xl p-5">
        <h3>
          {" "}
          {sessionTimes[3]} - {sessionCloseTimes[3]}{" "}
        </h3>
        <div className="flex flex-wrap flex-col w-full px-10">
          {fourthSessionsInfo
            ? fourthSessionsInfo.map((el) => (
                <SessionBox sessionInfo={el} key={uuidv4()} />
              ))
            : "Loading..."}
        </div>
      </div>{" "}
      <div className=" rounded-2xl p-5 bg-slate-100">
        <h3>
          {" "}
          {sessionTimes[4]} - {sessionCloseTimes[4]}{" "}
        </h3>

        <div className="flex flex-wrap flex-col w-full px-10">
          {fifthSessionsInfo
            ? fifthSessionsInfo.map((el) => (
                <SessionBox sessionInfo={el} key={uuidv4()} />
              ))
            : "Loading..."}
        </div>
      </div>
      <div className=" rounded-2xl p-5 ">
        <h3>
          {" "}
          {sessionTimes[5]} - {sessionCloseTimes[5]}{" "}
        </h3>

        <div className="flex flex-wrap flex-col w-full px-10">
          {sixthSessionsInfo
            ? sixthSessionsInfo.map((el) => (
                <SessionBox sessionInfo={el} key={uuidv4()} />
              ))
            : "Loading..."}
        </div>
      </div>
      {/* <div className=" rounded-2xl p-5 ">
        <h3>
          {" "}
          {sessionTimes[6]} - {sessionCloseTimes[6]}{" "}
        </h3>

        <div className="flex flex-wrap flex-col w-full px-10">
          {seventhSessionsInfo
            ? seventhSessionsInfo.map((el) => (
                <SessionBox sessionInfo={el} key={uuidv4()} />
              ))
            : "Loading..."}
        </div>
      </div> */}
    </section>
  );
}
