"use client"
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Scroll threshold
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed  top-0 w-full z-10 flex justify-between items-center sm:px-12 px-6 py-4 transition-all duration-300 ${
        scroll ? "bg-gray-800 text-white shadow-md " : "bg-transparent"
      }`}
    >
      <div>
        <h1 className="bg-orange-600 text-white p-3 rounded-full font-semibold text-lg">
          MA
        </h1>
      </div>
      <div>
        <ul>
          <li className="hidden md:block space-x-4 ">
            <Link className="hover:text-orange-600" href="/homepage">
              Home
            </Link>
            <Link className="hover:text-orange-600" href="/about">
              About
            </Link>
            <Link className="hover:text-orange-600" href="/portfolio">
              Portfolio
            </Link>
            <Link className="hover:text-orange-600" href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="hidden md:block">
        <Link
          className="bg-orange-600 text-white py-2 px-4 rounded-3xl text-lg hover:bg-slate-800 hover:text-orange-400"
          href="/"
        >
          Hire Me
        </Link>
      </div>

      <Sheet>
        <SheetTrigger className="md:hidden text-orange-600">
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="flex">
              <h1 className="bg-orange-600 text-white p-3 rounded-full font-semibold text-lg">
                MA
              </h1>
            </SheetTitle>
            <SheetDescription className="space-y-5 pt-8 text-lg font-semibold ">
              <Link className="block hover:text-orange-600" href="/homepage">
                Home
              </Link>
              <Link className="block hover:text-orange-600" href="/about">
                About
              </Link>
              <Link className="block hover:text-orange-600" href="/portfolio">
                Portfolio
              </Link>
              <Link className="block hover:text-orange-600" href="/contact">
                Contact
              </Link>
              <div className="pt-8">
                <Link
                  className="bg-orange-600 text-white py-2 px-4 rounded-3xl text-lg hover:bg-orange-700"
                  href="/"
                >
                  Hire Me
                </Link>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </header>
  );
}
