import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'category-preview',
  templateUrl: './category-preview.component.html',
  styleUrls: ['./category-preview.component.scss']
})
export class CategoryPreviewComponent implements OnInit {
  @Input('Title') Title : String;
  @Input('ImageLink') ImageLink :String;
  constructor() { }

  ngOnInit() {
  }

}
