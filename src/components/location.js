import React from "react";
import VenueImage from "../assets/temp-venue-placeholder.jpeg";

const LocationSection = () => (
  <section className="my-20">
    <h2 className="text-center">Venue</h2>
    <div className="w-11/12 sm:my-5 mx-auto grid grid-cols-1 lg:grid-cols-2">
      <div className="mx-auto px-4">
        <a href="https://www.google.com">
          <img
            src={VenueImage}
            className="rounded-2xl overflow-hidden"
            alt="North Eastern University"
          ></img>
        </a>
      </div>
      <div className="mx-auto px-4 text-center">
        <p className="text-xl lg:text-left lg:pt-0">
          We're excited to announce that DevFest{" "}
          {process.env.REACT_APP_CHAPTER_NAME} will take place at{" "}
          <span className="font-semibold">North Eastern University.</span>
        </p>

        <a
          href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.7739782257327!2d-123.11786228389738!3d49.28067987883306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486710a689ab2b5%3A0xae55dc25eb71e3d6!2sNortheastern%20University%20%E2%80%94%20Vancouver!5e0!3m2!1sen!2sca!4v1664922351693!5m2!1sen!2sca"
          className="hover:text-Blue500 lg:text-left"
        >
          <p className="text-lg">
            Northeastern University - Vancouver <br />
            410 W Georgia St #1400 Vancouver, BC V6B 1Z3
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.7739782257327!2d-123.11786228389738!3d49.28067987883306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486710a689ab2b5%3A0xae55dc25eb71e3d6!2sNortheastern%20University%20%E2%80%94%20Vancouver!5e0!3m2!1sen!2sca!4v1664922351693!5m2!1sen!2sca"
            className="w-full"
            allowfullscreen=""
            loading="lazy"
            title="google maps"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </a>
      </div>
    </div>
  </section>
);

export default LocationSection;
