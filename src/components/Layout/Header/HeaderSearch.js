import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';

const HeaderSearch = ({setSearchOpen, searchOpen}) => {

      const router = useRouter()
      const [path, setPath] = useState("")
      useEffect(() => {
        setPath(router.pathname)
      }, [router])

      return (
    
        <div className={searchOpen ? "header__search-3 search-opened": "header__search-3"}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="header__search-3-inner text-center">
                            <form action="#">
                                <div className="header__search-3-btn">
                                    <a href="#!" className="header__search-3-btn-close" onClick={() => setSearchOpen(false)}><i className="fas fa-times"></i></a>
                                </div>
                                <div className="header__search-3-header">
                                    <h3>Search</h3>
                                </div>
                                <div className="header__search-3-categories">
                                    <ul className="search-category">
                                        <li><Link href="/course-grid"><a>All Courses</a></Link></li>
                                        <li><Link href="/instructor"><a>Instructor</a></Link></li>
                                        <li><Link href="/event-details"><a>Event</a></Link></li>
                                        <li><Link href="/cart"><a>My Cart</a></Link></li>
                                        <li><Link href="/blog"><a>Blog</a></Link></li>
                                        <li><Link href="/contact"><a>Contact</a></Link></li>
                                    </ul>
                                </div>
                                <div className="header__search-3-input p-relative">
                                    <input type="text" placeholder="Search for products... "/>
                                    <button type="submit"><i className="fas fa-search"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
          
    )
}

export default HeaderSearch;