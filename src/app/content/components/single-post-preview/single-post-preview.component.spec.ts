import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePostPreviewComponent } from './single-post-preview.component';

describe('SinglePostPreviewComponent', () => {
  let component: SinglePostPreviewComponent;
  let fixture: ComponentFixture<SinglePostPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePostPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePostPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
