import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Info } from "lucide-react";
import { SiPython } from "react-icons/si";

export default function ProjectsSection() {
  const placeholderProjects = [
    {
      id: 1,
      title: "Projeto Web",
      description: "Aplicação web moderna em desenvolvimento utilizando HTML, CSS e JavaScript.",
      icon: Code,
      technologies: ["HTML", "CSS", "JavaScript"],
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
    },
    {
      id: 2,
      title: "Script Python",
      description: "Ferramenta de automação desenvolvida em Python para resolver problemas cotidianos.",
      icon: SiPython,
      technologies: ["Python", "Automação"],
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
    },
    {
      id: 3,
      title: "Sistema de Dados",
      description: "Sistema de gerenciamento de dados utilizando SQL e conceitos de banco de dados.",
      icon: Database,
      technologies: ["SQL", "Banco de Dados"],
      color: "text-green-600",
      bgColor: "bg-green-50 dark:bg-green-950/20",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Projetos em Construção
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estou constantemente trabalhando em novos projetos para aplicar e expandir meus conhecimentos.
            Em breve, esta seção será atualizada com meus desenvolvimentos mais recentes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {placeholderProjects.map((project, index) => (
            <Card
              key={project.id}
              className={`${project.bgColor} border-2 border-dashed border-muted-foreground/30 hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-lg group animate-on-scroll`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  {typeof project.icon === "function" ? (
                    <project.icon className={`text-5xl ${project.color} group-hover:scale-110 transition-transform duration-300 mx-auto animate-float`} />
                  ) : (
                    <project.icon className={`h-12 w-12 ${project.color} group-hover:scale-110 transition-transform duration-300 mx-auto animate-float`} />
                  )}
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-muted-foreground">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground/80 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="tech-badge text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coming Soon Notice */}
        <div className="text-center animate-on-scroll" style={{ animationDelay: "0.3s" }}>
          <Card className="inline-block bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <Info className="text-blue-600 dark:text-blue-400 text-xl animate-glow" />
                <span className="text-blue-700 dark:text-blue-300 font-medium">
                  Novos projetos serão adicionados em breve!
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Learning Projects Note */}
        <div className="mt-8 text-center animate-on-scroll" style={{ animationDelay: "0.4s" }}>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Como estudante em desenvolvimento, estou focado em criar projetos que demonstrem meu crescimento
            e aplicação prática dos conceitos aprendidos. Cada projeto representa um passo na minha jornada
            de aprendizado em Ciência da Computação.
          </p>
        </div>
      </div>
    </section>
  );
}
