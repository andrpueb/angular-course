import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	recipes: Recipe[] = [
		new Recipe('Cositos a la salsa', 'testing', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOdJGwmFSiIh7YSdAgqyBR-aroCKwI1Y4ES__1t4t46M3WrJcc'),
		new Recipe('Empanadas de pollo', 'un nuevo testing', 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Empanadas_de_carne%2C_2006.jpg')
	];


  constructor() { }

  ngOnInit() {
  }

}
