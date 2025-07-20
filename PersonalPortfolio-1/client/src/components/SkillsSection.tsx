import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  SiPython, 
  SiJavascript, 
  SiCplusplus, 
  SiGit, 
  SiGithub 
} from "react-icons/si";
import { Database, Lightbulb, Users, Search, Rocket, Coffee, Code } from "lucide-react";

export default function SkillsSection() {
  const programmingLanguages = [
    { name: "Python", icon: SiPython, level: "Em aprendizado", color: "text-blue-500" },
    { name: "JavaScript", icon: SiJavascript, level: "Em aprendizado", color: "text-yellow-500" },
    { name: "Java", icon: Coffee, level: "Básico", color: "text-red-600" },
    { name: "C++", icon: SiCplusplus, level: "Básico", color: "text-purple-600" },
  ];

  const tools = [
    { name: "Git", icon: SiGit, level: "Intermediário", color: "text-orange-600" },
    { name: "VS Code", icon: Code, level: "Intermediário", color: "text-blue-600" },
    { name: "GitHub", icon: SiGithub, level: "Básico", color: "text-gray-800 dark:text-gray-200" },
    { name: "SQL", icon: Database, level: "Básico", color: "text-green-600" },
  ];

  const softSkills = [
    { name: "Resolução de Problemas", icon: Lightbulb, color: "text-blue-600" },
    { name: "Trabalho em Equipe", icon: Users, color: "text-green-600" },
    { name: "Curiosidade", icon: Search, color: "text-blue-600" },
    { name: "Proatividade", icon: Rocket, color: "text-green-600" },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Habilidades Técnicas em Desenvolvimento
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Minhas habilidades técnicas estão em constante desenvolvimento, com foco atual em tecnologias modernas e fundamentos sólidos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <Card className="animate-on-scroll hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Linguagens de Programação
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {programmingLanguages.map((lang) => (
                  <div key={lang.name} className="text-center group">
                    <div className="skill-icon mb-3 cursor-pointer">
                      <lang.icon className={`text-5xl ${lang.color} group-hover:scale-110 transition-all duration-300 mx-auto animate-float`} />
                    </div>
                    <span className="text-sm font-medium block mb-2">{lang.name}</span>
                    <Badge variant="secondary" className="tech-badge text-xs">
                      {lang.level}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Tools & Technologies */}
          <Card className="animate-on-scroll hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" style={{ animationDelay: "0.1s" }}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Ferramentas</h3>
              <div className="grid grid-cols-2 gap-6">
                {tools.map((tool) => (
                  <div key={tool.name} className="text-center group">
                    <div className="skill-icon mb-3 cursor-pointer">
                      <tool.icon className={`h-12 w-12 ${tool.color} group-hover:scale-110 transition-all duration-300 mx-auto animate-float`} />
                    </div>
                    <span className="text-sm font-medium block mb-2">{tool.name}</span>
                    <Badge variant="secondary" className="tech-badge text-xs">
                      {tool.level}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Soft Skills */}
          <Card className="animate-on-scroll hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 md:col-span-2 lg:col-span-1" style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Soft Skills</h3>
              <div className="space-y-4">
                {softSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors duration-200 group"
                  >
                    <skill.icon className={`${skill.color} text-xl group-hover:scale-110 transition-transform duration-200`} />
                    <span className="font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Skills Note */}
        <div className="text-center mt-12 animate-on-scroll" style={{ animationDelay: "0.3s" }}>
          <div className="inline-flex items-center gap-3 bg-blue-50 dark:bg-blue-950/20 px-6 py-4 rounded-lg border border-blue-200 dark:border-blue-800">
            <Lightbulb className="text-blue-600 dark:text-blue-400 text-xl animate-glow" />
            <span className="text-blue-700 dark:text-blue-300 font-medium">
              Sempre aprendendo e explorando novas tecnologias!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}