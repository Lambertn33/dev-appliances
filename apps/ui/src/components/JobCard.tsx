import React from 'react';
import { Job } from '../interfaces';
import Link from 'next/link';

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="job-card shadow-lg rounded-md p-6">
      <h2 className="text-xl font-semibold">{job.name}</h2>
      <p className="text-gray-700 mb-4">Company: {job.company.name}</p>
      <Link
        href={`/jobs/${job.id}`}
        className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600"
      >
        View Details
      </Link>
    </div>
  );
};

const navigateToJobDetails = (jobId: number) => {
  console.log(`Navigate to job details for job ID: ${jobId}`);
};

export default JobCard;
