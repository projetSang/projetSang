import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, MapPin, Phone, Mail } from "lucide-react";

const bloodGroups = ["A+", "A−", "B+", "B−", "AB+", "AB−", "O+", "O−"];

import { useState, useEffect } from "react";

export const mockDonors = [];

export function SearchTab({ selectedBlood, setSelectedBlood, city, setCity }: any) {
  const [donors, setDonors] = useState<any[]>([]);

  const handleSearch = () => {
    fetch(`/api/hospital/search-donors?blood_type=${encodeURIComponent(selectedBlood)}&city=${encodeURIComponent(city)}`)
      .then(res => res.json())
      .then(data => setDonors(data))
      .catch(console.error);
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <div className="space-y-6">
      <div className="bg-card rounded-xl border border-border p-6">
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          <Filter className="h-4 w-4" />
          Recherche de donneurs
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="text-sm font-medium text-muted-foreground">Groupe sanguin</label>
            <select
              className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              value={selectedBlood}
              onChange={(e) => setSelectedBlood(e.target.value)}
            >
              {bloodGroups.map((g) => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground">Ville</label>
            <Input className="mt-1" value={city} onChange={(e) => setCity(e.target.value)} />
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground">Distance max</label>
            <select className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
              <option>5 km</option>
              <option>10 km</option>
              <option defaultValue="20 km">20 km</option>
              <option>50 km</option>
            </select>
          </div>
          <div className="flex items-end">
            <Button variant="hero" className="w-full" onClick={handleSearch}>
              <Search className="h-4 w-4 mr-2" />
              Rechercher
            </Button>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">
            {donors.length} donneurs {selectedBlood} trouvés dans {city}
          </h3>
          <span className="text-sm text-muted-foreground">Triés par distance</span>
        </div>
        <div className="space-y-3">
          {donors.map((donor, i) => (
            <div key={i} className="bg-card rounded-xl border border-border p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center text-primary font-bold text-lg">
                  {donor.blood_type}
                </div>
                <div>
                  <div className="font-medium flex items-center gap-2">
                    {donor.full_name}
                    <span className="text-xs bg-success/10 text-success px-2 py-0.5 rounded-full">Vérifié</span>
                  </div>
                  <div className="text-sm text-muted-foreground flex items-center gap-3 mt-1">
                    <span>{donor.phone}</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {donor.city}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="hero" size="sm">
                  <Phone className="h-4 w-4 mr-1" />
                  Contacter
                </Button>
                <Button variant="outline" size="sm">
                  <Mail className="h-4 w-4 mr-1" />
                  Email
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
