import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { AboutComponent } from './core/components/about/about.component';
import { ContactComponent } from './core/components/contact/contact.component';
import { FootwearComponent } from './core/components/footwear/footwear.component';
import { BagsComponent } from './core/components/bags/bags.component';
import { AccessoriesComponent } from './core/components/accessories/accessories.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'footwear', component: FootwearComponent },
  { path: 'bags', component: BagsComponent },
  { path: 'accessories', component: AccessoriesComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
