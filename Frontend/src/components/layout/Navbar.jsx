import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/#features" },
    { name: "Courses", path: "/courses" },
    { name: "Practice", path: "/practice" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-gray-200 shadow-sm">

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}

        <Link
          to="/"
          className="text-2xl font-bold tracking-tight"
        >
          <span className="text-blue-600">AI</span>{" "}
          <span className="text-gray-900">Sign</span>
        </Link>

        {/* Desktop Menu */}

        <nav className="hidden md:flex gap-8">

          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `transition duration-300 font-medium ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

        </nav>

        {/* Right Buttons */}

        <div className="hidden md:flex gap-4">

          <Link
            to="/login"
            className="px-5 py-2 rounded-xl border border-blue-600 text-blue-600 hover:bg-blue-50 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-5 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition shadow-lg"
          >
            Get Started
          </Link>

        </div>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl"
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="md:hidden bg-white border-t">

          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-4 hover:bg-gray-100"
            >
              {item.name}
            </NavLink>
          ))}

          <div className="px-6 py-4 flex flex-col gap-3">

            <Link
              to="/login"
              className="border border-blue-600 rounded-lg py-2 text-center text-blue-600"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="bg-blue-600 text-white rounded-lg py-2 text-center"
            >
              Get Started
            </Link>

          </div>

        </div>
      )}

    </header>
  );
}

export default Navbar;