import React from "react";
import { Toolbar } from "primereact/toolbar";
import { UserService } from "../Services/DataService";
import { Link } from "react-router-dom";
export default function MyNavBar() {


  const startContent = (
    <div className="flex flex-wrap align-items-center gap-3">
      <Link to="/Dashboard" style={{ textDecoration: "none" }}>
        <button className="p-link inline-flex justify-content-center align-items-center text-white h-3rem w-3rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200">
          <i className="pi pi-home text-2xl"></i>
        </button>
      </Link>
      <Link to="/Account" style={{ textDecoration: "none" }}>
        <button className="p-link inline-flex justify-content-center align-items-center text-white h-3rem w-3rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200">
          <i className="pi pi-user text-2xl"></i>
        </button>
      </Link>

      <button className="p-link inline-flex justify-content-center align-items-center text-white h-3rem w-3rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200">
        <i className="pi pi-search text-2xl"></i>
      </button>
    </div>
  );

  const endContent = (
    <React.Fragment>
      <div className="flex align-items-center gap-2">
        <span className="font-bold text-bluegray-50">
          {UserService.getUserData().title}
        </span>
      </div>
    </React.Fragment>
  );

  return (
    <Toolbar
      start={startContent}
      center={<></>}
      end={endContent}
      className="bg-gray-900 shadow-2"
      style={{
        borderRadius: "3rem",
        backgroundImage:
          "linear-gradient(to right, var(--bluegray-500), var(--bluegray-800))",
      }}
    />
  );
}
