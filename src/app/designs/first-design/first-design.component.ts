import { Component, ViewChild } from '@angular/core';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenav, MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-first-design',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule
  ],
  templateUrl: './first-design.component.html',
  styleUrl: './first-design.component.css'
})
export class FirstDesignComponent {
  
}
