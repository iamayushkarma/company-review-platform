import { FaSearch, FaStar } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="border-b border-border bg-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
            <FaStar />
          </div>

          <h1 className="text-3xl font-semibold">
            Review<span className="text-primary">&</span>RATE
          </h1>
        </div>

        <div className="relative w-[420px]">
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-lg border border-border py-3 pl-4 pr-12 outline-none"
          />

          <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-primary" />
        </div>

        <div className="flex items-center gap-8 text-lg">
          <button>Sign Up</button>

          <button>Login</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
