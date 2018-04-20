import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { SinglePostPreviewComponent } from '../components/single-post-preview/single-post-preview.component';
import { CategoryPreviewComponent } from '../components/category-preview/category-preview.component';
import { BlogSidebarComponent } from '../components/blog-sidebar/blog-sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent , SinglePostPreviewComponent , CategoryPreviewComponent , BlogSidebarComponent]
})
export class HomeModule { }
