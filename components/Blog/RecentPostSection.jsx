import React, { Component } from 'react';
import Link from 'next/link';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());


export default function RecentPost() {

        const { data, error } = useSWR('/api/blog', fetcher)
        if (error) return <div>Failed to load</div>
        if (!data) return <div>Loading...</div>
        return (
            <div className="sidebar__widget mb-55">
                <div className="sidebar__widget-head mb-35">
                    <h3 className="sidebar__widget-title">Recent posts</h3>
                </div>
                {data.map((post, i) => (
                <div key={i} className="sidebar__widget-content">
                    <div className="rc__post-wrapper mb-8">
                        <div className="rc__post d-flex align-items-center">
                            <div className="w-12 h-8 object-cover">
                                <Link href={`/blog/${post.slug}`}><img src={post.image} alt="img not found"/></Link>
                            </div>
                            <div className="rc__content  ml-5">
                            <div className="rc__meta">
                                <span>{post.date}</span>
                            </div>
                                <h5 className="rc__title"><Link href={`/blog/${post.slug}`}>{post.title}</Link></h5>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>   
    );
}

