import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    tour: [
      { label: 'Fechas', href: '#entradas' },
      { label: 'Ubicaciones', href: '#entradas' },
      { label: 'Preguntas Frecuentes', href: '#faq' },
    ],
    social: [
      { label: 'Instagram', href: 'https://instagram.com/bts.bighitofficial' },
      { label: 'Twitter', href: 'https://twitter.com/bts_twt' },
      { label: 'YouTube', href: 'https://youtube.com/bangtantv' },
      { label: 'TikTok', href: 'https://tiktok.com/@bts_official_bighit' },
    ],
    legal: [
      { label: 'Términos y Condiciones', href: '#' },
      { label: 'Política de Privacidad', href: '#' },
      { label: 'Política de Reembolso', href: '#' },
    ],
  };

  return (
    <footer className="bg-secondary border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-2xl">B</span>
              </div>
              <div>
                <span className="text-white font-bold text-xl block">BTS TOUR</span>
                <span className="text-gray-500 text-sm">PERÚ 2026</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              La experiencia musical más grande de K-pop llega a Perú.
              Vive el fenómeno BTS en vivo.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-2xl">💜</span>
              <span className="text-gray-400 text-sm">ARMY PERÚ</span>
            </div>
          </div>

          {/* Tour Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Tour</h4>
            <ul className="space-y-3">
              {footerLinks.tour.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Síguenos</h4>
            <ul className="space-y-3">
              {footerLinks.social.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {currentYear} BTS World Tour. Todos los derechos reservados.
            <br className="md:hidden" />
            <span className="hidden md:inline"> | </span>
            HYBE Corporation & BIGHIT MUSIC
          </p>
          <div className="flex items-center gap-4">
            <span className="text-gray-500 text-sm">Made with 💜 for ARMY</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
