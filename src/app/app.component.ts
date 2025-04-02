import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { RenderInfoComponent } from "./render-info/render-info.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, RenderInfoComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular-rendering-sample';
}
