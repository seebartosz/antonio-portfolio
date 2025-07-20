import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Star, Rocket, Calendar, Infinity } from "lucide-react";

export default function EducationSection() {
  const timelineItems = [
    {
      id: 1,
      icon: GraduationCap,
      title: "Início do Interesse em Programação",
      subtitle: "Ensino Médio",
      period: "2022 - 2024",
      description: "Durante o ensino médio, descobri minha paixão pela programação e comecei a aprender Python de forma autodidata, explorando conceitos fundamentais e desenvolvendo pequenos projetos pessoais.",
      color: "blue",
    },
    {
      id: 2,
      icon: GraduationCap,
      title: "CEUB Asa Norte",
      subtitle: "Início da Graduação",
      period: "2025",
      description: "Início do curso de Ciência da Computação, onde aprofundo meus conhecimentos em algoritmos, estruturas de dados e fundamentos da computação.",
      color: "green",
    },
    {
      id: 3,
      icon: Star,
      title: "Segundo Semestre em Ciência da Computação",
      subtitle: "Atualmente",
      period: "2025 - Presente",
      description: "Focando em disciplinas como Algoritmos e Estruturas de Dados, Programação Orientada a Objetos, e Fundamentos de Redes. Desenvolvendo projetos acadêmicos e buscando oportunidades de estágio.",
      color: "gradient",
      current: true,
      subjects: ["Algoritmos", "POO", "Redes"],
    },
    {
      id: 4,
      icon: Rocket,
      title: "Em Constante Evolução",
      subtitle: "Futuro",
      period: "Sempre aprendendo",
      description: "Buscando novos desafios e explorando as próximas fronteiras da Ciência da Computação, com foco em desenvolvimento web, inteligência artificial e tecnologias emergentes.",
      color: "purple",
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return {
          dot: "bg-blue-500",
          accent: "text-blue-600 dark:text-blue-400",
          bg: "bg-blue-50 dark:bg-blue-950/20",
        };
      case "green":
        return {
          dot: "bg-green-500",
          accent: "text-green-600 dark:text-green-400",
          bg: "bg-green-50 dark:bg-green-950/20",
        };
      case "gradient":
        return {
          dot: "bg-gradient-to-r from-blue-500 to-green-500",
          accent: "text-blue-600 dark:text-blue-400",
          bg: "bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950/20 dark:to-green-950/20",
        };
      case "purple":
        return {
          dot: "bg-purple-500",
          accent: "text-purple-600 dark:text-purple-400",
          bg: "bg-purple-50 dark:bg-purple-950/20",
        };
      default:
        return {
          dot: "bg-gray-500",
          accent: "text-gray-600 dark:text-gray-400",
          bg: "bg-gray-50 dark:bg-gray-950/20",
        };
    }
  };

  return (
    <section id="education" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Educação
          </h2>
          <p className="text-xl text-muted-foreground">
            Minha jornada educacional e desenvolvimento acadêmico
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 timeline-connector rounded-full" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineItems.map((item, index) => {
              const colorClasses = getColorClasses(item.color);
              
              return (
                <div key={item.id} className="relative flex items-start group animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                  {/* Timeline Dot */}
                  <div className={`absolute left-6 w-5 h-5 ${colorClasses.dot} rounded-full border-4 border-background group-hover:scale-125 transition-transform duration-300 z-10 ${item.current ? 'animate-pulse-soft' : ''}`} />
                  
                  {/* Content Card */}
                  <div className="ml-20 w-full">
                    <Card className={`${colorClasses.bg} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${item.current ? 'border-blue-200 dark:border-blue-800' : ''}`}>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <item.icon className={`${colorClasses.accent} text-xl`} />
                          <Badge variant="secondary" className="text-xs font-semibold">
                            {item.subtitle}
                          </Badge>
                        </div>
                        
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {item.description}
                        </p>
                        
                        {item.subjects && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {item.subjects.map((subject) => (
                              <Badge 
                                key={subject} 
                                variant="outline" 
                                className={`${colorClasses.accent} border-current`}
                              >
                                {subject}
                              </Badge>
                            ))}
                          </div>
                        )}
                        
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          {item.period === "Sempre aprendendo" ? (
                            <Infinity className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                          ) : (
                            <Calendar className="h-4 w-4 text-green-600 dark:text-green-400" />
                          )}
                          <span>{item.period}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
