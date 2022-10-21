import axios from "axios";
import { useEffect, useState } from "react";
import SessionBox from "./sessionbox";
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
  console.log(sessionsInfo);
  return (
    <section>
      {sessionsInfo
        ? sessionsInfo.map((el) => <SessionBox sessionInfo={el} />)
        : "Loading..."}
    </section>
  );
}
