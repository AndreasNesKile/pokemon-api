import { Component, OnInit, Input } from "@angular/core";
import { PokemonService } from "../../service/pokemon.service";

@Component({
  selector: "app-pokemon-list",
  templateUrl: "./pokemon-list.component.html",
  styleUrls: ["./pokemon-list.component.scss"]
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];

  constructor(private http: PokemonService) {}

  ngOnInit(): void {
    this.http.sendGetRequest();
    this.pokemons = this.http.pokemons;
  }
}
