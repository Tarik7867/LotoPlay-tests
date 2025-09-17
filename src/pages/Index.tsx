import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Concerts from "@/components/Concerts";
import BandMembers from "@/components/BandMembers";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Concerts />
        <BandMembers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
