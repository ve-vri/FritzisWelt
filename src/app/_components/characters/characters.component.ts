import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent  {
  public characters = [
    {name: "Fritzi der Frosch", image: "fritzi"},
    {name: "Schnecke Schnickelschnak", image: "schnecke"},
    {name: "Lilly die Libelle", image: "lilly"},
    {name: "Igor der Igel", image: "igor"},
    {name: "Gisela das Glühwürmchen", image: "gluehwuermchen"},
    {name: "Madame Scharmilla", image: "schmetterling"},
    {name: "Schorsch und Schantal", image: "storch"},
    {name: "Amadeus", image: "amadeus"},
  ]
}
