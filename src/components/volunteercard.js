import React from "react";

export default function VolunteerCard({ volunteerInfo }) {
  return (
    <div>
      {/* <img src={volunteerInfo.img} alt={volunteerInfo.name} className="" /> */}
      <p>{volunteerInfo.name} </p>
      <p>{volunteerInfo.desc}</p>
    </div>
  );
}
