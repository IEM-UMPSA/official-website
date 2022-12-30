import React from 'react';

const SearchArea = () => {
  return (
    <>
      <div className="search-area pt-140">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="search-wrapper">
                <div className="m-sidebar-search">
                  <input type="text" placeholder="Type your question here.." />
                  <a href="#"><i className="fal fa-search"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchArea;