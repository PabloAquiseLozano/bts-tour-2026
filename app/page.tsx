import {BtsHistory, Footer, Header, Hero, MerchSection, SpotifySection, TicketsSection} from "@/components";

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
