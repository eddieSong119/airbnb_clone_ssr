import React from "react";
import Link from "next/link";
import Image from "next/image";

import Styles from "./Venue.module.css";

export default function Venue(props) {
  const { id, imageUrl, title, pricePerNight, rating } = props.venue;

  return (
    <div>
      <Link to={`/venue/${id}`}>
        <div className={Styles.Wrapper}>
          <Image className={Styles.Img} src={imageUrl} alt="venue" />
          <div className={Styles.Title}>{title}</div>
          <div className={Styles.Price}>{pricePerNight} per night</div>
          <div className={Styles.Rating}>{rating}</div>
        </div>
      </Link>
    </div>
  );
}
