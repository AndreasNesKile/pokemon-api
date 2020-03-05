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
    this.httpClient.get(API_URL).subscribe((pokemon: any) => {
      console.log(pokemon);
      this.httpClient
        .get(`https://pokeapi.co/api/v2/pokemon/${this.numberOfPokemons}`)
        .subscribe((secondRes: any) => {
          // console.log(pokemon);
          console.log(secondRes);
        });
      // this.pokemons.push(res.results);
    });
  }
}
