
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface InfoPageProps {
  onClose: () => void;
}

const InfoPage = ({ onClose }: InfoPageProps) => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-2xl">Über Fantasy Shared Hearts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <h3 className="text-lg font-semibold">Was ist Fantasy Shared Hearts?</h3>
          <p>
            Fantasy Shared Hearts ist eine App, die Paaren hilft, ihre gemeinsamen Interessen und Fantasien zu entdecken.
            Beide Partner beantworten unabhängig voneinander Fragen zu verschiedenen Fantasien und teilen dann ihre Ergebnisse.
          </p>
          
          <h3 className="text-lg font-semibold">Wie funktioniert es?</h3>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Wähle eine Kategorie von Fantasien aus.</li>
            <li>Beantworte alle Fragen in dieser Kategorie mit "Interessiert", "Nicht interessiert" oder "Bedingt interessiert".</li>
            <li>Nachdem du alle Fragen beantwortet hast, generiere einen Code zum Teilen mit deinem Partner.</li>
            <li>Dein Partner beantwortet ebenfalls alle Fragen und gibt deinen Code ein.</li>
            <li>Die App zeigt euch dann nur die Fantasien, an denen ihr beide interessiert seid.</li>
          </ol>
          
          <h3 className="text-lg font-semibold">Was bedeuten die Antwortmöglichkeiten?</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Interessiert:</strong> Du findest diese Fantasie ansprechend und würdest sie gerne mit deinem Partner erkunden.</li>
            <li><strong>Nicht interessiert:</strong> Diese Fantasie ist nichts für dich.</li>
            <li><strong>Bedingt interessiert:</strong> Du könntest unter bestimmten Bedingungen an dieser Fantasie interessiert sein.</li>
          </ul>
          
          <h3 className="text-lg font-semibold">Datenschutz und Sicherheit</h3>
          <p>
            Fantasy Shared Hearts speichert alle deine Daten lokal auf deinem Gerät. Keine Daten werden an Server gesendet.
            Der geteilte Code ist verschlüsselt, um deine Privatsphäre zu schützen.
          </p>
        </CardContent>
      </Card>
      
      <div className="flex justify-center">
        <Button onClick={onClose}>Zurück zur Übersicht</Button>
      </div>
    </div>
  );
};

export default InfoPage;
