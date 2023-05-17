import { Routes, RouterModule } from '@angular/router';
import { NineLayoutComponent } from './view/nine-layout.component';

const routes: Routes = [
  { path: '', component: NineLayoutComponent },
];

export const NineLayoutRoutes = RouterModule.forChild(routes);
