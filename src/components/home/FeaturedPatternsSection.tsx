
import React from 'react';
import { Button } from '../ui/button';

interface PatternCard {
  id: number;
  name: string;
  image: string;
  description: string;
  price: string;
}

const FeaturedPatternsSection = () => {
  const patterns: PatternCard[] = [
    {
      id: 1,
      name: "Vestido Envelope Midi",
      image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3",
      description: "Elegante, versátil e fácil de fazer. Perfeito para qualquer ocasião.",
      price: "R$24,90"
    },
    {
      id: 2,
      name: "Blusa Cropped com Babados",
      image: "https://images.unsplash.com/photo-1551163943-3f6a855d1153",
      description: "Moderna e charmosa, esta blusa destaca sua silhueta.",
      price: "R$18,90"
    },
    {
      id: 3,
      name: "Calça Pantacourt",
      image: "https://images.unsplash.com/photo-1548624313-0396c75d8aef",
      description: "Confortável e elegante, combina com qualquer top.",
      price: "R$22,90"
    },
    {
      id: 4,
      name: "Jaqueta Bomber",
      image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f",
      description: "Estilosa e moderna, perfeita para o dia a dia.",
      price: "R$29,90"
    },
    {
      id: 5,
      name: "Saia Godê Midi",
      image: "https://images.unsplash.com/photo-1582142839970-2b9e04eb8e44",
      description: "Clássico reinventado que traz elegância ao seu guarda-roupa.",
      price: "R$19,90"
    },
    {
      id: 6,
      name: "Conjunto Esportivo",
      image: "https://images.unsplash.com/photo-1550345332-09e3ac987658",
      description: "Conforto e estilo para suas atividades físicas.",
      price: "R$34,90"
    }
  ];

  return (
    <section id="moldes" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Nossos Moldes Mais Vendidos</h2>
          <p className="text-lg text-text/80 max-w-2xl mx-auto">
            Conheça os moldes favoritos da nossa comunidade. Modernos, testados e aprovados!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {patterns.map((pattern) => (
            <div key={pattern.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-64 overflow-hidden">
                <img 
                  src={pattern.image} 
                  alt={pattern.name} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{pattern.name}</h3>
                <p className="text-text/70 mb-4">{pattern.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-bold text-lg">{pattern.price}</span>
                  <Button variant="outline" className="text-primary border-primary hover:bg-primary/10">
                    Ver Detalhes
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="btn-primary">Ver Todos os Moldes</Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPatternsSection;
