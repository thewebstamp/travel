"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";

const nav_links = [
    { name: "Home", active: true },
    { name: "Services" },
    { name: "Pricing" },
    { name: "How We Work" },
    { name: "Contact Us" }
];

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const menuAlt = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <nav className="fixed top-0 right-[50%] translate-x-[50%] z-40 py-4 lg:pt-6 container_width bg-white">
            <div className="lg:mx-10 flex_between bg-white">
                <Link href="/">
                    <Image src="/logo.svg" alt="logo" width={86} height={36} />
                </Link>
                <ul className={`font-heading transition-all absolute flex flex-col items-center gap-13 translate-x-full pt-24 z-30 bg-white ${openMenu && "!bg-gray-900 !translate-x-0"} h-screen w-screen top-0 left-0 lg:flex-row lg:gap-10 lg:relative lg:h-auto lg:w-auto lg:pt-0 lg:translate-x-0`}>
                    {
                        nav_links.map((link, i) => (
                            <Link key={i} href="/" onClick={() => { if (!link.active) alert("This is just a demo"); setOpenMenu(false); }} className={`w-[fit-content] cursor-pointer pb-[1px] transition-all text-gray-300 lg:text-gray-500 hover:text-gray-800 text-[20px] lg:text-[18.5px] font-bold ${link.active && "border-b-3 border-amber-600 font-heading !text-gray-50 lg:!text-gray-950 !font-bold"}`}>{link.name}</Link>
                        ))
                    }
                </ul>
                <div onClick={() => alert("This is just a demo")} className="hidden lg:block">
                    <Button
                        type="button"
                        title="Login"
                        icon="/user.svg"
                        variant="black_color"
                    />
                </div>
                <div className="relatve z-50 lg:hidden">
                    {
                        openMenu
                            ? <button onClick={menuAlt} type="button">
                                <Image src="/close.svg" alt="menu" width={28} height={28} />
                            </button>
                            : <button onClick={menuAlt} type="button">
                                <Image src="/menu.svg" alt="menu" width={24} height={24} />
                            </button>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;