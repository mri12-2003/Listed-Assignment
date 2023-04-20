import React from "react";
import style from "./Box.module.css";

import { AiOutlineLike } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { BsFillTagsFill } from "react-icons/bs";
import { BsFillCalendarEventFill } from "react-icons/bs";

export default function Box() {
  return (
    <div className={style.mainbox}>
      <div className={style.box1}>
        <p className={style.text}>Total Revenues</p>
        <p className={style.number}>$2,129,430</p>
        <BsFillCalendarEventFill className={style.revenue}/>
      </div>
      <div className={style.box2}>
        <p className={style.text}>Total Transactions</p>
        <p className={style.number}>1,520</p>
        <BsFillTagsFill className={style.transactions} />
      </div>
      <div className={style.box3}>
        <p className={style.text}>Total Likes</p>
        <p className={style.number}>9,721</p>
        <AiOutlineLike className={style.likes} />
      </div>
      <div className={style.box4}>
        <p className={style.text}>Total Users</p>
        <p className={style.number}>892</p>
        <FiUsers className={style.userlogo} />
      </div>
    </div>
  );
}
