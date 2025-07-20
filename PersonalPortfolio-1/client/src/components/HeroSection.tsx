import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background to-muted/30"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 bg-pattern-dots opacity-20" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full animate-pulse-soft" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-green-500/10 rounded-full animate-pulse-soft" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-blue-500/10 rounded-full animate-rotate-slow" />
        <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-green-500/10 rounded-full animate-float" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Main Title */}
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3 animate-glow" />
            <h1 className="text-5xl md:text-7xl font-bold gradient-text">
              Antônio Monteiro Silva
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
            Estudante de Ciência da Computação | Em Busca de Estágios
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Apaixonado por resolver problemas e aprender novas tecnologias, sempre em busca de novos desafios no mundo da programação.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={() => scrollToSection("about")}
              className="button-ripple bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              size="lg"
            >
              Saber Mais
            </Button>
            <Button
              onClick={() => scrollToSection("skills")}
              variant="outline"
              className="button-ripple border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              size="lg"
            >
              Ver Habilidades
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <ArrowDown className="h-6 w-6 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
