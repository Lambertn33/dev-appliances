import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET() {
  const { data } = await axios.get('http://localhost:3000/jobs');
  const { jobs } = data;
  return NextResponse.json({ status: 200, jobs });
}
