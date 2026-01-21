'use client';

import React, { useState } from 'react';
import { SectionContainer, Button } from '../ui';

interface Track {
  id: string;
  name: string;
  album: string;
  duration: string;
  spotifyUrl: string;
}

const popularTracks: Track[] = [
  { id: '1', name: 'Dynamite', album: 'BE', duration: '3:19', spotifyUrl: 'https://open.spotify.com/track/0t1kP63rueHleOhQkYSXFY' },
  { id: '2', name: 'Butter', album: 'Butter', duration: '2:44', spotifyUrl: 'https://open.spotify.com/track/1mWdTewIgB3gtBM3TOSFhB' },
  { id: '3', name: 'Boy With Luv', album: 'Map of the Soul: Persona', duration: '3:49', spotifyUrl: 'https://open.spotify.com/track/5KawlOMHjWeUjQtnuRs22c' },
  { id: '4', name: 'Spring Day', album: 'You Never Walk Alone', duration: '4:34', spotifyUrl: 'https://open.spotify.com/track/0PjwZe9FAk3HxtiKJmPIlu' },
  { id: '5', name: 'Fake Love', album: 'Love Yourself 轉 Tear', duration: '4:02', spotifyUrl: 'https://open.spotify.com/track/3HKGE1U45Hf5L4Rlx8f2VD' },
  { id: '6', name: 'DNA', album: 'Love Yourself 承 Her', duration: '3:43', spotifyUrl: 'https://open.spotify.com/track/2pJxnR1ksqmfU4Xyblk6lP' },
  { id: '7', name: 'Blood Sweat & Tears', album: 'Wings', duration: '3:36', spotifyUrl: 'https://open.spotify.com/track/5a1iz510sv2W9Dt1MvFd5R' },
  { id: '8', name: 'Permission to Dance', album: 'Butter', duration: '3:07', spotifyUrl: 'https://open.spotify.com/track/3WRME5PY3w6rLjPUNakdwT' },
];

const albums = [
  { id: '1', name: 'Proof', year: '2022', spotifyId: '6al2VdKbb6FIz9d7lU7WRB', image: 'https://i.scdn.co/image/ab67616d0000b273879e9318cb9f4e05ee552ac9' },
  { id: '2', name: 'BE', year: '2020', spotifyId: '2qehskW9lYGWfYb0xPZkrS', image: 'https://i.scdn.co/image/ab67616d0000b273f8f5c5d7e26a8a5e5c5b8d8e' },
  { id: '3', name: 'Map of the Soul: 7', year: '2020', spotifyId: '5W1XY5ucNATjTULERvXx9j', image: 'https://i.scdn.co/image/ab67616d0000b2738e6d8a8e8e8e8e8e8e8e8e8e' },
];

const SpotifySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'player' | 'tracks'>('player');

  return (
    <SectionContainer
      id="musica"
      title="Escucha su Música"
      subtitle="Prepárate para el concierto con los mejores éxitos de BTS"
    >
      {/* Tab switcher */}
      <div className="flex justify-center gap-4 mb-10">
        <button
          onClick={() => setActiveTab('player')}
          className={`px-6 py-2 rounded-full font-medium transition-all ${
            activeTab === 'player'
              ? 'bg-[#1DB954] text-white'
              : 'bg-secondary text-gray-400 hover:text-white'
          }`}
        >
          🎵 Reproductor
        </button>
        <button
          onClick={() => setActiveTab('tracks')}
          className={`px-6 py-2 rounded-full font-medium transition-all ${
            activeTab === 'tracks'
              ? 'bg-[#1DB954] text-white'
              : 'bg-secondary text-gray-400 hover:text-white'
          }`}
        >
          📀 Top Canciones
        </button>
      </div>

      {activeTab === 'player' ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Spotify Embed */}
          <div className="glass-effect p-6 rounded-2xl">
            <h3 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-[#1DB954]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
              Playlist Oficial del Tour
            </h3>
            <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/playlist/37i9dQZF1DX9tPFwDMOaN1?utm_source=generator&theme=0"
              width="100%"
              height="380"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded-xl"
            />
          </div>

          {/* Artist Profile */}
          <div className="glass-effect p-6 rounded-2xl">
            <h3 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-[#1DB954]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
              Perfil de BTS
            </h3>
            <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/artist/3Nrfpe0tUJi4K4DXYWgMUX?utm_source=generator&theme=0"
              width="100%"
              height="380"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded-xl"
            />
          </div>
        </div>
      ) : (
        <div className="glass-effect rounded-2xl overflow-hidden">
          {/* Track list header */}
          <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 border-b border-gray-700 text-gray-500 text-sm">
            <div className="col-span-1">#</div>
            <div className="col-span-5">TÍTULO</div>
            <div className="col-span-4">ÁLBUM</div>
            <div className="col-span-2 text-right">DURACIÓN</div>
          </div>

          {/* Track list */}
          <div className="divide-y divide-gray-800">
            {popularTracks.map((track, index) => (
              <a
                key={track.id}
                href={track.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-white/5 transition-colors group"
              >
                <div className="col-span-1 flex items-center">
                  <span className="text-gray-500 group-hover:hidden">{index + 1}</span>
                  <svg className="w-5 h-5 text-primary hidden group-hover:block" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <div className="col-span-11 md:col-span-5 flex flex-col">
                  <span className="text-white font-medium group-hover:text-primary transition-colors">
                    {track.name}
                  </span>
                  <span className="text-gray-500 text-sm md:hidden">{track.album}</span>
                </div>
                <div className="hidden md:flex col-span-4 items-center text-gray-400">
                  {track.album}
                </div>
                <div className="hidden md:flex col-span-2 items-center justify-end text-gray-500">
                  {track.duration}
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Spotify CTA */}
      <div className="mt-12 text-center">
        <p className="text-gray-400 mb-6">
          Sigue a BTS en Spotify para no perderte ninguna novedad
        </p>
        <a
          href="https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="primary" size="lg" className="bg-[#1DB954] hover:bg-[#1aa34a]">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
            Seguir en Spotify
          </Button>
        </a>
      </div>
    </SectionContainer>
  );
};

export default SpotifySection;
