import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataMock } from 'src/app/data/dataMock';

type ContentData = {
  id: string;
  imgSrc: string;
  title: string;
  description: string;
};

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  data: ContentData = { id: '', title: '', description: '', imgSrc: '' };

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.params.subscribe((param) => {
      this.data = dataMock[param['id']] as ContentData;
    });
  }
}
