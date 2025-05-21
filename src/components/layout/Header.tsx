
import { useState } from 'react';
import { X, Menu } from 'lucide-react';
import Logo from '../ui/Logo';
import { Button } from '../ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="container-custom flex items-center justify-between">
        <Logo />
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-text"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#moldes" className="text-text hover:text-primary transition-colors">Moldes</a>
          <a href="#como-funciona" className="text-text hover:text-primary transition-colors">Como Funciona</a>
          <a href="#planos" className="text-text hover:text-primary transition-colors">Planos</a>
          <a href="#faq" className="text-text hover:text-primary transition-colors">FAQ</a>
          <Button className="btn-primary">Começar Agora</Button>
        </nav>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 top-16 bg-white z-40 md:hidden animate-fade-in">
            <nav className="flex flex-col items-center justify-center h-full gap-8 text-lg">
              <a href="#moldes" className="text-text hover:text-primary transition-colors" onClick={toggleMenu}>Moldes</a>
              <a href="#como-funciona" className="text-text hover:text-primary transition-colors" onClick={toggleMenu}>Como Funciona</a>
              <a href="#planos" className="text-text hover:text-primary transition-colors" onClick={toggleMenu}>Planos</a>
              <a href="#faq" className="text-text hover:text-primary transition-colors" onClick={toggleMenu}>FAQ</a>
              <Button className="btn-primary" onClick={toggleMenu}>Começar Agora</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
