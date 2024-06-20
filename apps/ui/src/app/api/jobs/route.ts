import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET() {
  const response = await axios.get('http://localhost:3000/jobs');
  return NextResponse.json(response.data.jobs);
}
