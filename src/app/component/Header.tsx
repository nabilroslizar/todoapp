import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex h-24 justify-center bg-black">
      <nav className="container">
        <div className="flex items-center justify-start gap-2 text-sm text-white mt-10 text-center">
          <Link href="/">
            <div className="bg-slate-400 px-6 py-2 border-slate rounded mx-2 text-white hover:bg-slate-600">
              HOME
            </div>
          </Link>

          <Link href="/todos">
            <div className="bg-green-500 px-6 py-2 border-slate rounded mx-2 text-white hover:bg-green-800">
              TO DO LIST
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
