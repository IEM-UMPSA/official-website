import Link from "next/link";
  
  const JobItem = ({
    title,
    category,
    status,
    company,
    salary,
    venue,
    link
  }) => {
    return (
    
     <div className="row">
                  <div className="col-xxl-8 col-xl-7 col-lg-6">
                    <h5 className="job-list-title mb-30">
                      <Link href="#">
                        {title}
                      </Link>
                    </h5>
                    <span className="job-name">{category}</span>
                    <span className="job-state mt-50 text-green-500">
                      <Link href="#">
                       {status}
                      </Link>
                    </span>
                  </div>
                  <div className="col-xxl-4 col-xl-5 col-lg-6">
                    <h5 className="job-list-sm-title mb-10">{company}</h5>
                    <span className="job-sm-name mb-10">{salary} </span>
                    <span className="job-type">{venue}</span>
                    <div className="job-btn mt-30">
                      <Link href={link} className="tp-solid-btn-square bg-gray-500 hover:text-gray-500 hover:border-gray-500">Apply now</Link>
                    </div>
                  </div>
                </div>
    );
  };
  
  export default JobItem;
  