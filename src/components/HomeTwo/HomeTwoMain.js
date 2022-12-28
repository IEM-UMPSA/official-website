import React, { Component } from 'react';
import About from './AboutSection';
import HeroTwo from './HeroSectionTwo';
import Service from './ServiceSection';
import CourseTab from '../Elements/Tab/CourseTab';
import Skilline from './SkillineSection';
import WhyChoose from './WhyChooseSection';
import Counter from '../Elements/Counter/CounterStyleTwo';
import Blog from './BlogSection';
import CtaTwo from './CtaSectionTwo';
import Testimonial from '../Elements/Testimonials/TestimonialsDefault';


class HomeTwoMain extends Component {

    render() {

        return (
            <main>
	            {/* hero-start */}
				<HeroTwo />
				{/* hero-end */}

                {/* service-start */}
				<Service />
				{/* service-end */}

                {/* about-start */}
				<About />
				{/* about-end */}

                {/* course-start */}
				<CourseTab />
				{/* course-end */}

                {/* skilline-start */}
				<Skilline />
				{/* skilline-end */}

                {/* whychoose-start */}
				<WhyChoose />
				{/* whychoose-end */}

                {/* counter-start */}
				<Counter />
				{/* counter-end */}

				{/* counter-start */}
				<Testimonial />
				{/* counter-end */}

				{/* blog-start */}
				<Blog />
				{/* blog-end */}

				{/* cta-start */}
				<CtaTwo />
				{/* cta-end */}

        	</main>
        );
    }
}

export default HomeTwoMain;