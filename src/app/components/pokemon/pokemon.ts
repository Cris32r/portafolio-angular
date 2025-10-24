import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './pokemon.html',
  styleUrls: ['./pokemon.css']
})
export class PokemonComponent {
  nombre: string = '';
  pokemon: any = null;
  busco: boolean = false; // indica si ya se hizo una búsqueda

  constructor(private http: HttpClient) {}

  buscarPokemon() {
    this.busco = true; // marcamos que se hizo la búsqueda
    const url = `https://pokeapi.co/api/v2/pokemon/${this.nombre.toLowerCase()}`;
    
    this.http.get(url).subscribe({
      next: (data) => this.pokemon = data,
      error: () => this.pokemon = null
    });
  }
}
