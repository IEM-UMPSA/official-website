import React from 'react';

const Search = ({ onSearchTermChange }) => (
  <div className="sidebar__widget mb-10">
    <div className="sidebar__widget-content">
      <div className="sidebar__search p-relative">
        <form>
          <input
            type="text"
            placeholder="Search for author or title..."
            onChange={(e) => onSearchTermChange(e.target.value)}
          />
        </form>
      </div>
    </div>
  </div>
);

export default Search;
