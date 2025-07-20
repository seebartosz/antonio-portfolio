import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, MapPin, Mail, Phone, GraduationCap } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
              Sobre Mim
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Olá! Sou Antônio, estudante de Ciência da Computação no{" "}
                <strong className="text-foreground">CEUB Asa Norte</strong>, atualmente no segundo semestre.
                Moro em <strong className="text-foreground">Brasília, DF</strong> e descobri minha paixão pela programação ainda no ensino médio, quando comecei a aprender Python de forma autodidata.
              </p>
              <p>
                O que mais me atrai na Ciência da Computação é a capacidade de criar soluções inovadoras para problemas reais.
                Estou particularmente interessado em{" "}
                <strong className="text-foreground">desenvolvimento web</strong> e{" "}
                <strong className="text-foreground">inteligência artificial</strong>,
                áreas que considero fundamentais para o futuro da tecnologia.
              </p>
              <p>
                Sou uma pessoa proativa e curiosa, sempre buscando novos conhecimentos e desafios.
                Acredito que a tecnologia tem o poder de transformar o mundo, e quero fazer parte dessa transformação.
              </p>
            </div>

            <div className="mt-10">
              <Button
                className="button-ripple bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                size="lg"
              >
                <Download className="h-4 w-4 mr-2" />
                Baixar Currículo
              </Button>
            </div>
          </div>

          {/* Contact Information Card */}
          <div className="animate-on-scroll" style={{ animationDelay: "0.2s" }}>
            <Card className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950/20 dark:to-green-950/20 border-blue-200 dark:border-blue-800">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 gradient-text">
                  Informações de Contato
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                      <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href="mailto:anttmontteiro@gmail.com"
                        className="text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                      >
                        anttmontteiro@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                      <Phone className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="font-medium">Telefone</p>
                      <a
                        href="tel:+5561983730919"
                        className="text-muted-foreground hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
                      >
                        (61) 98373-0919
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="font-medium">Localização</p>
                      <span className="text-muted-foreground">Brasília, DF</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                      <GraduationCap className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="font-medium">Instituição</p>
                      <span className="text-muted-foreground">CEUB Asa Norte</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
