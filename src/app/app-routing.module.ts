import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { IcrepoComponent } from './pages/icrepo/icrepo.component';
import { IcollabComponent } from './pages/icollab/icollab.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ScriptHackComponent } from './scripthack/scripthack.component';


const routes: Routes = [
  {path:'menu',component:MenuComponent},
  {path:'icrepo',component:IcrepoComponent},
  {path:'icollab',component:IcollabComponent},
  {path:'about',component:AboutComponent},
  {path:'',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'scripthack',component:ScriptHackComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
