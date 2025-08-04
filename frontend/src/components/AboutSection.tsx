import React from 'react';
import { Medal, Target, Users, Shield } from 'lucide-react';
export const AboutSection = () => {
  return <section id="about" className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sobre o Consultor
          </h2>
          <div className="w-20 h-1 bg-[#0A3D1C] mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-w-3 aspect-h-4">
              <img src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Consultor Ex-Militar" className="rounded-lg object-cover w-full h-full shadow-xl" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#0A3D1C] p-4 rounded-lg shadow-lg hidden md:block">
              <p className="font-bold text-xl">15+ Anos</p>
              <p className="text-sm">de Experiência Militar</p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Coronel Roberto Silva</h3>
            <p className="text-gray-300 mb-6">
              Ex-oficial das Forças Especiais com mais de 15 anos de experiência
              em liderança, estratégia e operações táticas. Após uma carreira
              militar exemplar, decidi aplicar meus conhecimentos para ajudar
              empresas a desenvolverem estratégias eficientes e equipes de alto
              desempenho.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="bg-[#0A3D1C] p-3 rounded-full mr-4">
                  <Medal size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Liderança</h4>
                  <p className="text-gray-400 text-sm">
                    Comandei equipes em situações extremas
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#0A3D1C] p-3 rounded-full mr-4">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Estratégia</h4>
                  <p className="text-gray-400 text-sm">
                    Planejamento tático para resultados precisos
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#0A3D1C] p-3 rounded-full mr-4">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Treinamento</h4>
                  <p className="text-gray-400 text-sm">
                    Desenvolvimento de equipes de alta performance
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#0A3D1C] p-3 rounded-full mr-4">
                  <Shield size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Resiliência</h4>
                  <p className="text-gray-400 text-sm">
                    Preparação para superar adversidades
                  </p>
                </div>
              </div>
            </div>
            <a href="#contact" className="inline-block border-b-2 border-[#0A3D1C] font-medium hover:text-[#0A3D1C] transition-colors duration-300">
              Saiba mais sobre minha trajetória →
            </a>
          </div>
        </div>
      </div>
    </section>;
};