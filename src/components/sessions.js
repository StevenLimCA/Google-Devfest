import axios from "axios";
import { useEffect, useState } from "react";
import SessionBox from "./sessionbox";
import { v4 as uuidv4 } from "uuid";
export default function SessionSection() {
  const [sessionsInfo, setSessionInfo] = useState();
  useEffect(() => {
    const { REACT_APP_SESSIONIZE_ID } = process.env;

    const fetchData = () => {
      axios(
        `https://sessionize.com/api/v2/${REACT_APP_SESSIONIZE_ID}/view/Sessions`
      ).then((res) => {
        setSessionInfo(res.data[0].sessions);
      });
    };
    fetchData();
  }, []);

  return (
    <section className=" mt-5 py-5">
      <img
        src="./schedule.jpg"
        className="rounded-2xl overflow-hidden h-full mx-auto md:h-128 w-full"
        alt="By Debby Hudson"
      ></img>
      <h3 className="text-center text-Green500 font-semibold animate-pulse">
        Date: {process.env.REACT_APP_DEVFEST_DATE}
      </h3>
      <div className="flex flex-wrap flex-column w-full">
        {sessionsInfo
          ? sessionsInfo.map((el) => (
              <SessionBox sessionInfo={el} key={uuidv4()} />
            ))
          : "Loading..."}
      </div>
    </section>
  );
}
