import React from 'react';
import { CheckCircle } from 'lucide-react';
export const CTASection = () => {
  return <section id="contact" className="relative bg-black text-white py-20">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para Transformar sua Empresa?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Agende uma consulta estratégica e descubra como podemos aplicar
              princípios militares para impulsionar seu negócio.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle size={24} className="text-[#0A3D1C] mr-3 flex-shrink-0" />
                <p>Primeira avaliação estratégica gratuita</p>
              </div>
              <div className="flex items-start">
                <CheckCircle size={24} className="text-[#0A3D1C] mr-3 flex-shrink-0" />
                <p>Planos personalizados para sua realidade</p>
              </div>
              <div className="flex items-start">
                <CheckCircle size={24} className="text-[#0A3D1C] mr-3 flex-shrink-0" />
                <p>Resultados mensuráveis em até 90 dias</p>
              </div>
              <div className="flex items-start">
                <CheckCircle size={24} className="text-[#0A3D1C] mr-3 flex-shrink-0" />
                <p>Acompanhamento contínuo do progresso</p>
              </div>
            </div>
            <a href="#" className="bg-[#0A3D1C] hover:bg-[#0D4B23] text-white font-bold py-3 px-8 rounded-md inline-flex items-center justify-center transition-colors duration-300">
              Quero Transformar Minha Empresa
            </a>
          </div>
          <div className="bg-black/80 border border-[#0A3D1C]/50 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Entre em Contato</h3>
            <form>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Nome Completo
                  </label>
                  <input type="text" id="name" className="w-full bg-black/50 border border-[#0A3D1C]/30 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#0A3D1C]" placeholder="Seu nome" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    E-mail
                  </label>
                  <input type="email" id="email" className="w-full bg-black/50 border border-[#0A3D1C]/30 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#0A3D1C]" placeholder="seu@email.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">
                    Telefone
                  </label>
                  <input type="tel" id="phone" className="w-full bg-black/50 border border-[#0A3D1C]/30 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#0A3D1C]" placeholder="(00) 00000-0000" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-1">
                    Empresa
                  </label>
                  <input type="text" id="company" className="w-full bg-black/50 border border-[#0A3D1C]/30 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#0A3D1C]" placeholder="Nome da sua empresa" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Mensagem
                  </label>
                  <textarea id="message" rows={4} className="w-full bg-black/50 border border-[#0A3D1C]/30 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#0A3D1C]" placeholder="Como podemos ajudar sua empresa?"></textarea>
                </div>
                <button type="submit" className="w-full bg-[#0A3D1C] hover:bg-[#0D4B23] text-white font-bold py-3 px-6 rounded-md transition-colors duration-300">
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>;
};