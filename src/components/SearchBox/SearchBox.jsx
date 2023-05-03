import React, { useState } from "react";
import { useRouter } from "next/router";

import Styles from "./SearchBox.module.css";

export default function SearchBox(props) {
  const [cityName, setCityName] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState(0);
  const router = useRouter();

  function submitSearch(e) {
    e.preventDefault();
    router.push(`/serach/${cityName}`)
  }

  return (
    <form className={`row ${Styles.Wrapper}`} onSubmit={submitSearch}>
      <div className={`col s12 ${Styles.Title}`}>Where</div>
      <input
        className={`input_field col s12 ${Styles.InputContent}`}
        type={"text"}
        placeholder="To your destination"
        onChange={(e) => setCityName(e.target.value)}
      />

      <div className={`col s6`}>
        <div className={Styles.Title}>Start</div>
        <input
          className={Styles.DatePick}
          type={"date"}
          onChange={(e) => setCheckInDate(e.target.value)}
        />
      </div>

      <div className={`col s6`}>
        <div className={Styles.Title}>Leave</div>
        <input
          className={Styles.DatePick}
          type={"date"}
          onChange={(e) => setCheckOutDate(e.target.value)}
        />
      </div>

      <div className={`col s6 ${Styles.Title}`}>Guests</div>
      <input
        className={`input_field col s12 ${Styles.InputContent}`}
        type={"text"}
        placeholder="0"
        onChange={(e) => setGuests(e.target.value)}
      />
      <button
        className={`col s3 waves-effect waves-light btn ${Styles.Button}`}
      >
        Submit
      </button>
    </form>
  );
}
