
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
}

const FaqSection = () => {
  const faqs: FaqItem[] = [
    {
      question: "Como recebo os moldes?",
      answer: "Após a compra, você receberá um email com o link para download dos arquivos PDF. Os moldes estarão disponíveis também na sua conta, na seção 'Meus Moldes', para download a qualquer momento."
    },
    {
      question: "Os moldes servem em quais tamanhos?",
      answer: "Nossos moldes estão disponíveis em uma ampla gama de tamanhos, do PP ao GG (36 ao 48). Alguns moldes específicos podem ter uma variedade ainda maior. A informação sobre os tamanhos disponíveis está na descrição de cada molde."
    },
    {
      question: "Posso usar os moldes comercialmente?",
      answer: "Sim! Nossos moldes podem ser utilizados para criar peças para venda. O único requerimento é que você não redistribua ou revenda os moldes digitais em si."
    },
    {
      question: "Preciso de impressora especial?",
      answer: "Não! Todos os nossos moldes são otimizados para impressão em papel A4 comum, usando qualquer impressora doméstica. As instruções de montagem detalhadas estão incluídas em cada pacote."
    },
    {
      question: "O que acontece se eu tiver dificuldades com o molde?",
      answer: "Oferecemos suporte completo para todos os nossos clientes. Se você tiver qualquer dificuldade, basta entrar em contato conosco por email ou pelo chat do site. Além disso, temos uma comunidade ativa onde você pode trocar experiências com outros costureiros."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Dúvidas Frequentes</h2>
          <p className="text-lg text-text/80 max-w-2xl mx-auto">
            Encontre respostas para as perguntas mais comuns sobre nossos moldes e serviços.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-text/80">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
