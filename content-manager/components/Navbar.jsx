import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className='bg-slate-900 w-100'>
      <div className='flex justify-between items-center mx-3 h-12  text-zinc-100'>
        <h1 className='nav-logo text-lg'>Content Manager</h1>
        <ul className='flex text-sm'>
          <Link href='/'>
            <li className='mr-4'>Home</li>
          </Link>
          <Link href='/resources/new'>
            <li className='mr-4'>Add</li>
          </Link>
          <li>Features</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
