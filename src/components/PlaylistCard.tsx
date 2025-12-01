import { Play } from "lucide-react";

interface PlaylistCardProps {
  title: string;
  description: string;
  thumbnail: string;
  playlistId?: string;
  index: number;
  isFolder?: boolean;
  onClick?: () => void;
}

const PlaylistCard = ({
  title,
  description,
  thumbnail,
  playlistId,
  index,
  isFolder,
  onClick,
}: PlaylistCardProps) => {
  const youtubeUrl = playlistId
    ? `https://www.youtube.com/playlist?list=${playlistId}`
    : undefined;

  const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    if (isFolder) {
      return (
        <button
          type="button"
          onClick={onClick}
          className="group block w-full text-left opacity-0 animate-fade-up"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {children}
        </button>
      );
    }

    return (
      <a
        href={youtubeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group block opacity-0 animate-fade-up"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        {children}
      </a>
    );
  };

  return (
    <Wrapper>
      <article className="relative overflow-hidden rounded-lg bg-card shadow-card transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1">
        {/* Thumbnail */}
        <div className="relative overflow-hidden bg-card">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Play overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
              <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-3 md:p-4">
          <h3 className="font-display text-base md:text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p
            className="text-muted-foreground text-xs md:text-sm leading-snug"
            style={{ whiteSpace: "pre-line" }}
          >
            {description}
          </p>
        </div>
      </article>
    </Wrapper>
  );
};

export default PlaylistCard;
