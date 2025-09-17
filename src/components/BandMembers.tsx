import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import guitarist from "@/assets/guitarist.jpg";
import vocalist from "@/assets/vocalist.jpg";
import drummer from "@/assets/drummer.jpg";

interface BandMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  instruments: string[];
}

const BandMembers = () => {
  const [selectedMember, setSelectedMember] = useState<BandMember | null>(null);

  const members: BandMember[] = [
    {
      id: "1",
      name: "Максим",
      role: "Гітара",
      image: guitarist,
      bio: "Максим — душа гурту та головний автор музики. Його потужні рифи та мелодійні соло створюють неповторний звук 'Грим та Грім'. Грає на гітарі вже більше 15 років.",
      instruments: ["Електрогітара", "Акустична гітара"]
    },
    {
      id: "2", 
      name: "Олена",
      role: "Вокал",
      image: vocalist,
      bio: "Олена — харизматична вокалістка з потужним голосом, що може передати будь-які емоції. Автор більшості текстів гурту, які торкаються серця кожного слухача.",
      instruments: ["Вокал", "Фортепіано"]
    },
    {
      id: "3",
      name: "Тарас",
      role: "Барабани", 
      image: drummer,
      bio: "Тарас — ритмічна основа гурту. Його енергійна гра на барабанах створює драйв, який змушує танцювати навіть найспокійніших слухачів. Професійний музикант з 10-річним досвідом.",
      instruments: ["Барабани", "Перкусія"]
    }
  ];

  return (
    <section id="band" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Учасники гурту
          </h2>
          <p className="text-xl text-muted-foreground">
            Знайомтесь з талановитими музикантами 'Грим та Грім'
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {members.map((member) => (
            <Card key={member.id} className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <h3 className="text-2xl font-bold text-card-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-semibold mb-4">
                  {member.role}
                </p>
                
                <Button 
                  variant="outline"
                  onClick={() => setSelectedMember(member)}
                  className="w-full"
                >
                  Дізнатися більше
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Member Details Dialog */}
        <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
          <DialogContent className="sm:max-w-lg">
            {selectedMember && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-center text-primary text-2xl">
                    {selectedMember.name}
                  </DialogTitle>
                </DialogHeader>
                
                <div className="text-center space-y-4">
                  <img 
                    src={selectedMember.image} 
                    alt={selectedMember.name}
                    className="w-32 h-32 object-cover rounded-full mx-auto"
                  />
                  
                  <div>
                    <p className="text-primary font-semibold text-lg mb-2">
                      {selectedMember.role}
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {selectedMember.bio}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Інструменти:</h4>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {selectedMember.instruments.map((instrument) => (
                          <span 
                            key={instrument}
                            className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm"
                          >
                            {instrument}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default BandMembers;