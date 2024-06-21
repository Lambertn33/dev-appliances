'use client';

import useSWR from 'swr';
import { useParams } from 'next/navigation';
import axios from 'axios';

import { Job } from '../../../interfaces';
import JobDetails from '../../../components/JobDetails';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const JobPage = () => {
  const params = useParams<{ id: string }>();
  const id = params.id;

  const { data, error } = useSWR<Job>(id ? `/api/jobs/${id}` : null, fetcher);

  if (error) return <div>Failed to load job</div>;
  if (!data) return <div>Loading...</div>;

  return <JobDetails job={data} />;
};

export default JobPage;
