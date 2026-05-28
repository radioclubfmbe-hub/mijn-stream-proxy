export async function onRequest(context) {
  const streamUrl = 'http://85.215.152.155:8000/dab.mp3';
  const response = await fetch(streamUrl);
  return new Response(response.body, {
    headers: {
      'Content-Type': 'audio/mpeg',
      'Cache-Control': 'no-cache',
    },
  });
}
