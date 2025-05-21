
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '../ui/button';

interface PricingPlan {
  title: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

const PricingSection = () => {
  const plans: PricingPlan[] = [
    {
      title: "Molde Unitário",
      price: "R$14,90",
      description: "cada",
      features: [
        "1 molde digital",
        "Instruções passo a passo",
        "Suporte por email",
        "Acesso permanente"
      ],
      cta: "Escolher Molde"
    },
    {
      title: "Pacote Criativo",
      price: "R$39,90",
      description: "",
      features: [
        "4 moldes digitais",
        "Economize mais de 30%",
        "Instruções detalhadas",
        "Acesso a tutoriais exclusivos",
        "Suporte prioritário"
      ],
      cta: "Selecionar Pacote",
      popular: true
    },
    {
      title: "Clube da Costura",
      price: "R$79,90",
      description: "/mês",
      features: [
        "Acesso ilimitado a todos os moldes",
        "Novos moldes mensais",
        "Comunidade exclusiva",
        "Tutoriais avançados em vídeo",
        "Descontos em cursos especiais",
        "Suporte VIP"
      ],
      cta: "Assinar Agora"
    }
  ];

  return (
    <section id="planos" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Planos Acessíveis para Todos os Níveis</h2>
          <p className="text-lg text-text/80 max-w-2xl mx-auto">
            Escolha o plano que melhor se adapta às suas necessidades criativas e orçamento.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-xl overflow-hidden transition-all duration-300 ${
                plan.popular 
                  ? 'border-2 border-primary shadow-lg scale-105 transform md:translate-y-0 z-10' 
                  : 'border border-border shadow-md hover:shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="bg-primary py-1 text-white text-center font-medium">
                  Mais Popular
                </div>
              )}
              
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-text/70">{plan.description}</span>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${plan.popular ? 'bg-primary text-white hover:bg-primary/90' : 'bg-accent hover:bg-accent/80 text-text'}`}
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
