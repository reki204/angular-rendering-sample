import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
