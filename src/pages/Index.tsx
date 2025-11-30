import Header from "@/components/Header";
import PlaylistCard from "@/components/PlaylistCard";
import Footer from "@/components/Footer";
import { playlists } from "@/data/playlists";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container py-12 md:py-16">
        {/* Section header */}
        <div className="mb-10 md:mb-12 text-center md:text-left">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-3">
            Playlists em Destaque
          </h2>
          <p className="text-muted-foreground text-lg">
            Selecione uma playlist para assistir no YouTube
          </p>
        </div>

        {/* Playlist grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {playlists.map((playlist, index) => (
            <PlaylistCard
              key={playlist.id}
              playlistId={playlist.id}
              title={playlist.title}
              description={playlist.description}
              thumbnail={playlist.thumbnail}
              index={index}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
