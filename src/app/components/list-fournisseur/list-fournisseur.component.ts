import { Component } from '@angular/core';
import { Fournisseur } from '../../models/fournisseur';

@Component({
  selector: 'app-list-fournisseur',
  templateUrl: './list-fournisseur.component.html',
  styleUrls: ['./list-fournisseur.component.scss']
})
export class ListFournisseurComponent {
  list: Fournisseur[] = [{ idFournisseur: 1, code: "1ABC4522", libelle: "hp" },
  { idFournisseur: 2, code: "2ABC4522", libelle: "dell" },
  { idFournisseur: 3, code: "3ABC4522", libelle: "lenovo" },
  { idFournisseur: 400, code: "40ABC452", libelle: "asus" }]

  isIdValid(idFournisseur:number): boolean {
    return idFournisseur<=100;
  }
  getColor(code:string): boolean {
    return code.includes('2A')
  }
  deleteFournisseur(idToRemove:number){
    this.list= this.list.filter(Fournisseur => Fournisseur.idFournisseur != idToRemove) 
}
}
