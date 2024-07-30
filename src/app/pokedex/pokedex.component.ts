import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon.model';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.scss',
})
export class PokedexComponent implements OnInit {
  pokemonList: Pokemon[];

  fetchAllPokemonOperationsDoc = `
  query fetchAllPokemon {
    queryPokemon {
      id
      name
      captured
      imgUrl
      pokemonTypes
    }
  }
`;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    console.log('calling api');
    this.fetchAllPokemon();
  }

  fetchAllPokemon() {
    this.pokemonService
      .fetchGraphGL(this.fetchAllPokemonOperationsDoc, 'fetchAllPokemon', {})
      .subscribe((data) => {
        console.log('data: ', data);
        this.pokemonList = data.data.queryPokemon;
      });
  }
}
