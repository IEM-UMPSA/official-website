import React, { Component } from 'react';
import Hero from './HeroSection';
import Awards from './AwardsSection';
import Banner from './BannerSection';
import Event from './EventSection';
import Cta from './CtaSection';
import PriceTab from '../Elements/Tab/PriceTab';
import AboutArea from './AboutArea';
import Counter from '../Elements/Counter/CounterStyleTwo';

class HomeMain extends Component {

    render() {

        return (
            <main>
	            {/* hero-start */}
				<Hero />
				{/* hero-end */}

				{/* awards-start */}
				<Awards />
				{/* awards-end */}

				{/* about-area-start */}
				<AboutArea />
				{/* about-area-end */}

				{/* event-start */}
				<Event />
				{/* event-end */}

				{/* counter-start */}
				<Counter />
				{/* counter-end */}

				{/* tab-start */}
				<PriceTab />
				{/* tab-end */}
				
				{/* cta-start */}
				<Cta />
				{/* cta-end */}

        	</main>
        );
    }
}

export default HomeMain;