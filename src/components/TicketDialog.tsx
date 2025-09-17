import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface TicketDialogProps {
  isOpen: boolean;
  onClose: () => void;
  concertTitle?: string;
}

const TicketDialog = ({ isOpen, onClose, concertTitle }: TicketDialogProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    concert: concertTitle || "",
    tickets: "1"
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const concerts = [
    "Київ — Docker-O Pub — 25.10.2025, 19:00",
    "Львів — FESTrepublic — 01.11.2025, 20:00",
    "Одеса — Зелені театр — 08.11.2025, 19:30",
    "Харків — ArtZavod — 15.11.2025, 19:00"
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Ім'я обов'язкове";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email обов'язковий";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Невірний формат email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Телефон обов'язковий";
    } else if (!/^\+?[\d\s\-()]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Невірний формат телефону";
    }

    if (!formData.concert) {
      newErrors.concert = "Оберіть концерт";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // Simulate GET request
    const params = new URLSearchParams({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      concert: formData.concert,
      tickets: formData.tickets
    });

    // Simulate API call
    console.log(`GET request would be sent to: /api/tickets?${params.toString()}`);
    
    toast({
      title: "Замовлення відправлено!",
      description: "Ми зв'яжемося з вами найближчим часом для підтвердження.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      concert: "",
      tickets: "1"
    });
    setErrors({});
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-primary">
            Замовлення квитків
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Ім'я *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={errors.name ? "border-destructive" : ""}
            />
            {errors.name && (
              <p className="text-destructive text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={errors.email ? "border-destructive" : ""}
            />
            {errors.email && (
              <p className="text-destructive text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <Label htmlFor="phone">Телефон *</Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+380..."
              className={errors.phone ? "border-destructive" : ""}
            />
            {errors.phone && (
              <p className="text-destructive text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          <div>
            <Label htmlFor="concert">Концерт *</Label>
            <Select 
              value={formData.concert} 
              onValueChange={(value) => setFormData({ ...formData, concert: value })}
            >
              <SelectTrigger className={errors.concert ? "border-destructive" : ""}>
                <SelectValue placeholder="Оберіть концерт" />
              </SelectTrigger>
              <SelectContent>
                {concerts.map((concert) => (
                  <SelectItem key={concert} value={concert}>
                    {concert}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.concert && (
              <p className="text-destructive text-sm mt-1">{errors.concert}</p>
            )}
          </div>

          <div>
            <Label htmlFor="tickets">Кількість квитків</Label>
            <Select 
              value={formData.tickets} 
              onValueChange={(value) => setFormData({ ...formData, tickets: value })}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num} {num === 1 ? 'квиток' : 'квитки'}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Скасувати
            </Button>
            <Button type="submit" className="flex-1 bg-gradient-accent hover:shadow-glow">
              Замовити
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TicketDialog;