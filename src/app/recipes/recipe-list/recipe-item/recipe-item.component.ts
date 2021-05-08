import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipes/recipe.service';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }
}
