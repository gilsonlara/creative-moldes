
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  quote: string;
  image: string;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Júlia Costa",
      location: "São Paulo",
      rating: 5,
      quote: "Os moldes são perfeitos! As instruções são claras e até eu, que sou iniciante, consegui costurar uma blusa linda de primeira.",
      image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8"
    },
    {
      id: 2,
      name: "Carla Mendes",
      location: "Rio de Janeiro",
      rating: 5,
      quote: "Desde que descobri a Creativa Moldes, economizo muito dinheiro fazendo minhas próprias roupas. A qualidade dos moldes é incrível!",
      image: "https://images.unsplash.com/photo-1551788532-76d7323c7cc0"
    },
    {
      id: 3,
      name: "Renata Silva",
      location: "Belo Horizonte",
      rating: 5,
      quote: "Os moldes são modernos e fáceis de seguir. Já fiz várias peças e recebo elogios toda vez que uso. Super recomendo!",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604"
    }
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className="text-yellow-400">
        ★
      </span>
    ));
  };

  return (
    <section className="section-padding bg-text">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title text-white">Clientes Apaixonadas</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Veja o que nossa comunidade está dizendo sobre os moldes da Creativa.
          </p>
        </div>

        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id}>
                <div className="bg-white rounded-xl overflow-hidden shadow-lg p-6 md:p-8 md:flex gap-6">
                  <div className="md:w-1/3 mb-6 md:mb-0">
                    <div className="h-64 md:h-full rounded-lg overflow-hidden">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3 flex flex-col justify-center">
                    <div className="mb-4">
                      {renderStars(testimonial.rating)}
                    </div>
                    <blockquote className="text-lg md:text-xl italic mb-6 text-text/80">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <p className="font-semibold text-text">{testimonial.name}</p>
                      <p className="text-text/60">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6">
            <CarouselPrevious className="mx-2" />
            <CarouselNext className="mx-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
