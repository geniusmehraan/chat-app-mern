import React from "react";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../hooks/useLogout";
const Logoutbutton = () => {
  const { logout, loading } = useLogout();
  return (
    <>
      <div className="flex items-end justify-start p-3 ">
        {loading ? (
          <span className="loading loading-spinner" />
        ) : (
          <BiLogOut className="h-7 w-7 cursor-pointer" onClick={logout} />
        )}
      </div>
    </>
  );
};

export default Logoutbutton;
