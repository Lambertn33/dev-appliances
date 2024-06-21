import useSWR from 'swr';
import axios from 'axios';
import { Job } from '../interfaces';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const useJobDetails = (id: number | null) => {
  const { data, error } = useSWR<Job>(id ? `/api/jobs/${id}` : null, fetcher);

  return {
    job: data,
    isLoading: !error && !data,
    isError: error,
  };
};
