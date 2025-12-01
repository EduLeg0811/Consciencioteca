import { Youtube, BookOpen } from "lucide-react";

const Header = () => {
  return (
    <header className="relative overflow-hidden bg-card border-b border-border">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="container relative z-10 py-16 md:py-24">


        <div className="flex flex-col items-center text-center space-y-6 animate-fade-up">

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground">
            Consciencioteca
          </h1>

          <div className="flex items-center gap-3 text-primary">
            <BookOpen className="w-8 h-8 md:w-10 md:h-10" />
            <span className="text-sm md:text-base font-medium tracking-widest uppercase">
              Videoteca de Conscienciologia
            </span>
          </div>

         
          
         
        </div>
      </div>
    </header>
  );
};

export default Header;
