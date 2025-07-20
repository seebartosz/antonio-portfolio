import { Button } from "@/components/ui/button";
import { ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p className="flex items-center justify-center md:justify-start gap-1">
              © 2025 Antônio Monteiro Silva. Feito com{" "}
              <Heart className="h-4 w-4 text-red-500 animate-pulse" fill="currentColor" />
              em Brasília, DF
            </p>
            <p className="text-sm text-background/70 mt-1">
              Todos os direitos reservados.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="bg-transparent border-background/30 text-background hover:bg-background hover:text-foreground transition-all duration-300"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Voltar ao Topo
            </Button>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-background/20 text-center">
          <p className="text-sm text-background/70">
            Desenvolvido com tecnologias modernas • React • TypeScript • Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
