import { Button } from "@/components/ui/button";
import { useState } from "react";
import TicketDialog from "./TicketDialog";
import heroConcert from "@/assets/hero-concert.jpg";

const Hero = () => {
  const [isTicketDialogOpen, setIsTicketDialogOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroConcert})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
          Гурт «Грим та Грім»
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-4">
          Справжній український рок, який туркує в серці!
        </p>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          «Грим та Грім» — це поєднання потужних гітарних рифів, чесних текстів і вибухової енергії сцени. 
          Ми граємо для тих, хто цінує живий звук, свободу та силу музики!
        </p>
        <p className="text-lg text-muted-foreground mb-12">
          Наші концерти — це завжди контакт із залом, драйв і енергія! Приєднуйся до нас на наших найближчих виступах і відчуй силу справжньої музики!
        </p>

        <Button 
          size="lg"
          className="bg-gradient-accent text-primary-foreground hover:shadow-glow transition-all duration-300 text-lg px-8 py-6 font-semibold"
          onClick={() => setIsTicketDialogOpen(true)}
        >
          ЗАМОВИТИ КВИТОК
        </Button>
      </div>

      <TicketDialog 
        isOpen={isTicketDialogOpen} 
        onClose={() => setIsTicketDialogOpen(false)} 
      />
    </section>
  );
};

export default Hero;