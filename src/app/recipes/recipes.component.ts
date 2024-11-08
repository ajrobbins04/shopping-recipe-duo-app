import { Component, OnInit, Injectable } from '@angular/core';
import { RecipeService } from './recipe.service';

@Injectable()

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})

export class RecipesComponent implements OnInit{
  
  constructor() {
  }

  ngOnInit() { 

  }
}
