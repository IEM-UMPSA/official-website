import EventItem from '../Event/EventItem';
// import eventData from "../../data/eventData";

import useSWR from 'swr';
const fetcher = (...args) => fetch(...args).then(res => res.json());


export default function Event() {
    const { data, error } = useSWR('/api/event', fetcher)
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

        return (
        <main>
            <section className="events__area pt-115 pb-120 p-relative">
                <div  className="events__shape">
                    <img className="events-1-shape" src="assets/img/events/events-shape.png" alt="img not found"/>
                    </div>
                    <div className="container">
                    <div className="row">
                        <div className="col-xxl-4 offset-xxl-4">
                            <div className="section__title-wrapper mb-20 text-center">
                                <h2 className="section__title">Upcoming <span className="yellow-bg yellow-bg-big">Events<img src="assets/img/shape/yellow-bg.png" alt="img not found"/></span></h2>
                                <p>We found {data.length} events available for you.</p>
                            </div>
                        </div>
                    </div>

                     {
                        data.map(item => (
                            <EventItem 
                                key={item.id}
                                {...item}
                            />
                           
                        ))
                    } 
                </div>
            </section>
        </main>
    )
}

