import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import CartIcon from "./CartIcon";
import Image from "next/image";
import UserLinks from "./UserLinks";

const Navbar = () => {
  const user = false;
  return (
    <div className="h-12 text-red-500 text-lg   p-4 flex items-center justify-between border-b-2 border-b-red-500 border- uppercase md:h-24  lg:px-20 xl:px-40">
      {/* LEFT LINKS */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Anasayfa</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">İletişim</Link>
      </div>
      {/* LOGO */}
      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href="/">BoluWay</Link>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* RIGHT LINKS */}
      <div className="hidden md:flex gap-4 items-cente justify-end flex-2">
        <div className="md:absolute top-3 right-2 lg:static flex item-center gap-2 cursor-pointer bg-amber-300 px-1 rounded-md">
          <Image src="/phone.png" alt="" width={20} height={20} />
          <a href="tel:03741231414" className="text-black">
            0374 123 14 14
          </a>
        </div>
        <UserLinks />
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
