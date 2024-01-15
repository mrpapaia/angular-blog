import { Component, Input, OnInit } from '@angular/core';

type BigCardData = {
  id: string;
  imgSrc: string;
  title: string;
  description: string;
};
@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'],
})
export class BigCardComponent implements OnInit {
  @Input() data!: BigCardData;

  constructor() {}

  ngOnInit(): void {}
}
