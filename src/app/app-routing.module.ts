import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'temperature',
    loadChildren: () => import('./pages/temperature/temperature.module').then( m => m.TemperaturePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'luminosidade',
    loadChildren: () => import('./pages/luminosidade/luminosidade.module').then( m => m.LuminosidadePageModule)
  },
  {
    path: 'buzzcolor',
    loadChildren: () => import('./pages/buzzcolor/buzzcolor.module').then( m => m.BuzzcolorPageModule)
  },
  {
    path: 'umidade',
    loadChildren: () => import('./pages/umidade/umidade.module').then( m => m.UmidadePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
