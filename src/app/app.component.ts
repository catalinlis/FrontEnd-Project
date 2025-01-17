import { Component, ViewChild } from '@angular/core';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenav, MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";
import { MatButtonModule } from "@angular/material/button";
import { FirstDesignComponent } from "./designs/first-design/first-design.component";
import { FirstStyleComponent } from './designs/first-style/first-style.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    FirstDesignComponent,
    FirstStyleComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
