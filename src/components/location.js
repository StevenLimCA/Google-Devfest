import React from "react";
import VenueImage from "../assets/temp-venue-placeholder.jpeg";
const LocationSection = () => (
  <section className="my-20">
    <h2 className="text-center">Venue</h2>
    <div className="w-11/12 sm:my-5 mx-auto grid grid-cols-1 lg:grid-cols-2">
      <div className="mx-auto px-4">
        <a href={`${process.env.REACT_APP_LOCATION_MAP_URL}`}>
          <img
            src={VenueImage}
            className="rounded-2xl overflow-hidden"
            alt={process.env.REACT_APP_LOCATION_NAME}
          ></img>
        </a>
      </div>
      <div className="mx-auto px-4 text-center flex flex-col justify-around">
        <p className="text-xl lg:text-left lg:pt-0">
          We're super excited to announce that DevFest{" "}
          {process.env.REACT_APP_CHAPTER_NAME} will take place at{" "}
          <span className="font-semibold">
            {process.env.REACT_APP_LOCATION_NAME}
          </span>{" "}
          on {process.env.REACT_APP_DEVFEST_DATE}.
        </p>

        <a
          href={`${process.env.REACT_APP_LOCATION_MAP_URL}`}
          className="hover:text-Blue500 lg:text-left"
        >
          <p className="text-lg">
            {" "}
            <span className="font-semibold">Address:</span>
            <br />
            {process.env.REACT_APP_LOCATION_NAME} <br />
            410 W Georgia St #1400 Vancouver, BC V6B 1Z3
          </p>
          <iframe
            src={`${process.env.REACT_APP_LOCATION_MAP_IFRAME}`}
            className="w-full rounded-2xl h-64"
            loading="lazy"
            title="google maps"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </a>
      </div>
    </div>
  </section>
);

export default LocationSection;
