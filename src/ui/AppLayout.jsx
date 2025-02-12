import { NavLink, Outlet } from "react-router-dom";
import {
  FaHome,
  FaHotel,
  FaWarehouse,
  FaUser,
  FaSlidersH,
} from "react-icons/fa";

const navLinkStyle =
  "text-md flex items-center m-2 px-3 py-2 hover:bg-blue-100 rounded-2xl";

const AppLayout = () => {
  return (
    <div className="flex flex-row gap-2">
      <div className="bg-green-50 h-screen sticky top-0 basis-1/6">
        {/* Logo */}
        <div className="pb-5">
          <img src="/images/logo-transparent.png" width="200px" />
        </div>
        {/* Links */}
        <NavLink to="/" className={navLinkStyle}>
          <FaHome />
          <span className="pl-2">Home</span>
        </NavLink>
        <NavLink to="/bookings" className={navLinkStyle}>
          <FaHotel />
          <span className="pl-2">Bookings</span>
        </NavLink>
        <NavLink to="/cabins" className={navLinkStyle}>
          <FaWarehouse />
          <span className="pl-2">Cabins</span>
        </NavLink>
        <NavLink to="/users" className={navLinkStyle}>
          <FaUser />
          <span className="pl-2">Users</span>
        </NavLink>
        <NavLink to="/settings" className={navLinkStyle}>
          <FaSlidersH />
          <span className="pl-2">Settings</span>
        </NavLink>
      </div>
      <div className="bg-blue-50 basis-5/6">
        <div>
          <h1>Header</h1>
        </div>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
