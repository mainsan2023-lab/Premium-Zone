/**
 * Universal YouTube Utility for Premium Zone
 * Automatically extracts Video IDs and generates high-definition thumbnail URLs
 * for any YouTube link, shorts, embed, or ID.
 */

export function extractYouTubeId(urlOrId?: string): string | null {
  if (!urlOrId) return null;
  const trimmed = urlOrId.trim();
  
  // Direct 11-char ID
  if (/^[\w-]{11}$/.test(trimmed)) {
    return trimmed;
  }
  
  // Standard and Shorts YouTube URLs
  const match = trimmed.match(
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\w-]{11})/i
  );
  return match ? match[1] : null;
}

export function getYouTubeThumbnail(
  urlOrId?: string,
  quality: 'maxres' | 'hq' | 'mq' = 'hq'
): string {
  const videoId = extractYouTubeId(urlOrId);
  if (!videoId) return '';
  const qualityName = quality === 'maxres' ? 'maxresdefault' : quality === 'mq' ? 'mqdefault' : 'hqdefault';
  return `https://img.youtube.com/vi/${videoId}/${qualityName}.jpg`;
}

/**
 * Automatically resolves the thumbnail for any project:
 * If it has a YouTube video (youtubeId, youtubeUrl, or isVideo with a link),
 * returns the real YouTube thumbnail image.
 * Otherwise returns the uploaded imageThumbnail.
 */
export function resolveProjectThumbnail(project: {
  imageThumbnail?: string;
  youtubeId?: string;
  youtubeUrl?: string;
  isVideo?: boolean;
}): string {
  if (project.youtubeId || project.youtubeUrl) {
    const ytThumb = getYouTubeThumbnail(project.youtubeId || project.youtubeUrl, 'hq');
    if (ytThumb) return ytThumb;
  }
  return project.imageThumbnail || '';
}
