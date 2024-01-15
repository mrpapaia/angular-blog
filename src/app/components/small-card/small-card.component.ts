import { Component, Input, OnInit } from '@angular/core';

type SmallCardData = {
  id: string;
  imgSrc: string;
  title: string;
};

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css'],
})
export class SmallCardComponent implements OnInit {
  @Input() data!: SmallCardData;
  constructor() {}

  ngOnInit(): void {}
}
