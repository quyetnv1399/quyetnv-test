import { Routes, RouterModule } from '@angular/router';
import { NineLayoutComponent } from './nine-layout/view/nine-layout.component';

const routes: Routes = [
  { path: '', redirectTo: "nine", pathMatch: "full" },
  {path: 'nine', component: NineLayoutComponent, children: [
    { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)}
  ]}
];

export const NineRoutes = RouterModule.forRoot(routes);
