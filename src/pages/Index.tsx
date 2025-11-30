import Header from "@/components/Header";
import PlaylistCard from "@/components/PlaylistCard";
import Footer from "@/components/Footer";
import { playlists } from "@/data/playlists";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="w-full px-4 sm:px-6 lg:px-8 py-10 md:py-14">

        {/* Playlist grid */}
        <div className="mx-auto w-full">
          {/* Ajuste a LARGURA MÍNIMA dos cards aqui:
              - 220px  -> cards mais estreitos (cabem mais por linha)
              - 260px+ -> cards mais largos (cabem menos por linha)
              Basta trocar o valor abaixo em minmax(220px, 1fr). */}
          <div
            className="grid gap-4 md:gap-5 xl:gap-6 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]"
          >
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
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
