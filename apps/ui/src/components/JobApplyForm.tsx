'use client';

import axios from 'axios';
import React, { FC, useState } from 'react';
import { useJobDetails } from 'apps/ui/src/hooks/useJobDetails';
import { useParams } from 'next/navigation';
import { Job } from '../interfaces';

interface JobApplyFormProps {
  job: Job;
}

const JobApplyForm: FC<JobApplyFormProps> = ({}) => {
  const [application, setApplication] = useState<{
    userName: string;
    userEmail: string;
    applicationText: string;
    loading: boolean;
    error: string | null;
    success: boolean;
  }>({
    userName: '',
    userEmail: '',
    applicationText: '',
    loading: false,
    error: null,
    success: false,
  });

  const params = useParams<{ id: string }>();
  const id = params.id;

  const { job, isLoading, isError } = useJobDetails(+id);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setApplication((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setApplication((prevState) => ({
      ...prevState,
      loading: true,
      error: null,
    }));

    try {
      await axios.post('/api/appliances', {
        jobId: job?.id,
        userName: application.userName,
        userEmail: application.userEmail,
        text: application.applicationText,
      });
      setApplication((prevState) => ({
        ...prevState,
        success: true,
      }));
    } catch (error) {
      setApplication((prevState) => ({
        ...prevState,
        error: 'Failed to submit application. Please try again later',
      }));
    } finally {
      setApplication((prevState) => ({
        ...prevState,
        loading: true,
      }));
    }
  };

  if (isError) return <div>Failed to load job</div>;
  if (isLoading) return <div>Loading...</div>;

  if (application.success) {
    return (
      <div className="container mx-auto px-4 mt-8">
        Application submitted successfully!
      </div>
    );
  }

  return (
    <>
      {application.error && (
        <div className="text-red-500 mb-4">{application.error}</div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="userName"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="userName"
            className="mt-1 block w-full border border-gray-500 rounded-md py-1 px-2"
            value={application.userName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="userEmail"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="userEmail"
            className="mt-1 block w-full border border-gray-500 rounded-md py-1 px-2"
            value={application.userEmail}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="applicationText"
            className="block text-sm font-medium text-gray-700"
          >
            Application Text
          </label>
          <textarea
            id="applicationText"
            className="mt-1 block w-full border border-gray-500 rounded-md py-1 px-2"
            value={application.applicationText}
            onChange={handleInputChange}
            rows={4}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
          disabled={application.loading}
        >
          {application.loading ? 'Submitting...' : 'Submit Application'}
        </button>
      </form>
    </>
  );
};

export default JobApplyForm;
