import Link from 'next/link';

const JobListArea = () => {
  const jobListData = [
    {
      id: 1,
      title: 'Product Manager (Fintech)',
      subtitle: 'PLN 11 400 - 17 500 Before Tax (Business Contract)'
    },
    {
      id: 2,
      title: 'Lead Designer (relocation to Poland)',
      subtitle: 'EUR 4000 - 6200 Before Tax (Business Contract)'
    },

  ]
  return (
    <>
      <div className="job-list-area pt-100">
        <div className="container">
          {
            jobListData.map(item => (
              <div key={item.id} className="job-list-item mb-50">
                <div className="row">
                  <div className="col-xxl-8 col-xl-7 col-lg-6">
                    <h5 className="job-list-title mb-30">
                      <Link href="/job-details">
                        {item.title}
                      </Link>
                    </h5>
                    <span className="job-name">Product Management </span>
                    <span className="job-state mt-50">
                      <Link href="/job-details">
                       Ongoing
                      </Link>
                    </span>
                  </div>
                  <div className="col-xxl-4 col-xl-5 col-lg-6">
                    <h5 className="job-list-sm-title mb-10">{item.subtitle}</h5>
                    <span className="job-sm-name mb-10">PLN 9 500 - 14 600 Gross (Employment Contract) </span>
                    <span className="job-type">Poland (Poznań or remote work)</span>
                    <div className="job-btn mt-30">
                      <Link href="/job-details" className="tp-solid-btn-square">Apply now</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }

        </div>
      </div>
    </>
  );
};

export default JobListArea;