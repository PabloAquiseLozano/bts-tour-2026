import React from 'react';
import { SectionContainer } from '../ui';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  highlight?: boolean;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: '2013',
    title: 'El Debut',
    description: 'BTS debuta el 13 de junio con "No More Dream". Siete jóvenes de Corea del Sur comienzan su viaje hacia la cima del mundo.',
  },
  {
    year: '2015',
    title: 'Primeros Reconocimientos',
    description: 'Ganan su primer premio importante en los Melon Music Awards. El fandom ARMY comienza a crecer exponencialmente.',
  },
  {
    year: '2017',
    title: 'Conquista Global',
    description: 'Se presentan en los Billboard Music Awards y ganan Top Social Artist. Son los primeros artistas K-pop en lograrlo.',
    highlight: true,
  },
  {
    year: '2018',
    title: 'Love Yourself',
    description: 'La era "Love Yourself" rompe récords mundiales. "Fake Love" alcanza el top 10 del Billboard Hot 100.',
  },
  {
    year: '2019',
    title: 'Estadios Mundiales',
    description: 'Llenan estadios en todo el mundo con el "Love Yourself: Speak Yourself" tour, incluyendo Wembley y el Rose Bowl.',
  },
  {
    year: '2020',
    title: 'Dynamite Explota',
    description: '"Dynamite" se convierte en su primer #1 en el Billboard Hot 100. Rompen récords en Spotify y YouTube.',
    highlight: true,
  },
  {
    year: '2021',
    title: 'Récords sin Precedentes',
    description: 'Cuatro #1 en Billboard con "Butter", "Permission to Dance", y colaboraciones históricas. Nominados al Grammy.',
  },
  {
    year: '2022-2025',
    title: 'Servicio Militar',
    description: 'Los miembros cumplen su servicio militar obligatorio mientras mantienen conexión con ARMY a través de proyectos solistas.',
  },
  {
    year: '2026',
    title: 'El Gran Regreso',
    description: 'BTS regresa reunido con el World Tour 2026, su gira más ambiciosa hasta la fecha. ¡Y llegan a Perú!',
    highlight: true,
  },
];

const members = [
  { name: 'RM', role: 'Líder & Rapero', color: 'from-blue-500 to-blue-700' },
  { name: 'Jin', role: 'Vocalista', color: 'from-pink-400 to-pink-600' },
  { name: 'SUGA', role: 'Rapero', color: 'from-gray-400 to-gray-600' },
  { name: 'J-Hope', role: 'Rapero & Bailarín', color: 'from-red-500 to-red-700' },
  { name: 'Jimin', role: 'Vocalista & Bailarín', color: 'from-yellow-400 to-yellow-600' },
  { name: 'V', role: 'Vocalista', color: 'from-green-500 to-green-700' },
  { name: 'Jung Kook', role: 'Vocalista & Maknae', color: 'from-purple-500 to-purple-700' },
];

const BtsHistory: React.FC = () => {
  return (
    <SectionContainer
      id="historia"
      title="La Historia de BTS"
      subtitle="Desde Seúl hasta conquistar el mundo: el viaje de 7 soñadores"
      dark
    >
      {/* Members showcase */}
      <div className="mb-20">
        <h3 className="text-2xl font-bold text-white text-center mb-8">Los 7 Miembros</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
          {members.map((member) => (
            <div
              key={member.name}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
            >
              <div className={`aspect-square bg-gradient-to-br ${member.color} p-4 flex flex-col items-center justify-center transition-all duration-300 group-hover:scale-105`}>
                <span className="text-white font-bold text-lg md:text-xl">{member.name}</span>
                <span className="text-white/70 text-xs md:text-sm text-center mt-1">{member.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-700 transform md:-translate-x-1/2" />

        <div className="space-y-12">
          {timelineEvents.map((event, index) => (
            <div
              key={event.year}
              className={`relative flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 transform -translate-x-1/2 z-10">
                <div
                  className={`w-4 h-4 rounded-full ${
                    event.highlight ? 'bg-primary animate-pulse' : 'bg-gray-500'
                  }`}
                />
              </div>

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div
                  className={`p-6 rounded-xl ${
                    event.highlight
                      ? 'bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30'
                      : 'glass-effect'
                  }`}
                >
                  <span
                    className={`text-sm font-bold ${
                      event.highlight ? 'text-primary' : 'text-gray-500'
                    }`}
                  >
                    {event.year}
                  </span>
                  <h4 className="text-xl font-bold text-white mt-2 mb-3">{event.title}</h4>
                  <p className="text-gray-400">{event.description}</p>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-1/2" />
            </div>
          ))}
        </div>
      </div>

      {/* Fun facts */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { number: '10+', label: 'Años de carrera' },
          { number: '40M+', label: 'ARMY en el mundo' },
          { number: '30B+', label: 'Reproducciones Spotify' },
          { number: '100+', label: 'Premios ganados' },
        ].map((stat) => (
          <div key={stat.label} className="text-center p-6 glass-effect rounded-xl">
            <span className="text-3xl md:text-4xl font-bold gradient-text">{stat.number}</span>
            <p className="text-gray-400 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default BtsHistory;
