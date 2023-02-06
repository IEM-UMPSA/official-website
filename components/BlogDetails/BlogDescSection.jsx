import React, { Component } from 'react';

const BlogDesc = ({
    paragraphOne,
    paragraphTwo,
    paragraphThree,
    paragraphFour,
  }) => {
        return (
            <div>
                <div className="blog__text mb-30">
                    <p>{paragraphOne}</p>
                </div>
                {/* <div className="blog__quote grey-bg mb-45 p-relative fix">
                    <img className="quote" src="assets/img/blog/quote-1.png" alt="img not found"/>
                <blockquote>
                    <p>After I started learning design with Quillow, I realized that I had Improved to very advanced levels.</p>
                    <h4>Chris Collins</h4>
                </blockquote>
                </div> */}
                <div className="blog__text mb-30">
                    <p>{paragraphTwo}</p>
                </div>
                <div className="blog__text mb-30">
                    <p>{paragraphThree}</p>
                </div>
                <div className="blog__link mb-35">
                    <p>{paragraphFour}</p>
                    {/* <p>The little rotter bum bag a blinding shot gosh spifing butty eatonwha load of rubbish bamboozled. <a href="#"> https://educal.com/courses</a> </p> */}
                </div>
            </div>
    );
}



export default BlogDesc;
