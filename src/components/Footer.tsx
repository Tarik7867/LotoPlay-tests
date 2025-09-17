import { Instagram, Youtube, Facebook, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">
              Грим та Грім
            </h3>
            <p className="text-muted-foreground">
              Справжній український рок, який туркає в серці! 
              Приєднуйтесь до нашої музичної подорожі.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">
              Контакти
            </h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>booking@grimtagrim.ua</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+380 (98) 123-45-67</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">
              Соціальні мережі
            </h4>
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => window.open('https://instagram.com/grimtagrim', '_blank')}
                className="hover:border-primary/50"
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => window.open('https://youtube.com/@grimtagrim', '_blank')}
                className="hover:border-primary/50"
              >
                <Youtube className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => window.open('https://facebook.com/grimtagrim', '_blank')}
                className="hover:border-primary/50"
              >
                <Facebook className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>© {currentYear} «Грим та Грім». Всі права захищені.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;