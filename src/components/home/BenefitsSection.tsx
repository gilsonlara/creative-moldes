
import React from 'react';
import { Scissors, FileText, Shirt, Download, Brain } from 'lucide-react';

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitsSection = () => {
  const benefits: Benefit[] = [
    {
      icon: <Scissors className="h-12 w-12 text-primary" />,
      title: "Moldes Profissionais e Testados",
      description: "Cada padrão é cuidadosamente desenvolvido e testado por costureiras profissionais."
    },
    {
      icon: <FileText className="h-12 w-12 text-primary" />,
      title: "Fácil de imprimir em A4",
      description: "Todos os moldes são otimizados para impressão em papel A4 comum, sem necessidade de equipamentos especiais."
    },
    {
      icon: <Shirt className="h-12 w-12 text-primary" />,
      title: "Modelagens modernas e exclusivas",
      description: "Designs atuais que acompanham as tendências da moda, com opções para todos os estilos e ocasiões."
    },
    {
      icon: <Download className="h-12 w-12 text-primary" />,
      title: "Entrega Digital Imediata",
      description: "Após a compra, receba seu molde instantaneamente para começar seu projeto na mesma hora."
    },
    {
      icon: <Brain className="h-12 w-12 text-primary" />,
      title: "Suporte Criativo e Inspiração",
      description: "Receba dicas semanais, tutoriais e ideias para tirar o máximo proveito dos seus moldes."
    }
  ];

  return (
    <section className="section-padding bg-accent/20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Por Que a Creativa Moldes é Diferente?</h2>
          <p className="text-lg text-text/80 max-w-2xl mx-auto">
            Criamos moldes pensando na experiência completa, da impressão ao produto final.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4 flex justify-center">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">{benefit.title}</h3>
              <p className="text-text/70 text-center">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
