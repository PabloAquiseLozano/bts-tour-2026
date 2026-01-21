import React from 'react';
import { SectionContainer, Button, Card, CardContent } from '../ui';

interface Ticket {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  color: string;
  popular?: boolean;
  soldOut?: boolean;
}

const tickets: Ticket[] = [
  {
    id: 'general',
    name: 'General',
    price: 350,
    description: 'Zona tribuna - Vista completa del escenario',
    features: [
      'Acceso al concierto',
      'Vista panorámica del escenario',
      'Merchandising digital exclusivo',
    ],
    color: 'from-gray-600 to-gray-700',
  },
  {
    id: 'platinum',
    name: 'Platinum',
    price: 650,
    originalPrice: 750,
    description: 'Zona preferencial - Más cerca de BTS',
    features: [
      'Acceso preferencial al concierto',
      'Zona cercana al escenario',
      'Kit de bienvenida ARMY',
      'Merchandising digital exclusivo',
    ],
    color: 'from-blue-600 to-blue-700',
    popular: true,
  },
  {
    id: 'vip',
    name: 'VIP ARMY',
    price: 1200,
    description: 'La experiencia definitiva para ARMY',
    features: [
      'Zona VIP frente al escenario',
      'Acceso early entry',
      'Meet & Greet virtual',
      'Box exclusivo de merchandising',
      'Certificado conmemorativo',
      'Acceso a soundcheck',
    ],
    color: 'from-primary to-primary-dark',
  },
  {
    id: 'diamond',
    name: 'Diamond',
    price: 2500,
    description: 'Experiencia ultra premium limitada',
    features: [
      'Todo lo incluido en VIP ARMY',
      'Asiento numerado primera fila',
      'Foto grupal con escenario',
      'Cena exclusiva pre-show',
      'Transporte VIP',
      'Hotel incluido',
    ],
    color: 'from-accent to-yellow-600',
    soldOut: true,
  },
];

const TicketsSection: React.FC = () => {
  return (
    <SectionContainer
      id="entradas"
      title="Consigue tus Entradas"
      subtitle="Elige la experiencia que mejor se adapte a ti y vive el concierto de tu vida"
      dark
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tickets.map((ticket) => (
          <Card
            key={ticket.id}
            className={`relative ${ticket.popular ? 'ring-2 ring-primary' : ''} ${ticket.soldOut ? 'opacity-75' : ''}`}
          >
            {ticket.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  MÁS POPULAR
                </span>
              </div>
            )}
            {ticket.soldOut && (
              <div className="absolute inset-0 bg-black/60 z-20 flex items-center justify-center rounded-2xl">
                <span className="text-white font-bold text-xl transform -rotate-12">AGOTADO</span>
              </div>
            )}

            <div className={`bg-gradient-to-r ${ticket.color} p-6 text-center`}>
              <h3 className="text-white font-bold text-xl mb-2">{ticket.name}</h3>
              <div className="flex items-center justify-center gap-2">
                {ticket.originalPrice && (
                  <span className="text-white/60 line-through text-lg">
                    S/ {ticket.originalPrice}
                  </span>
                )}
                <span className="text-white font-bold text-3xl">S/ {ticket.price}</span>
              </div>
            </div>

            <CardContent>
              <p className="text-gray-400 text-sm mb-4">{ticket.description}</p>

              <ul className="space-y-3 mb-6">
                {ticket.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={ticket.popular ? 'primary' : 'outline'}
                fullWidth
                disabled={ticket.soldOut}
              >
                {ticket.soldOut ? 'Agotado' : 'Comprar'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-400 text-sm mb-4">
          💜 Todos los precios incluyen cargo por servicio. No se aceptan devoluciones.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="glass-effect px-4 py-2 rounded-lg flex items-center gap-2">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="text-gray-300 text-sm">General disponible</span>
          </div>
          <div className="glass-effect px-4 py-2 rounded-lg flex items-center gap-2">
            <span className="w-3 h-3 bg-yellow-500 rounded-full" />
            <span className="text-gray-300 text-sm">Últimas entradas Platinum</span>
          </div>
          <div className="glass-effect px-4 py-2 rounded-lg flex items-center gap-2">
            <span className="w-3 h-3 bg-red-500 rounded-full" />
            <span className="text-gray-300 text-sm">Diamond agotado</span>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default TicketsSection;
