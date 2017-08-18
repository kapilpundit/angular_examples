import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

//heroes: Hero[];

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
		
	heroes: Hero[];
	
	selectedHero: Hero = {
		id : 10,
		name : "Kapil Sharma"
	};
	
	constructor(
			private router: Router,
			private heroService: HeroService
		) { }
	
	getHeroes(): void {
		this.heroService.getHeroes().then(heroes => {this.heroes = heroes});
	}
	
	ngOnInit(): void {
		this.getHeroes();
	}
	
	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}
	
	gotoDetail(): void {
		this.router.navigate(['/detail', this.selectedHero.id]);
	}
}
