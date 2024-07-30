import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { RouterOutlet } from '@angular/router';
import { DogResponse, DogService } from './dog.service';
import { PokedexComponent } from "./pokedex/pokedex.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    PokedexComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'my18app';
  loading = true;
  dogImageUrl = '';
  foods = ['grapes', 'milk', 'steak', 'chocolate', 'potatoes'];
  clickNumber = 1;

  constructor(private dogService: DogService) {}

  ngOnInit() {
    this.getDog();
  }

  onClick() {
    this.loading = true;
    this.getDog();
  }

  getDog() {
    this.dogService.getDogs().subscribe((response: DogResponse) => {
      this.dogImageUrl = response.message;
      this.loading = false;
      this.clickNumber++;
    });
  }
}
