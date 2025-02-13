import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Menu, UserCircle, X, ChevronLeft } from "lucide-react";
import ExpandingSearch from "./ExpandingSearch";
import Button from "./Button";
import { CardGradient } from "./CardGradient";
import Logoutbutton from "./Logoutbutton";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
    { name: "Your Pen", slug: "/add-post", active: authStatus },
    { name: "Blogs", slug: "/all-posts", active: authStatus },
    { name: "About us", slug: "/about", active: true },
    { name: "Contact", slug: "/contact", active: true },
  ];

  return (
    <div className="flex items-center justify-between py-5 font-medium w-full pt-4 absolute top-0 left-0 px-4">
      <Link to={"/"} className="text-4xl font-medium">
        Quill.
      </Link>

      {/* Hide gradient effect on small screens */}
      <div className="hidden md:block">
        <CardGradient>
          <div className="hidden md:flex gap-5 text-white bg-black border pt-5 px-5 py-5 pb-5 rounded-2xl items-center">
            <ul className="flex gap-5">
              {navItems.map((item) =>
                item.active ? (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className="inline-block px-6 py-2 duration-200 hover:bg-white hover:text-black rounded-full cursor-pointer"
                    >
                      {item.name}
                    </button>
                  </li>
                ) : null
              )}
            </ul>
            {authStatus && (
              <Logoutbutton className="inline-block px-6 py-2 duration-200 hover:bg-white hover:text-black rounded-full cursor-pointer ml-4" />
            )}
          </div>
        </CardGradient>
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        <ExpandingSearch />
        {/* <UserCircle className="w-6 h-6 cursor-pointer text-white hover:text-white" />  will be looked at later on */}
        <Menu
          onClick={() => setVisible(true)}
          className="w-6 h-6 cursor-pointer text-white hover:text-white md:hidden"
        />
      </div>

      <div
        className={`fixed top-0 right-0 h-screen w-full bg-white transition-transform transform ${
          visible ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        <div className="flex flex-col text-black h-full">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-4 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6 text-gray-500" />
            <p>Back</p>
          </div>

          <div className="flex flex-col justify-between h-full">
            <div className="overflow-y-auto">
              {navItems.map(
                (item) =>
                  item.active && (
                    <NavLink
                      key={item.name}
                      onClick={() => setVisible(false)}
                      className="py-4 pl-6 border block"
                      to={item.slug}
                    >
                      {item.name}
                    </NavLink>
                  )
              )}
            </div>
            {authStatus && (
              <div className="mt-auto border-t">
                <Logoutbutton />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;