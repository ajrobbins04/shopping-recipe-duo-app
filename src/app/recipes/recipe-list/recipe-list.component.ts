import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})

export class RecipeListComponent implements OnInit { 
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'For testing purposes', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];
  constructor() {}
  ngOnInit() {}
}