import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent  {
  public characters = [
    {name: "Fritzi der Frosch",description: "xxx", image: "fritzi"},
    {name: "Schnecke Schnickelschnak",description: "xxx", image: "schnecke"},
    {name: "Lilly die Libelle",description: "xxx", image: "lilly"},
    {name: "Igor der Igel",description: "xxx", image: "igor"},
    {name: "Gisela das Glühwürmchen",description: "xxx", image: "gluehwuermchen"},
    {name: "Madame Scharmilla",description: "xxx", image: "schmetterling"},
    {name: "Schorsch und Schantal",description: "xxx", image: "storch"},
    {name: "Amadeus",description: "xxx", image: "amadeus"},
  ]
}
