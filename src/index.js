import { message } from './message.js';
import { add } from './math.js';

export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === '/health') {
      return Response.json({ ok: true, message: message(), sum: add(2, 3) });
    }
    return new Response('Module upload test. Open /health', { headers: { 'content-type': 'text/plain; charset=utf-8' } });
  }
};
