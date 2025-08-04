import React from 'react';
import { ChevronRight } from 'lucide-react';
export const HeroSection = () => {
  return <section id="home" className="relative bg-black text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1553697388-94e804e2f0f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Consultoria Estratégica com{' '}
            <span className="text-[#0A3D1C]">Disciplina Militar</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Transforme sua empresa com estratégias baseadas em anos de
            experiência militar e liderança de elite.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="bg-[#0A3D1C] hover:bg-[#0D4B23] text-white font-bold py-3 px-8 rounded-md inline-flex items-center justify-center transition-colors duration-300">
              Agende uma Consulta
              <ChevronRight size={20} className="ml-2" />
            </a>
            <a href="#services" className="border-2 border-white hover:border-[#0A3D1C] text-white hover:text-[#0A3D1C] font-bold py-3 px-8 rounded-md inline-flex items-center justify-center transition-colors duration-300">
              Conheça Nossos Serviços
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
    </section>;
};