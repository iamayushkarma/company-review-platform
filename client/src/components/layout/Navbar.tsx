import { Star } from "lucide-react";

function Navbar() {
  return (
    <header className="h-16 shadow-md flex items-center justify-between">
      <div className="mx-20">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2">
          <div className="size-10 rounded-full bg-primary flex text-white items-center justify-center">
            <Star className="size-7 border-none" fill="#FFFFFF" />
          </div>
          <div className="text-2xl">
            Review<span>&</span>
            <span className="font-bold">RATE</span>
          </div>
        </div>
        <div></div>
      </div>
    </header>
  );
}

export default Navbar;
