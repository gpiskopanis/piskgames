import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HammerModule } from "../../node_modules/@angular/platform-browser";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { IcrepoComponent } from './pages/icrepo/icrepo.component';
import { IcollabComponent } from './pages/icollab/icollab.component';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PaginationComponent } from './pagination/pagination.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ScriptHackComponent } from './scripthack/scripthack.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Dashboard_gamesComponent } from './dashboard_games/dashboard_games.component';
import { FormsModule } from '@angular/forms';
import { CreateTaskComponent } from './dashboard/create-task/create-task.component';
import { CreateGameComponent } from './dashboard_games/create-game/create-game.component';
import { PlayerComponent } from './player/player.component';
import { EditTaskComponent } from './dashboard/edit-task/edit-task.component';
import { EditGameComponent } from './dashboard_games/edit-game/edit-game.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    MenuComponent,
    IcrepoComponent,
    IcollabComponent,
    PaginationComponent,
    DashboardComponent,
    Dashboard_gamesComponent,
    CreateTaskComponent,
    CreateGameComponent,
    ScriptHackComponent,
    EditTaskComponent,
    EditGameComponent,
    PlayerComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    NgxPaginationModule,
    MatPaginatorModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    FormsModule,
    HammerModule,
    AppRoutingModule,
    MatSelectModule,
    MatInputModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
