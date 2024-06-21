import axios from 'axios';
import { NextResponse } from 'next/server';

interface ApplyRequestBody {
  userName: string;
  userEmail: string;
  text: string;
  jobId: number;
}

export async function POST(req: Request, res: Response) {
  try {
    const { text, jobId, userEmail, userName } =
      (await req.json()) as unknown as ApplyRequestBody;
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/appliances`,
      {
        userName,
        userEmail,
        text,
        jobId,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json({
      status: 500,
      error: error,
    });
  }
}
