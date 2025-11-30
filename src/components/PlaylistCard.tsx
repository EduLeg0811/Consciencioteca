import { Play } from "lucide-react";

interface PlaylistCardProps {
  title: string;
  description: string;
  thumbnail: string;
  playlistId: string;
  index: number;
}

const PlaylistCard = ({
  title,
  description,
  thumbnail,
  playlistId,
  index,
}: PlaylistCardProps) => {
  const youtubeUrl = `https://www.youtube.com/playlist?list=${playlistId}`;

  return (
    <a
      href={youtubeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block opacity-0 animate-fade-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <article className="relative overflow-hidden rounded-xl bg-card shadow-card transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1">
        {/* Thumbnail */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Play overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
              <Play className="w-7 h-7 text-primary-foreground ml-1" fill="currentColor" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 md:p-6">
          <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm md:text-base line-clamp-2 leading-relaxed">
            {description}
          </p>
        </div>
      </article>
    </a>
  );
};

export default PlaylistCard;
