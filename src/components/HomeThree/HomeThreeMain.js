import React, { Component } from 'react';
import About from '../HomeTwo/AboutSection';
import Course from './CourseSection';
import CtaThree from './CtaSectionThree';
import Teacher from './TeacherSection';
import WhyChoose from '../HomeTwo/WhyChooseSection';
import Blog from '../HomeTwo/BlogSection';
import TestimonialThree from './TestimonialSectionThree';
import SliderStyleOne from '../Elements/Slider/SliderStyleOne'
import dynamic from 'next/dynamic';
const BrandWithNoSSR = dynamic(() => import('../Elements/Brand/BrandSection'), {
  ssr: false
})


class HomeThreeMain extends Component {

    render() {

        return (
            <main>
				{/* slider-start */}
				<SliderStyleOne />
				{/* slider-end */}

	            {/* about-start */}
				<About />
				{/* about-end */}

				{/* brand-start */}
				<BrandWithNoSSR />
				{/* brand-end */}

                {/* course-start */}
				<Course />
				{/* course-end */}

                {/* teacher-start */}
				<Teacher />
				{/* teacher-end */}

                {/* cta-start */}
				<CtaThree />
				{/* cta-end */}

				{/* testimonial-start */}
				<TestimonialThree />
				{/* testimonial-end */}

                {/* whychoose-start */}
				<WhyChoose />
				{/* whychoose-end */}

                {/* blog-start */}
				<Blog />
				{/* blog-end */}

        	</main>
        );
    }
}

export default HomeThreeMain;