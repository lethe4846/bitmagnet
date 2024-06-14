import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { LayoutComponent } from './layout/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'bitmagnet';
  constructor(iconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    iconRegistry
      .setDefaultFontSetClass(
        'material-icons-outlined',
        'material-symbols-outlined',
      )
      .addSvgIcon(
        'magnet',
        domSanitizer.bypassSecurityTrustResourceUrl('magnet.svg'),
      )
      .addSvgIcon(
        'external-link',
        domSanitizer.bypassSecurityTrustResourceUrl('external-link.svg'),
      );
  }
}