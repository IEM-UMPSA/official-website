import Link from "next/link";


const EventItem = ({
    date,
    time,
    venue,
    title,
    slug,
    
  }) => {
    return (
        <div className="row">
            <div className="col-xxl-10 offset-xxl-1 col-xl-10 offset-xl-1 col-lg-10 offset-lg-1">
                <div className="events__item mb-10 hover__active">
                    <div className="events__item-inner d-sm-flex align-items-center justify-content-between white-bg">
                    <div className="events__content">
                        <div className="events__meta">
                            <span>{date}</span>
                            <span>{time}</span>
                            <span>{venue}</span>
                        </div>
                        <h3 className="events__title"><Link href={`/event/${slug}`}>{title}</Link></h3>
                    </div>
                    <div className="events__more">
                        <Link href={`/event/${slug}`} className="link-btn">View More<i className="fas fa-arrow-right"></i>
                            <i className="fas fa-arrow-right"></i>
                        </Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
  };
  
  export default EventItem;
  