import axios from "axios";
import { useEffect, useState } from "react";
import SessionInfo from "./sessioninfo";
import SessionInfoWhite from "./sessioninfowhite";
export default function SessionSection() {
  const [sessionTimes, setSessionTimes] = useState([]);
  const [sessionCloseTimes, setSessionCloseTimes] = useState([]);
  const [firstSessionsInfo, setFirstSessionInfo] = useState();
  const [secondSessionsInfo, setSecondSessionInfo] = useState();
  const [thirdSessionsInfo, setThirdSessionInfo] = useState();
  const [fourthSessionsInfo, setFourthSessionInfo] = useState();
  const [fifthSessionsInfo, setFifthSessionInfo] = useState();
  const [sixthSessionsInfo, setSixthSessionInfo] = useState();
  const [seventhSessionsInfo, setSeventhSessionInfo] = useState();

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
        setSeventhSessionInfo(
          res.data[0].sessions.filter(
            (el) => el.startsAt.substring(11, 16) === sessionTimes[6]
          )
        );
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
      <SessionInfo
        sessionTimes={sessionTimes[0]}
        sessionsInfo={firstSessionsInfo}
        sessionCloseTimes={sessionCloseTimes[0]}
      />
      <SessionInfoWhite
        sessionTimes={sessionTimes[1]}
        sessionsInfo={secondSessionsInfo}
        sessionCloseTimes={sessionCloseTimes[1]}
      />
      <SessionInfo
        sessionTimes={sessionTimes[2]}
        sessionsInfo={thirdSessionsInfo}
        sessionCloseTimes={sessionCloseTimes[2]}
      />
      <SessionInfoWhite
        sessionTimes={sessionTimes[3]}
        sessionsInfo={fourthSessionsInfo}
        sessionCloseTimes={sessionCloseTimes[3]}
      />
      <SessionInfo
        sessionTimes={sessionTimes[4]}
        sessionsInfo={fifthSessionsInfo}
        sessionCloseTimes={sessionCloseTimes[4]}
      />
      <SessionInfoWhite
        sessionTimes={sessionTimes[5]}
        sessionsInfo={sixthSessionsInfo}
        sessionCloseTimes={sessionCloseTimes[5]}
      />
      <SessionInfo
        sessionTimes={sessionTimes[6]}
        sessionsInfo={seventhSessionsInfo}
        sessionCloseTimes={sessionCloseTimes[6]}
      />
    </section>
  );
}
