'use client';

import React from 'react';
import { Play, Pause } from 'lucide-react';
import { trackEvent } from '@/lib/tracking';

interface VideoPlayerProps {
  // YouTube video ID (e.g., "dQw4w9WgXcQ")
  youtubeId?: string;
  // Vimeo video ID (e.g., "123456789")
  vimeoId?: string;
  // Direct video URL (for CDN hosting)
  videoUrl?: string;
  // Poster image URL
  posterUrl?: string;
  // Video title for analytics
  title?: string;
  // Auto-play (muted only)
  autoPlay?: boolean;
  // Show controls
  controls?: boolean;
  // Loop video
  loop?: boolean;
}

export default function VideoPlayer({
  youtubeId,
  vimeoId,
  videoUrl,
  posterUrl,
  title = 'hero_video',
  autoPlay = true,
  controls = true,
  loop = true
}: VideoPlayerProps) {
  
  // YouTube embed
  if (youtubeId) {
    const embedUrl = `https://www.youtube.com/embed/${youtubeId}?autoplay=${autoPlay ? 1 : 0}&mute=1&loop=${loop ? 1 : 0}&playlist=${youtubeId}&controls=${controls ? 1 : 0}&modestbranding=1&rel=0`;
    
    return (
      <div className="relative rounded-2xl overflow-hidden aspect-video">
        <iframe
          src={embedUrl}
          title={title}
          className="w-full h-full"
          frameBorder="0"
          allow="autoplay; encrypted-media; fullscreen"
          allowFullScreen
          onLoad={() => trackEvent('video_load', { video: title, type: 'youtube' })}
        />
      </div>
    );
  }

  // Vimeo embed
  if (vimeoId) {
    const embedUrl = `https://player.vimeo.com/video/${vimeoId}?autoplay=${autoPlay ? 1 : 0}&muted=1&loop=${loop ? 1 : 0}&controls=${controls ? 1 : 0}&title=0&byline=0&portrait=0`;
    
    return (
      <div className="relative rounded-2xl overflow-hidden aspect-video">
        <iframe
          src={embedUrl}
          title={title}
          className="w-full h-full"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          onLoad={() => trackEvent('video_load', { video: title, type: 'vimeo' })}
        />
      </div>
    );
  }

  // Direct video URL (for CDN hosting)
  if (videoUrl) {
    return (
      <div className="relative rounded-2xl overflow-hidden aspect-video">
        <video
          className="w-full h-full object-cover"
          src={videoUrl}
          poster={posterUrl}
          autoPlay={autoPlay}
          muted
          loop={loop}
          playsInline
          controls={controls}
          preload="metadata"
          onPlay={() => trackEvent('video_play', { video: title })}
          onPause={() => trackEvent('video_pause', { video: title })}
          onEnded={() => trackEvent('video_ended', { video: title })}
          onLoadStart={() => trackEvent('video_load', { video: title, type: 'direct' })}
        >
          Sorry, your browser doesn't support embedded videos.
        </video>
      </div>
    );
  }

  // Fallback placeholder
  return (
    <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center aspect-video">
      <div className="text-center text-white">
        <Play className="h-16 w-16 mx-auto mb-4 opacity-80" />
        <p className="text-lg font-semibold">Video Placeholder</p>
        <p className="text-sm opacity-80 mt-2">
          Configure video hosting<br />
          (YouTube, Vimeo, or CDN)
        </p>
      </div>
    </div>
  );
}

// Example usage:
/*
<VideoPlayer 
  youtubeId="dQw4w9WgXcQ" 
  title="hero_video" 
  autoPlay={true}
  controls={true}
/>

<VideoPlayer 
  vimeoId="123456789" 
  title="hero_video" 
  autoPlay={true}
  controls={true}
/>

<VideoPlayer 
  videoUrl="https://your-cdn.com/video.mp4" 
  posterUrl="https://your-cdn.com/poster.jpg"
  title="hero_video" 
  autoPlay={true}
  controls={true}
/>
*/
