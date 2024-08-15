import React from 'react';

interface PlaceholderImageProps {
  width: number;
  height: number;
  alt: string;
}

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({ width, height, alt }) => {
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

  const encodedSVG = encodeURIComponent(svg);
  const dataURI = `data:image/svg+xml,${encodedSVG}`;

  return <img src={dataURI} width={width} height={height} alt={alt} style={{ maxWidth: '100%', height: 'auto' }} />;
};

export default PlaceholderImage;