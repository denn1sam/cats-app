import { Component, OnInit } from '@angular/core';
import { CatsService } from '../cats-service/cats.service';

import { Cat } from '../models';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements OnInit {
  cats: Cat[];

  constructor(private readonly catsService: CatsService) { }

  ngOnInit() {
    this.catsService.getCats().subscribe((cats) => {
      this.cats = cats;
    });
  }

}
