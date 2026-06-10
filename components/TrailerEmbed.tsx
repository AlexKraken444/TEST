export default function TrailerEmbed({ videoId }: { videoId: string }) {
  const src = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`;
  return (
    <div className="mx-auto w-full max-w-4xl">
      <div className="glass relative overflow-hidden rounded-2xl p-2 shadow-glow-lg">
        <div className="relative aspect-video w-full overflow-hidden rounded-xl">
          <iframe
            src={src}
            title="TEST — Release Date Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>
      </div>
    </div>
  );
}
