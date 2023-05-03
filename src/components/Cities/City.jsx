import React from "react";
import Image from "next/image";
import Link from "nextlink";

import Styles from "./City.module.css";

export default function City(props) {
  const { image, cityName, price } = props.city;

  return (
    <div>
      <Link to={`/city/${cityName}`}>
        <div className={Styles.Wrapper}>
          <Image className={Styles.Img} src={image} alt={"City Image"} />
          <div className={Styles.CityName}>{cityName}</div>
          <div className={Styles.Price}>${price} per night</div>
        </div>
      </Link>
    </div>
  );
}
