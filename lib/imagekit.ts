const imageKitEndpoint = "https://ik.imagekit.io/devandrea";

export function imageKitUrl(path: string, transformation?: string) {
  const normalizedPath = path.replace(/^\/+/, "");
  const transformSegment = transformation ? `/tr:${transformation}` : "";

  return `${imageKitEndpoint}${transformSegment}/assets/${normalizedPath}`;
}
