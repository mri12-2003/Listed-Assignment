import React from "react";
import style from "./Navbar.module.css";
import { AiOutlineSearch } from "react-icons/ai";

export default function Navbar(props) {
  return (
    <div className={style.navbar}>
      <div className={style.navbarleft}>
        <p>Dashboard</p>
      </div>

      <div className={style.navright}>
        <div className={style.search}>
          <p>Search </p>
          <AiOutlineSearch className={style.searchbox}/>
        </div>

        <div className={style.iconimage}>
          <div className={style.icon}>
            <i class="fa-regular fa-bell fa-lg"></i>
          </div>

          <div className={style.images}>
            <img
              src="https://media.istockphoto.com/id/863488868/photo/portrait-of-smiling-young-man-in-city-on-sunny-day.jpg?s=612x612&w=0&k=20&c=7tD8Nm7e6eZixJWkuXE99PmX4yEvMkts8DMAiOLv3y8="
              alt="face"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
