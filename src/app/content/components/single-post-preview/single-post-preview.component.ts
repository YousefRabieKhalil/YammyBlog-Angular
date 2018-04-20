import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'single-post-preview',
  templateUrl: './single-post-preview.component.html',
  styleUrls: ['./single-post-preview.component.css']
})
export class SinglePostPreviewComponent implements OnInit {
  @Input('Id') Id : String;
  @Input('featured') featured : boolean;
  @Input('postDate') postDate : String;
  @Input('ByWho') ByWho : String;
  @Input('Likes') Likes : String;
  @Input('Comments') Comments : String;
  @Input('Title') Title : String;
  @Input('ImageLink') ImageLink : String;
  postData;
  constructor(private router : Router) { }

  ngOnInit() {
  }
  onTitleClicked(){
    this.postData = { id: this.Id , postDate : this.postDate , byWho : this.ByWho , likes : this.Likes , comments : this.Comments , title : this.Title , imageLink : this.ImageLink};
    this.router.navigate(['/post/postTile']);
  }

}
