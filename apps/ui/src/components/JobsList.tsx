'use client';

import useSWR from 'swr';
import axios from 'axios';
import JobCard from './JobCard';
import { Job } from '../interfaces';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const JobsList = () => {
  const { data, error } = useSWR<{ jobs: Job[] }>('/api/jobs', fetcher);

  if (error) return <div>Failed to load jobs</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobsList;
