'use client';

import { useParams } from 'next/navigation';
import JobDetails from '../../../components/JobDetails';

import { useJobDetails } from 'apps/ui/src/hooks/useJobDetails';

const JobPage = () => {
  const params = useParams<{ id: string }>();
  const id = params.id;

  const { job, isLoading, isError } = useJobDetails(+id);
  if (isError) return <div>Failed to load job</div>;
  if (isLoading) return <div>Loading...</div>;

  return <JobDetails job={job!} />;
};

export default JobPage;
