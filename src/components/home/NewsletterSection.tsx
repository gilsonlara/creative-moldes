
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useToast } from '@/hooks/use-toast';

const NewsletterSection = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Inscrição realizada com sucesso!",
        description: "Enviamos um molde gratuito para o seu email.",
      });
      setEmail('');
      setName('');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="section-padding bg-gradient-primary text-white">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Receba Moldes Grátis e Dicas de Costura
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Inscreva-se para receber novidades, tutoriais e moldes exclusivos diretamente em sua caixa de entrada.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <Input
                type="text"
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-white/90 border-transparent focus:border-white text-text"
              />
              <Input
                type="email"
                placeholder="Seu melhor email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/90 border-transparent focus:border-white text-text"
              />
            </div>
            <Button 
              type="submit" 
              disabled={isLoading}
              className="w-full sm:w-auto bg-text text-white hover:bg-text/90"
            >
              {isLoading ? 'Enviando...' : 'Quero Receber!'}
            </Button>
          </form>

          <p className="mt-4 text-white/90 text-sm">
            Ganhe um molde grátis ao se inscrever. Sem spam, prometemos!
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
