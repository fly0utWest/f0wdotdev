import axios, { AxiosError } from 'axios';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { message } = await request.json();
  const tgMessage = `message: ${message.text}\nuser agent: ${message.userAgent}\nip address: ${message.ip}`

  if (!message.text) {
    return NextResponse.json(
      { error: 'There was no message provided.' },
      { status: 400 },
    );
  }

  const TG_API_KEY = process.env.TELEGRAM_API_KEY;
  const TG_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  if (!TG_API_KEY || !TG_CHAT_ID) {
    return NextResponse.json(
      { error: 'No API key or chat id were detected' },
      { status: 500 },
    );
  }

  try {
    const result = await axios.post(
      `https://api.telegram.org/bot${TG_API_KEY}/sendMessage`,
      {
        chat_id: TG_CHAT_ID,
        text: tgMessage,
      },
    );

    if (result.status === 200) {
      return NextResponse.json({ success: true });
    } else {
      throw new AxiosError('Failed to send message');
    }
  } catch (error: unknown) {
    console.log(error);

    if (error instanceof AxiosError) {
      return NextResponse.json(
        { error: error.message },
        { status: error.status },
      );
    }
  }
}
