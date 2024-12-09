import Link from "next/link";
import React from "react";

const EVENTRA = () => {
  return (
    <>
      <Link href={"/"}>
        <div className=" opacity-75 hover:opacity-100 translate-y-0 hover:-translate-y-1 duration-300 transition-all">
          EVENTRA
        </div>
      </Link>
    </>
  );
};

export default EVENTRA;
