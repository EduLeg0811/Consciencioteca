import Header from "@/components/Header";
import PlaylistCard from "@/components/PlaylistCard";
import Footer from "@/components/Footer";
import { getPlaylistsForPath } from "@/data/playlists";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";

const Index = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const pathSegments = location.pathname.startsWith("/colecao/")
    ? location.pathname
        .replace("/colecao/", "")
        .split("/")
        .filter(Boolean)
    : [];

  const currentPlaylists = getPlaylistsForPath(pathSegments);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="w-full px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        {pathSegments.length > 0 && (
          <div className="mx-auto w-full mb-6 flex items-center justify-between">
            <button
              type="button"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => {
                const parentSegments = pathSegments.slice(0, -1);
                const parentPath =
                  parentSegments.length > 0
                    ? `/colecao/${parentSegments.join("/")}`
                    : "/";
                navigate(parentPath);
              }}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar um nível</span>
            </button>

            <button
              type="button"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => navigate("/")}
            >
              <Home className="w-4 h-4" />
              <span>Página inicial</span>
            </button>
          </div>
        )}

        {/* Playlist grid */}
        <div className="mx-auto w-full">
          {/* Ajuste a LARGURA MÍNIMA dos cards aqui:
              - 220px  -> cards mais estreitos (cabem mais por linha)
              - 260px+ -> cards mais largos (cabem menos por linha)
              Basta trocar o valor abaixo em minmax(220px, 1fr). */}
          <div
            className="grid justify-center items-start gap-4 md:gap-5 xl:gap-6 grid-cols-[repeat(auto-fit,260px)]"
          >
            {currentPlaylists.map((playlist, index) => {
              const isFolder = playlist.type === "folder";

              return (
                <PlaylistCard
                  key={playlist.id ?? playlist.slug ?? index}
                  playlistId={playlist.id}
                  title={playlist.title}
                  description={playlist.description}
                  thumbnail={playlist.thumbnail}
                  index={index}
                  isFolder={isFolder}
                  onClick={
                    isFolder && playlist.slug
                      ? () => {
                          const basePath = pathSegments.join("/");
                          const nextPath = basePath
                            ? `/colecao/${basePath}/${playlist.slug}`
                            : `/colecao/${playlist.slug}`;
                          navigate(nextPath);
                        }
                      : undefined
                  }
                />
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
