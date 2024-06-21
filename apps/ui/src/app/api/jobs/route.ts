import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET() {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/jobs`);
  const { jobs } = data;
  return NextResponse.json({ status: 200, jobs });
}
