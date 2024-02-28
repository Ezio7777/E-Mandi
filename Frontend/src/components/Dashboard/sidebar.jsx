import React from "react";
import Swal from "sweetalert2";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from "react-icons/bs";

import { Link, useNavigate } from "react-router-dom";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const navigate = useNavigate();

  //Logout
  const onLogOut = () => {
    Swal.fire({
      title: "Log Out",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire({
        //   title: "Log Out",
        //   text: "",
        //   icon: "success",
        // });
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        navigate("/");
        window.location.reload();
      }
    });
  };

  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon_header" /> SHOP
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFillArchiveFill className="icon" /> Products
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFillGrid3X3GapFill className="icon" /> Categories
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsPeopleFill className="icon" /> Customers
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsListCheck className="icon" /> Inventory
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsMenuButtonWideFill className="icon" /> Reports
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFillGearFill className="icon" /> Setting
          </a>
        </li>
        <li className="sidebar-list-item" onClick={onLogOut}>
          <a>
            <i className="fa-solid fa-right-from-bracket icon"></i> Log Out
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
