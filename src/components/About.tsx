import heroConcert from "@/assets/hero-concert.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Наша історія
          </h2>
          <p className="text-xl text-muted-foreground">
            Від перших акордів до великих сцен
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              «Грим та Грім» народився з бажання створювати музику, яка відчувається серцем. 
              Ми почали свій шлях у невеликій студії в центрі Києва, де зустрілися троє 
              однодумців, кожен з яких хотів внести свою енергію до української рок-сцени.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Наша музика — це поєднання потужного року з українськими коренями, що 
              відображає справжні емоції та досвід. Ми не боїмося експериментувати зі звуком, 
              досліджуючи нові горизонти, але залишаємося вірними своїм принципам.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              За роки нашої діяльності ми виступили на десятках сцен, від невеликих клубів 
              до великих фестивалів. Наша мета — створювати музику, яка об'єднує людей і 
              надихає на великі справи.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-muted-foreground">Років на сцені</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Концертів</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">3</div>
                <div className="text-muted-foreground">Альбоми</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">10K+</div>
                <div className="text-muted-foreground">Фанів</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={heroConcert} 
                alt="Концерт гурту Грим та Грім"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            
            <div className="absolute bottom-6 left-6 right-6 text-center">
              <p className="text-foreground font-semibold text-lg bg-background/80 backdrop-blur-sm rounded-lg px-4 py-2">
                Наш останній концерт у Києві зібрав понад 2000 глядачів
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;