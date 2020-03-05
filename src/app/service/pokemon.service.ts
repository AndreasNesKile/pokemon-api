import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const API_URL = "https://pokeapi.co/api/v2/pokemon/";

@Injectable({
  providedIn: "root"
})
export class PokemonService {
  pokemons: Object[] = [];
  numberOfPokemons: Number = 20;

  constructor(public httpClient: HttpClient) {}

  sendGetRequest() {
    this.httpClient.get(API_URL).subscribe(res => {
      this.pokemons.push(res);
    });
  }
}
