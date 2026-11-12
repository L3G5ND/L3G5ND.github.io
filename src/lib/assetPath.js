// Next.js prefixes navigation links automatically; public media needs the same prefix.
export default function assetPath(source) {
  if (!source?.startsWith('/') || source.startsWith('//')) return source;
  const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || '').replace(/\/$/, '');
  return `${basePath}${source}`;
}
