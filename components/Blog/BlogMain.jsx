import ArticleLayout from '../Common/ArticleLayout';
import Breadcrumb from '../Common/Breadcrumb';
import PaginationSection from '../Common/Pagination';
import Search from './SearchSection';
import RecentPost from './RecentPostSection';
import Category from './CategorySecion';
import Tags from './TagsSection';
import SidebarBanner from './SidebarBannerSection';
import useSWR from 'swr';
import { useState,useEffect  } from 'react';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function BlogMain({ searchResult }) {
  const [searchTerm, setSearchTerm] = useState(searchResult || '');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

    useEffect(() => {
    const timeoutId = setTimeout(() => {
    setDebouncedSearchTerm(searchTerm);
    }, 500);
    return () => {
        clearTimeout(timeoutId);
      };
    }, [searchTerm]);

  const { data, error } = useSWR(debouncedSearchTerm  ? `/api/blog/search?q=${debouncedSearchTerm}` : '/api/blog', fetcher)
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  const articlesPerPage = 6;
  const pageCount = Math.ceil(data.length / articlesPerPage);

  return (
    <main>
      <Breadcrumb pageTitle="Blog" />

      <section className="blog__area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className='row'>
                {data && data.slice(0, articlesPerPage).map((post, i) => (
                  <div key={i} className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <ArticleLayout post={post} />
                  </div>
                ))}
              </div>

              <PaginationSection pageCount={pageCount} />
            </div>

            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <div className="blog__sidebar pl-70">
                <Search onSearchTermChange={setSearchTerm} />
                <RecentPost />
                {/* <Category />
                <Tags /> */}
                <SidebarBanner />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
