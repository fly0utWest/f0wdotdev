import axios, { AxiosError } from 'axios';

export async function ipGrabber() {
  try {
    const result = await axios.get('https://api.ipify.org', {
      params: {
        format: 'json',
      },
    });
    return result.data.ip;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.error( `${error.status}: ${error.message}`);
      return null;
    }
  }
}
