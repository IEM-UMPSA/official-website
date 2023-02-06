import React, { Component } from 'react';

const BlogAuthor = ({
    author,
    aboutAuthor,
    authorImage
  }) => {

        return (
            <div className="blog__author-3 d-sm-flex grey-bg mb-90">
                <div className="blog__author-thumb-3  mr-10">
                    <img src={authorImage} alt="img not found" className=" h-20 object-cover rounded-full" />
                </div>
                <div className="blog__author-content ">
                    <h4>{author}</h4>
                    <span>Author</span>
                    <h3 className="text-sm">{aboutAuthor}</h3>
                </div>
            </div>
        );
}


export default BlogAuthor;