import React from "react";
import { Link } from "react-router-dom";
import style from "./Sidebar.module.css";
import { BiUserCircle } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { TbCalendarTime } from "react-icons/tb";

import { FiPieChart } from "react-icons/fi";
import { BsFillTagsFill } from "react-icons/bs";

export default function Sidebar() {
  return (
    <div className={style.left}>
      <div>
        <p className={style.board}>Board.</p> <br />
      </div>
      <div className={style.leftbottom}>
        <Link to="/Mainpage" className={style.dashboard}>
          <FiPieChart  className={style.icons}/>
          Dashboard
        </Link>
        <Link to="/Transaction" className={style.transaction}>
          <BsFillTagsFill className={style.icons} />
          Transaction
        </Link>
        <br />
        <Link to="/Schedules" className={style.schedules}>
          <TbCalendarTime className={style.icons} />
          Schedules
        </Link>
        <br />
        <Link to="/Users" className={style.users}>
          <BiUserCircle  className={style.icons}/>
          Users
        </Link>
        <br />
        <Link to="/Settings" className={style.setting}>
          <FiSettings  className={style.icons} />
          Settings
        </Link>
        <br />

        <p className={style.help}>Help</p>
        <p className={style.contact}>Contact Us</p>
      </div>

      {/* <div className={style.right}>
        <p>right part </p>
      </div> */}
    </div>
  );
}
