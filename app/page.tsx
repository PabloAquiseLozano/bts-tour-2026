import { Header, Footer } from '@/components/layout';
import { Hero, TicketsSection, MerchSection, BtsHistory, SpotifySection } from '@/components/sections';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TicketsSection />
        <MerchSection />
        <BtsHistory />
        <SpotifySection />
      </main>
      <Footer />
    </>
  );
}
