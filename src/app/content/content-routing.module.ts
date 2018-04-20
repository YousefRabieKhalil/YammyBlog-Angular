import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content.component';

const routes: Routes = [{
  path: '',
  component: ContentComponent,
  children: [
    { path: '', redirectTo: 'home' },
    { path: 'home', loadChildren: './home/home.module#HomeModule' },
    { path: 'post/:slug', loadChildren: './single-post/single-post.module#SinglePostModule' },
    { path: 'contact', loadChildren: './contact/contact.module#ContactModule' }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
