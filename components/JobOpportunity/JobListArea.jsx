import Link from 'next/link';
import JobItem from './JobItem';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

const JobListArea = () => {
  const { data, error } = useSWR('/api/job', fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
  return (
    <>
      <div className="job-list-area pt-100">
        <div className="container">
          {
            data.map(item => (
              <div className="job-list-item mb-50" >
                <JobItem key={item.id} {...item} />
              </div>
            ))
          }

        </div>
      </div>
    </>
  );
};

export default JobListArea;