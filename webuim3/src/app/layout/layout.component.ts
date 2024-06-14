import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import {
  MatTab,
  MatTabGroup,
  MatTabLink,
  MatTabNav,
  MatTabNavPanel,
} from '@angular/material/tabs';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatTooltip } from '@angular/material/tooltip';
import { ThemeManager } from '../themes/theme-manager.service';
import { routes } from '../app.routes';
import { VersionComponent } from '../version/version.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    RouterLink,
    RouterLinkActive,
    MatTabGroup,
    MatTab,
    MatTabNavPanel,
    RouterOutlet,
    MatTabNav,
    MatTabLink,
    MatMenuTrigger,
    MatMenuItem,
    MatMenu,
    MatTooltip,
    VersionComponent,
  ],
})
export class LayoutComponent {
  rootRoutes = routes.filter((r) => r.path);
  themeManager = inject(ThemeManager);
}