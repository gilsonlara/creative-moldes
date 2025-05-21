
import React from 'react';
import Logo from '../ui/Logo';
import { Instagram, Camera, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-text text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Logo variant="white" />
            <p className="mt-4 text-sm opacity-90">
              Moldes de roupas digitais profissionais 
              para despertar sua criatividade e transformar
              suas ideias em peças únicas.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-lg font-medium mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="opacity-75 hover:opacity-100 transition-opacity">Sobre</a></li>
              <li><a href="#moldes" className="opacity-75 hover:opacity-100 transition-opacity">Moldes</a></li>
              <li><a href="#" className="opacity-75 hover:opacity-100 transition-opacity">Blog</a></li>
              <li><a href="#" className="opacity-75 hover:opacity-100 transition-opacity">Contato</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-lg font-medium mb-4">Informações</h4>
            <ul className="space-y-2">
              <li><a href="#" className="opacity-75 hover:opacity-100 transition-opacity">Termos de Uso</a></li>
              <li><a href="#" className="opacity-75 hover:opacity-100 transition-opacity">Política de Privacidade</a></li>
              <li><a href="#faq" className="opacity-75 hover:opacity-100 transition-opacity">FAQ</a></li>
              <li><a href="#" className="opacity-75 hover:opacity-100 transition-opacity">Suporte</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-lg font-medium mb-4">Siga-nos</h4>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                 className="hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer"
                 className="hover:text-primary transition-colors" aria-label="Pinterest">
                <Camera size={24} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                 className="hover:text-primary transition-colors" aria-label="YouTube">
                <Youtube size={24} />
              </a>
            </div>
            <div className="mt-6">
              <h4 className="text-lg font-medium mb-2">Contato</h4>
              <a href="mailto:contato@creativamoldes.com" className="opacity-75 hover:opacity-100 transition-opacity">
                contato@creativamoldes.com
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm opacity-75">
          <p>&copy; {currentYear} Creativa Moldes. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
