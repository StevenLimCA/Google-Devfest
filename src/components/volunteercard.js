import React from "react";

export default function VolunteerCard({ volunteerInfo }) {
  return (
    <div>
      {volunteerInfo.img ? (
        <img
          src={volunteerInfo.img}
          alt={volunteerInfo.name}
          className="rounded-full w-48 h-48"
        />
      ) : (
        <div className="rounded-full w-48 h-48 bg-slate-300"></div>
      )}

      <p>{volunteerInfo.name} </p>
      <p className="italic">{volunteerInfo.title}</p>
      <p>{volunteerInfo.desc}</p>
      <p className="flex justify-between">
        <a href={volunteerInfo.linkedin} alt="linked-In">
          <img src="./linkedin-in.svg" alt="linkedin" className="w-6 h-6" />
        </a>
        {volunteerInfo.website ? (
          <a
            href={volunteerInfo.website}
            alt="their website"
            className="flex flex-row"
          >
            <img
              src="./link-solid.svg"
              alt={`${volunteerInfo.name}'s website`}
              className="w-6 h-6 mx-2"
            />
          </a>
        ) : (
          ""
        )}
      </p>
    </div>
  );
}
