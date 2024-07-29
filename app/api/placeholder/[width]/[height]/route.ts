import { NextRequest } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { width: string; height: string } }
) {
  const width = parseInt(params.width, 10);
  const height = parseInt(params.height, 10);

  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f0f0f0"/>
      <line x1="0" y1="0" x2="${width}" y2="${height}" stroke="#cccccc" stroke-width="2"/>
      <line x1="${width}" y1="0" x2="0" y2="${height}" stroke="#cccccc" stroke-width="2"/>
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" fill="#333333" text-anchor="middle" dominant-baseline="middle">
        ${width} x ${height}
      </text>
    </svg>
  `;

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}