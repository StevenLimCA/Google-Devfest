import React from "react";
import VolunteerCard from "../components/volunteercard";
import volunteerInfo from "../data/volunteers.json";

const Volunteer = () => (
  <section className="w-11/12 2xl:w-4/5 mx-auto my-10">
    <img
      src="./volunteer.jpg"
      className="rounded-2xl overflow-hidden h-full mx-auto md:h-96 w-full"
      alt="By Hanna Busing"
    />
    <h1 className="text-center my-10">Meet Our Volunteers</h1>
    <div className="grid grid-cols-1 lg:grid-cols-3 mx-5">
      {volunteerInfo.map((el) => (
        <VolunteerCard volunteerInfo={el} />
      ))}
      {/* <div className="flex flex-wrap justify-center items-center my-10">
      <iframe
        title="Google Volunteer Form"
        src=""
        width="640"
        height="1561"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
      >
        Loading…
      </iframe>
    </div> */}
    </div>
  </section>
);

export default Volunteer;
