import axios from "axios";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import SessionInfo from "./sessioninfo";

export default function SessionSection() {
  const [sessionTimes, setSessionTimes] = useState([]);
  const [sessionCloseTimes, setSessionCloseTimes] = useState([]);
  const [allSessionsInfo, setAllSessionsInfo] = useState(); // Object Array

  useEffect(() => {
    const { REACT_APP_SESSIONIZE_ID } = process.env; //string
    const sessionStartTimes = []; // hh:mm string array
    const sessionEndTimes = []; // hh:mm string array
    const fetchData = () => {
      axios(
        `https://sessionize.com/api/v2/${REACT_APP_SESSIONIZE_ID}/view/Sessions`
      ).then((res) => {
        const results = res.data[0]; //expected value: Object
        for (let i = 0; i < results.sessions.length; i++) {
          const startTimes = results.sessions[i].startsAt.substring(11, 16);
          const endTimes = results.sessions[i].endsAt.substring(11, 16);
          if (!sessionStartTimes.includes(startTimes)) {
            // if not exist,
            sessionStartTimes.push(startTimes); // add to sessionStart array
            sessionEndTimes.push(endTimes); // add to sessionEnd array
          }
        }
        setSessionTimes(sessionStartTimes);
        setSessionCloseTimes(sessionEndTimes);
        setAllSessionsInfo(results.sessions);
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

      <div className="rounded-2xl md:p-5">
        <div>
          {sessionTimes
            ? sessionTimes.map((el, i) => (
                <div key={uuidv4()}>
                  <h2> {el + " - " + sessionCloseTimes[i]}</h2>
                  <SessionInfo
                    key={uuidv4()}
                    sessionInfo={allSessionsInfo.filter(
                      (el) => el.startsAt.substring(11, 16) === sessionTimes[i]
                    )}
                  />
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </section>
  );
}
