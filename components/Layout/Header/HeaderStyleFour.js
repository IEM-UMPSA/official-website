import React, { useState, useEffect, Component } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import BurgerMenus from './BurgerMenus';
import Head from 'next/head';
import Image from 'next/image';

const HeaderFour = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    const router = useRouter()
    const [path, setPath] = useState("")
    useEffect(() => {
        setPath(router.pathname)
    }, [router])

    // Sticky Menu Area start
    useEffect(() => {
        window.addEventListener('scroll', sticky);
        return () => {
            window.removeEventListener('scroll', sticky);
        };
    });

    const sticky = (e) => {
        const header = document.querySelector('.header__area');
        const scrollTop = window.scrollY;
        scrollTop >= 1 ? header.classList.add('sticky') : header.classList.remove('sticky');
    };
    // Sticky Menu Area End

    return (
        <React.Fragment>
            <Head>
                <title>Educal – Online Course and Education React, Nextjs Template</title>
                <link href="https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            </Head>
            <header>
                <div id="header-sticky" className="header__area header__padding-2 header__shadow">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-2 col-sm-4 col-6">
                                <div className="header__left d-flex">
                                    <div className="logo">
                                        <Link href="/">
                                            <img src="assets/img/logo/logo.png" alt="logo" />
                                        </Link>
                                    </div>
                                    <div className="header__category d-none d-lg-block">
                                        <nav>
                                            <ul>
                                                <li>
                                                    <Link href="/course-grid" className="cat-menu d-flex align-items-center">
                                                        <div className="cat-dot-icon d-inline-block">
                                                            <svg viewBox="0 0 276.2 276.2">
                                                                <g>
                                                                    <g>
                                                                        <path className="cat-dot" d="M33.1,2.5C15.3,2.5,0.9,17,0.9,34.8s14.5,32.3,32.3,32.3s32.3-14.5,32.3-32.3S51,2.5,33.1,2.5z" />
                                                                        <path className="cat-dot" d="M137.7,2.5c-17.8,0-32.3,14.5-32.3,32.3s14.5,32.3,32.3,32.3c17.8,0,32.3-14.5,32.3-32.3S155.5,2.5,137.7,2.5    z" />
                                                                        <path className="cat-dot" d="M243.9,67.1c17.8,0,32.3-14.5,32.3-32.3S261.7,2.5,243.9,2.5S211.6,17,211.6,34.8S226.1,67.1,243.9,67.1z" />
                                                                        <path className="cat-dot" d="M32.3,170.5c17.8,0,32.3-14.5,32.3-32.3c0-17.8-14.5-32.3-32.3-32.3S0,120.4,0,138.2S14.5,170.5,32.3,170.5z" />
                                                                        <path className="cat-dot" d="M136.8,170.5c17.8,0,32.3-14.5,32.3-32.3c0-17.8-14.5-32.3-32.3-32.3c-17.8,0-32.3,14.5-32.3,32.3    C104.5,156.1,119,170.5,136.8,170.5z" />
                                                                        <path className="cat-dot" d="M243,170.5c17.8,0,32.3-14.5,32.3-32.3c0-17.8-14.5-32.3-32.3-32.3s-32.3,14.5-32.3,32.3    C210.7,156.1,225.2,170.5,243,170.5z" />
                                                                        <path className="cat-dot" d="M33,209.1c-17.8,0-32.3,14.5-32.3,32.3c0,17.8,14.5,32.3,32.3,32.3s32.3-14.5,32.3-32.3S50.8,209.1,33,209.1z    " />
                                                                        <path className="cat-dot" d="M137.6,209.1c-17.8,0-32.3,14.5-32.3,32.3c0,17.8,14.5,32.3,32.3,32.3c17.8,0,32.3-14.5,32.3-32.3    S155.4,209.1,137.6,209.1z" />
                                                                        <path className="cat-dot" d="M243.8,209.1c-17.8,0-32.3,14.5-32.3,32.3c0,17.8,14.5,32.3,32.3,32.3c17.8,0,32.3-14.5,32.3-32.3    S261.6,209.1,243.8,209.1z" />
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <span>Category</span>

                                                    </Link>
                                                    <ul className="cat-submenu">
                                                        <li><Link href="/course-grid">English Learning</Link></li>
                                                        <li><Link href="/course-grid">Web Development</Link></li>
                                                        <li><Link href="/course-grid">Logo Design</Link></li>
                                                        <li><Link href="/course-grid">Motion Graphics</Link></li>
                                                        <li><Link href="/course-grid">Video Edition</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-9 col-xl-9 col-lg-8 col-md-10 col-sm-8 col-6">
                                <div className="header__right d-flex justify-content-end align-items-center">
                                    <div className="main-menu main-menu-2 d-none d-xl-block">
                                        <nav id="mobile-menu">
                                            <ul>
                                                <li className="has-dropdown">
                                                    <Link href="/">Home</Link>
                                                    <ul className="submenu">
                                                        <li><Link href="/">Home Style 1</Link></li>
                                                        <li><Link href="/home-2">Home Style 2</Link></li>
                                                        <li><Link href="/home-3">Home Style 3</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="has-dropdown">
                                                    <Link href="/course-grid">Courses</Link>
                                                    <ul className="submenu">
                                                        <li><Link href="/course-grid">Courses</Link></li>
                                                        <li><Link href="/course-list">Courses List</Link></li>
                                                        <li><Link href="/course-sidebar">Courses Sidebar</Link></li>
                                                        <li><Link href="/course-details">Courses Details</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="has-dropdown">
                                                    <Link href="/blog">Blog</Link>
                                                    <ul className="submenu">
                                                        <li><Link href="/blog">Blog</Link></li>
                                                        <li><Link href="/blog-details">Blog Details</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="has-dropdown">
                                                    <Link href="/course-grid">Pages</Link>
                                                    <ul className="submenu">
                                                        <li><Link href="/about">About</Link></li>
                                                        <li><Link href="/instructor">Instructor</Link></li>
                                                        <li><Link href="/instructor-details">Instructor Details</Link></li>
                                                        <li><Link href="/event-details">Event Details</Link></li>
                                                        <li><Link href="/cart">My Cart</Link></li>
                                                        <li><Link href="/wishlist">My Wishlist</Link></li>
                                                        <li><Link href="/checkout">Checkout</Link></li>
                                                        <li><Link href="/sign-in">Sign In</Link></li>
                                                        <li><Link href="/sign-up">Sign Up</Link></li>
                                                        <li><Link href="/error">Error</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link href="/contact">Contact</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="header__btn header__btn-2 ml-50 d-none d-sm-block">
                                        <Link href="/sign-up" className="e-btn">Sign Up</Link>
                                    </div>
                                    <div className="sidebar__menu d-xl-none">
                                        <div className="sidebar-toggle-btn ml-30" id="sidebar-toggle" onClick={() => { setMenuOpen(!menuOpen) }}>
                                            <span className="line"></span>
                                            <span className="line"></span>
                                            <span className="line"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <BurgerMenus menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <div onClick={() => setMenuOpen(false)} className={menuOpen ? "body-overlay show" : "body-overlay"}></div>
            </header>
        </React.Fragment>
    );
}

export default HeaderFour;