'use client';
import JobsList from '../components/JobsList';

const Page = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-semibold text-center mt-8 mb-4">
        Jobs List
      </h1>
      <JobsList />
    </div>
  );
};

export default Page;
