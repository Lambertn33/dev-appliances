import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/jobs/${id}`
    );
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching job:', error);
    return NextResponse.json({ status: 500, error: 'Failed to fetch job' });
  }
}
