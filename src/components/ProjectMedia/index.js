import assetPath from '@/lib/assetPath';
import Image from 'next/image';
import styles from './style.module.css';

function embedUrl(source) {
  try {
    const url = new URL(source);
    if (
      [
        'youtube.com',
        'www.youtube.com',
        'm.youtube.com',
        'youtu.be',
        'www.youtube-nocookie.com',
      ].includes(url.hostname)
    ) {
      const id =
        url.hostname === 'youtu.be'
          ? url.pathname.slice(1)
          : url.searchParams.get('v') || url.pathname.split('/').filter(Boolean).pop();
      if (/^[\w-]{11}$/.test(id || ''))
        return `https://www.youtube-nocookie.com/embed/${id}`;
    }
    if (['vimeo.com', 'www.vimeo.com', 'player.vimeo.com'].includes(url.hostname)) {
      const id = url.pathname.split('/').filter(Boolean).pop();
      if (/^\d+$/.test(id || '')) return `https://player.vimeo.com/video/${id}`;
    }
  } catch {
    /* Local video paths are handled by the native player. */
  }
  return null;
}

export default function ProjectMedia({ project, preview = false }) {
  const { image, video, name } = project;
  if (!image && !video) return null;
  const embed = video ? embedUrl(video) : null;
  if (preview && !image && video) {
    return embed ? (
      <div className={styles.videoCover}>
        <span aria-hidden="true">▷</span>
        <span>Watch project video</span>
      </div>
    ) : (
      <video
        className={styles.preview}
        src={assetPath(video)}
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
        tabIndex={-1}
      />
    );
  }

  return (
    <div className={styles.gallery}>
      {image && (
        <Image
          className={`${styles.image} ${preview ? styles.preview : ''}`}
          src={assetPath(image)}
          width={1200}
          height={750}
          sizes="(max-width: 800px) 100vw, 60vw"
          alt={project.imageAlt || `${name} project preview`}
        />
      )}
      {video &&
        (!preview || !image) &&
        (embed ? (
          <iframe
            className={styles.video}
            src={embed}
            title={`${name} video demonstration`}
            loading="lazy"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <video
            className={styles.video}
            src={assetPath(video)}
            poster={assetPath(image) || undefined}
            controls
            playsInline
            preload="metadata"
            aria-label={`${name} video demonstration`}
          >
            Your browser cannot play this video.{' '}
            <a href={assetPath(video)}>Download the video</a>.
          </video>
        ))}
    </div>
  );
}
