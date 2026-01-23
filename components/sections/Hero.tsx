'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '../ui';
import membersData from '@/data-list/members.json';
interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const targetDate = new Date('2026-10-09T19:00:00');
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-black to-black" />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      <div className="container mx-auto px-4 relative z-10 text-center py-24 flex flex-col items-center justify-center min-h-screen">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tight mb-4">BTS</h1>
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="h-px bg-primary w-16 md:w-32" />
            <span className="text-primary text-xl md:text-2xl font-bold tracking-widest">WORLD TOUR</span>
            <div className="h-px bg-primary w-16 md:w-32" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-2">2026</h2>
        </div>
        <div className="glass-effect inline-block px-8 py-4 rounded-2xl mb-8">
          <p className="text-primary font-bold text-lg mb-1">LIMA, PERU</p>
          <p className="text-white text-2xl md:text-3xl font-bold">9 - 10 de Octubre, 2026</p>
          <p className="text-gray-400 mt-1">Estadio Nacional</p>
        </div>
        <div className="mb-10">
          <p className="text-gray-400 mb-4 text-lg">Faltan para el concierto:</p>
          <div className="flex justify-center gap-4 md:gap-8">
            {[
              { value: timeLeft.days, label: 'Dias' },
              { value: timeLeft.hours, label: 'Horas' },
              { value: timeLeft.minutes, label: 'Min' },
              { value: timeLeft.seconds, label: 'Seg' },
            ].map((item, index) => (
              <div key={index} className="glass-effect px-4 py-3 md:px-6 md:py-4 rounded-xl min-w-[70px] md:min-w-[90px]">
                <span className="text-3xl md:text-5xl font-bold text-white block">
                  {String(item.value).padStart(2, '0')}
                </span>
                <span className="text-gray-400 text-xs md:text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={() => document.getElementById('entradas')?.scrollIntoView({ behavior: 'smooth' })}>
            Comprar Entradas
          </Button>
          <Button variant="outline" size="lg" onClick={() => document.getElementById('historia')?.scrollIntoView({ behavior: 'smooth' })}>
            Conocer mas sobre BTS
          </Button>
        </div>
        <div className="mt-16">
          <p className="text-gray-500 text-sm mb-6">Los 7 miembros</p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-1 md:-space-x-8 lg:-space-x-12">
            {membersData.map((member) => (
              <div
                key={member.id}
                className="group cursor-pointer flex flex-col items-center"
              >
                <div className="relative w-24 h-32 md:w-32 md:h-40 lg:w-36 lg:h-48 overflow-hidden transition-transform duration-500 ease-out group-hover:scale-110 group-hover:z-10 mb-3">
                  <Image
                    src={`/${member.image}`}
                    alt={member.name}
                    width={200}
                    height={500}
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-out"
                  />
                </div>
                <span className="text-white/70 group-hover:text-primary transition-colors font-medium text-sm md:text-base">
                  {member.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};
export default Hero;
