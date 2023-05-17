import { Routes, RouterModule } from '@angular/router';
import { NineLayoutComponent } from './nine-layout.component';

const routes: Routes = [
  { path: '', component: NineLayoutComponent },
];

export const NineLayoutRoutes = RouterModule.forChild(routes);
