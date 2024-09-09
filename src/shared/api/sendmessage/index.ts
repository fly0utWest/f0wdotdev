import axios, { AxiosError } from 'axios';
import { NextResponse } from 'next/server';
import { telegramApiKey, telegramChatId } from '@/shared/config';

export async function POST(request: Request) {
  const { message } = await request.json();
  const tgMessage = `message: ${message.text}\nuser agent: ${message.userAgent}\nip address: ${message.ip}`;

  if (!message.text) {
    return NextResponse.json(
      { error: 'There was no message provided.' },
      { status: 400 },
    );
  }

  const apiKey = telegramApiKey;
  const chatId = telegramChatId;

  if (!apiKey || !chatId) {
    return NextResponse.json(
      { error: 'No API key or chat id were detected' },
      { status: 500 },
    );
  }

  try {
    const result = await axios.post(
      `https://api.telegram.org/bot${apiKey}/sendMessage`,
      {
        chat_id: chatId,
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
