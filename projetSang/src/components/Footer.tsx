import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="logo_sang.png" alt="SangVital Logo" width={130} height={130} />
            </div>
            <p className="text-sm text-background/60 leading-relaxed">
              Votre dossier médical accessible partout, à tout moment. Sauvez des vies grâce au don de sang.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Navigation</h4>
            <ul className="space-y-3 text-sm text-background/60">
              <li><Link to="/" className="hover:text-primary transition-colors">Accueil</Link></li>
              <li><a href="/#features" className="hover:text-primary transition-colors">Fonctionnalités</a></li>
              <li><a href="/#how-it-works" className="hover:text-primary transition-colors">Comment ça marche</a></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Légal</h4>
            <ul className="space-y-3 text-sm text-background/60">
              <li><Link to="/" className="hover:text-primary transition-colors">Politique de confidentialité</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Conditions d'utilisation</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Protection des données</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-3 text-sm text-background/60">
              <li><a href="mailto:contact@sangvital.ma" className="hover:text-primary transition-colors">contact@sangvital.ma</a></li>
              <li><a href="tel:+212600000000" className="hover:text-primary transition-colors">+212 600 000 000</a></li>
              <li>Maroc</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/10 mt-12 pt-8 text-center text-xs text-background/40">
          <p>© 2026 DONSANG — Créé par Aya Asrir & Hassania El-Falah</p>
        </div>
      </div>
    </footer>
  );
}
