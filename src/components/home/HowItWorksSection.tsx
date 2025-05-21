import React from 'react';
import { Download, Scissors, CheckCircle } from 'lucide-react';
const HowItWorksSection = () => {
  const steps = [{
    icon: <CheckCircle className="text-primary h-12 w-12" />,
    title: "1. Escolha o molde perfeito",
    description: "Navegue pela nossa coleção de moldes profissionais e encontre o modelo ideal para seu projeto."
  }, {
    icon: <Download className="text-primary h-12 w-12" />,
    title: "2. Faça o download e imprima",
    description: "Baixe o arquivo PDF e imprima em casa usando papel A4 comum. Instruções detalhadas incluídas."
  }, {
    icon: <Scissors className="text-primary h-12 w-12" />,
    title: "3. Corte, costure e arrase",
    description: "Siga nossas instruções passo a passo para transformar o molde em sua nova peça favorita."
  }];
  return <section id="como-funciona" className="section-padding bg-accent/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Como Funciona?</h2>
          <p className="text-lg text-text/80 max-w-2xl mx-auto">É fácil, siga os passos: escolha o molde, faça o dowload e imprima, agora só cortar, costurar e arrasar! </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => <div key={index} className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow">
              <div className="mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-text/80">{step.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default HowItWorksSection;