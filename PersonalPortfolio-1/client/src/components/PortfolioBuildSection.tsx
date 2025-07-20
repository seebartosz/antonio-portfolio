import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SiHtml5, SiCss3, SiJavascript } from "react-icons/si";
import { Palette, Smartphone, Zap, Globe } from "lucide-react";

export default function PortfolioBuildSection() {
  const technologies = [
    {
      name: "HTML5",
      icon: SiHtml5,
      color: "text-orange-600",
      description: "Estrutura semântica moderna com elementos acessíveis e organizados, seguindo as melhores práticas de desenvolvimento web.",
      features: ["Semântico", "Acessível", "Responsivo"],
      bgColor: "bg-orange-50 dark:bg-orange-950/20",
      badgeColor: "bg-orange-100 dark:bg-orange-900/30 text-orange-600",
    },
    {
      name: "CSS3",
      icon: SiCss3,
      color: "text-blue-600",
      description: "Estilização avançada com Tailwind CSS, animações suaves, gradientes modernos e design responsivo para todos os dispositivos.",
      features: ["Tailwind", "Animações", "Gradientes"],
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
      badgeColor: "bg-blue-100 dark:bg-blue-900/30 text-blue-600",
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      color: "text-yellow-500",
      description: "Interatividade moderna com manipulação do DOM, animações dinâmicas, modo escuro/claro e funcionalidades de navegação suave.",
      features: ["ES6+", "React", "Eventos"],
      bgColor: "bg-yellow-50 dark:bg-yellow-950/20",
      badgeColor: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600",
    },
  ];

  const additionalTech = [
    { name: "Google Fonts", icon: Globe, color: "text-blue-600" },
    { name: "Lucide Icons", icon: Zap, color: "text-green-600" },
    { name: "Design Responsivo", icon: Smartphone, color: "text-purple-600" },
    { name: "Modo Escuro/Claro", icon: Palette, color: "text-orange-600" },
  ];

  return (
    <section id="portfolio-build" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Como Construí Este Portfólio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Este portfólio foi cuidadosamente desenvolvido utilizando tecnologias modernas e práticas atuais de desenvolvimento web.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {technologies.map((tech, index) => (
            <Card
              key={tech.name}
              className={`${tech.bgColor} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group animate-on-scroll`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="skill-icon mb-6">
                  <tech.icon className={`text-7xl ${tech.color} group-hover:scale-110 transition-all duration-300 mx-auto animate-pulse-soft`} style={{ animationDelay: `${index * 0.5}s` }} />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{tech.name}</h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {tech.description}
                </p>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {tech.features.map((feature) => (
                    <Badge key={feature} className={`${tech.badgeColor} text-xs font-medium`}>
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Technologies */}
        <div className="animate-on-scroll" style={{ animationDelay: "0.3s" }}>
          <h3 className="text-2xl font-bold text-center mb-8">Tecnologias Adicionais</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {additionalTech.map((tech) => (
              <Card key={tech.name} className="hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-4 text-center">
                  <tech.icon className={`h-8 w-8 ${tech.color} mx-auto mb-2 group-hover:scale-110 transition-transform duration-200`} />
                  <span className="text-sm font-medium">{tech.name}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Development Highlights */}
        <div className="mt-16 animate-on-scroll" style={{ animationDelay: "0.4s" }}>
          <Card className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950/20 dark:to-green-950/20 border-blue-200 dark:border-blue-800">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Destaques do Desenvolvimento</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">100%</div>
                  <p className="text-sm text-muted-foreground">Responsivo</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">A11y</div>
                  <p className="text-sm text-muted-foreground">Acessível</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">SEO</div>
                  <p className="text-sm text-muted-foreground">Otimizado</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
