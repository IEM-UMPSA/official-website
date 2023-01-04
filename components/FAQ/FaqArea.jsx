import useSWR from 'swr';
import FaqItem from "./FaqItem";

const fetcher = (...args) => fetch(...args).then(res => res.json());

const FaqArea = () => {
  

    const { data, error } = useSWR('/api/faq', fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
  

  return (
    <>
    <section class="bg-white dark:bg-gray-900">
        <div class="container max-w-4xl px-6 py-10 mx-auto">
            <div class="mt-10 space-y-8">
            { data.map(item => (

                <FaqItem 
                    key={item.id}
                    {...item}
                />
                
            ))} 

            </div>
        
        </div>
    </section>
    </>
  );
};

export default FaqArea;