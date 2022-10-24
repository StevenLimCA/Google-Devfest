import axios from "axios";
import { useEffect, useState } from "react";

import { v4 as uuidv4 } from "uuid";
import SessionInfo from "./sessioninfo";

export default function SessionSection() {
  const [sessionTimes, setSessionTimes] = useState([]);
  const [sessionCloseTimes, setSessionCloseTimes] = useState([]);
  const [allSessionsInfo, setAllSessionsInfo] = useState();

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
        setAllSessionsInfo(res.data[0].sessions);
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

      <div className="rounded-2xl p-5">
        <div>
          {sessionTimes
            ? sessionTimes.map((el, i) => (
                <>
                  <h3> {el + " - " + sessionCloseTimes[i]}</h3>
                  <SessionInfo
                    sessionInfo={allSessionsInfo.filter(
                      (el) => el.startsAt.substring(11, 16) === sessionTimes[i]
                    )}
                    SessionTime={el}
                    key={uuidv4()}
                  />{" "}
                </>
              ))
            : ""}
        </div>
      </div>
    </section>
  );
}
