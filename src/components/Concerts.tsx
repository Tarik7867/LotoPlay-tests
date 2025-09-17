import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Users } from "lucide-react";
import TicketDialog from "./TicketDialog";

interface Concert {
  id: string;
  title: string;
  venue: string;
  date: string;
  time: string;
  capacity: number;
  price: string;
}

const Concerts = () => {
  const [isTicketDialogOpen, setIsTicketDialogOpen] = useState(false);
  const [selectedConcert, setSelectedConcert] = useState<string>("");

  const concerts: Concert[] = [
    {
      id: "1",
      title: "Київ — Docker-O Pub",
      venue: "Docker-O Pub",
      date: "25.10.2025",
      time: "19:00",
      capacity: 250,
      price: "350 грн"
    },
    {
      id: "2", 
      title: "Львів — FESTrepublic",
      venue: "FESTrepublic",
      date: "01.11.2025",
      time: "20:00",
      capacity: 400,
      price: "400 грн"
    },
    {
      id: "3",
      title: "Одеса — Зелені театр",
      venue: "Зелені театр", 
      date: "08.11.2025",
      time: "19:30",
      capacity: 700,
      price: "450 грн"
    },
    {
      id: "4",
      title: "Харків — ArtZavod",
      venue: "ArtZavod",
      date: "15.11.2025", 
      time: "19:00",
      capacity: 500,
      price: "400 грн"
    }
  ];

  const handleTicketClick = (concertTitle: string) => {
    setSelectedConcert(concertTitle);
    setIsTicketDialogOpen(true);
  };

  return (
    <section id="concerts" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Найближчі концерти
          </h2>
          <p className="text-xl text-muted-foreground">
            Приєднуйся до нас на живих виступах по всій Україні
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {concerts.map((concert) => (
            <Card key={concert.id} className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  {concert.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{concert.date}, {concert.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{concert.capacity} місць</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-2">
                  <span className="text-lg font-semibold text-primary">
                    {concert.price}
                  </span>
                  <Button 
                    onClick={() => handleTicketClick(`${concert.title} — ${concert.date}, ${concert.time}`)}
                    className="bg-gradient-danger hover:shadow-glow transition-all duration-300"
                  >
                    Замовити квиток
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <TicketDialog 
          isOpen={isTicketDialogOpen} 
          onClose={() => setIsTicketDialogOpen(false)}
          concertTitle={selectedConcert}
        />
      </div>
    </section>
  );
};

export default Concerts;