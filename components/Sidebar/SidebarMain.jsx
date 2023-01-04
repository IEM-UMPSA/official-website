import React, { Component } from 'react';
import Categories from './CategoriesSection';
import Search from './SearchSection';
import Language from './LanguageSection';
import Price from './PriceSection';
import SkillLevel from './SkillLevelSection';
import RelatedCourse from './RelatedCourseSection';



class SidebarMain extends Component {

    render() {

        return (
            <div className="course__sidebar-course">
                <Search />
                <Categories />
                <Language />
                <Price />
                <SkillLevel />
                <RelatedCourse />
            </div>
        );
    }
}

export default SidebarMain;