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
                                      <Link href="#!" className="header__search-3-btn-close" onClick={() => setSearchOpen(false)}><i className="fas fa-times"></i></Link>
                                  </div>
                                  <div className="header__search-3-header">
                                      <h3>Search</h3>
                                  </div>
                                  <div className="header__search-3-categories">
                                      <ul className="search-category">
                                          <li><Link href="/course-grid">All Courses</Link></li>
                                          <li><Link href="/instructor">Instructor</Link></li>
                                          <li><Link href="/event-details">Event</Link></li>
                                          <li><Link href="/cart">My Cart</Link></li>
                                          <li><Link href="/blog">Blog</Link></li>
                                          <li><Link href="/contact">Contact</Link></li>
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
      );
}

export default HeaderSearch;