import Link from "next/link";
  
  const EVentHeader = ({
    title,
    department,
    venue,
    lastUpdate,
  }) => {
    return (
        <>
        <section className="page__title-area pt-120 ">
        <div className="page__title-shape ">
        <img className="page-title-shape-5 d-none d-sm-block" src="/assets/img/page-title/page-title-shape-1.png" alt="img not found"/>
        <img className="page-title-shape-6" src="/assets/img/page-title/page-title-shape-2.png" alt="img not found"/>
        <img className="page-title-shape-7" src="/assets/img/page-title/page-title-shape-4.png" alt="img not found"/>
        <img className="page-title-shape-8" src="/assets/img/page-title/page-title-shape-5.png" alt="img not found"/>
        </div>
        <div className="container">
        <div className="row">
            <div className="col-xxl-9 col-xl-8">
                <div className="page__title-content mb-25 pr-40">
                    <div className="page__title-breadcrumb">                            
                        <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                            <li className="breadcrumb-item"><Link href="/event-details">Event</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">{title}</li>
                        </ol>
                        </nav>
                    </div>
                    <span className="page__title-pre purple-bg">{department}</span>
                    <h5 className="page__title-3">{title}</h5>
                </div>
                <div className="course__meta-2 d-sm-flex mb-30">
   
                    <div className="course__update mr-80 mb-30">
                    <h5>Last Update:</h5>
                    <p>{lastUpdate}</p>
                    </div>
                    <div className="course__update mb-30">
                    <h5>Location:</h5>
                    <p>{venue}</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
    </>
    );
  };
  
  export default EVentHeader;
  