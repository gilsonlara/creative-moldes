
import { Button } from "../ui/button";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.07] bg-hero-pattern bg-cover bg-center z-0" />
      
      <div className="container-custom grid md:grid-cols-2 gap-8 items-center relative z-10">
        <div className="order-2 md:order-1 animate-fade-in">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            <span>Moldes de Roupas Profissionais.</span>
            <span className="text-primary block"> Impressos. Simples. Criativos.</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-text/80">
            Desperte sua criatividade com moldes prontos para imprimir e costurar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="btn-primary text-lg">Ver Moldes</Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg">
              Saiba mais
            </Button>
          </div>
        </div>
        <div className="order-1 md:order-2 animate-scale-in">
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
              alt="Designer trabalhando com moldes" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
