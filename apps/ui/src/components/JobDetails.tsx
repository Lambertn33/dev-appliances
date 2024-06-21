import { FC } from 'react';
import { Job } from '../interfaces';
import { useRouter } from 'next/navigation';

interface JobDetailsProps {
  job: Job;
}

const JobDetails: FC<JobDetailsProps> = ({ job }) => {
  const router = useRouter();
  return (
    <div className="container mx-auto px-4 mt-8">
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-2">{job.name}</h1>
          <p className="text-gray-700 text-base mb-4">{job.description}</p>
          <p className="text-gray-900 font-semibold">
            Company: {job.company.name}
          </p>
          <button
            className="mt-6 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
            onClick={() => router.push(`/jobs/${job.id}/apply`)}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
