'use client';

import { useJobDetails } from 'apps/ui/src/hooks/useJobDetails';
import { useParams } from 'next/navigation';
import JobApplyForm from 'apps/ui/src/components/JobApplyForm';

const Apply = () => {
  const params = useParams<{ id: string }>();
  const id = params.id;

  const { job, isLoading, isError } = useJobDetails(+id);
  if (isError) return <div>Failed to load job</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 mt-8">
      <h1 className="text-3xl font-semibold mb-4">
        Apply for Job - {job?.name} at {job?.company.name}
      </h1>
      <JobApplyForm job={job!} />
    </div>
  );
};

export default Apply;
