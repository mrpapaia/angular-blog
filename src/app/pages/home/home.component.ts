import { Component, OnInit } from '@angular/core';
import { dataMock } from 'src/app/data/dataMock';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  bigCardData = {
    id: '0',
    imgSrc: 'https://placehold.co/900x500',
    title: 'What is Lorem Ipsum?',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  };

  smallCardArrayData = dataMock;

  constructor() {}

  ngOnInit(): void {}
}
