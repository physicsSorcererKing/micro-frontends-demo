import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IconsModule } from './icon.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IconsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app-main-angular';
}
