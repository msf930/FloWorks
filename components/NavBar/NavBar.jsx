"use client"

import React, {useEffect, useState} from "react";
import Link from "next/link";
import Logo from "../../public/og.png";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
const NavBar = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    const [header, setHeader] = useState("header")

    const listenScrollEvent = (event) => {
        if (window.scrollY < 73) {
            return setHeader("header")
        } else if (window.scrollY > 70) {
            return setHeader("header2")
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);

        return () =>
            window.removeEventListener('scroll', listenScrollEvent);
    }, []);
    return (
        <div>
            <div className={header}>
                <div className="container px-5 h-full w-full">
                    <div className="flex justify-between items-center h-full w-full">
                        <div className="flex flex-row items-center gap-1">
                            <Link href='/'>
                                <Image
                                    src={Logo}
                                    alt="logo"
                                    width={60}
                                    height={100}
                                >
                                </Image>
                            </Link>

                        </div>
                        <div className="flex sm:hidden headerLinkContainer">
                            <a href="tel:+7202631345">720-263-1345</a>
                        </div>
                        <ul className="hidden sm:flex gap-x-6 text-black">
                            <li>
                                <Link href="/">
                                    <p>Home</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/services">
                                    <p>Services</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/serviceArea">
                                    <p>Service Area</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact">
                                    <p>Contact</p>
                                </Link>
                            </li>
                            <li>
                                <div >
                                    <a  href="tel:+7202631345">720-263-1345</a>
                                </div>
                            </li>
                        </ul>
                        <div className="flex sm:hidden white" onClick={handleShowNavbar}>
                            <GiHamburgerMenu className="hamburger"/>
                        </div>
                        <div className={`nav-elements  ${showNavbar && 'active'}`}>
                            <ul>
                                <li>
                                    <Link href="/" className="navMenuLink" onClick={handleShowNavbar}>Home</Link>
                                </li>
                                <li>
                                    <Link href="/services" className="navMenuLink" onClick={handleShowNavbar}>Services</Link>
                                </li>
                                <li>
                                    <Link href="/serviceArea" className="navMenuLink" onClick={handleShowNavbar}>Service Area</Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="navMenuLink" onClick={handleShowNavbar}>Contact</Link>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;