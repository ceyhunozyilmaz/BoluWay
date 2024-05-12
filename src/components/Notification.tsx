import Link from "next/link";
import React from "react";

const Notification = () => {
  return (
    <Link href="/menu">
      <div className="h-12 bg-red-500 text-white px-4 flex items-center justify-center text-center text-sm md:text-base cursor-pointer">
        50$ üzeri tüm siparişler için ücretsiz teslimat. Yemeğinizi şimdi
        sipariş edin!
      </div>
    </Link>
  );
};

export default Notification;
