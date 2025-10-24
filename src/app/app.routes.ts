import { Routes } from '@angular/router';

import { Header } from './components/header/header';
import { About } from './components/about/about';
import { Interests } from './components/interests/interests';
import { Resumen } from './components/resumen/resumen';
import { Contact } from './components/contact/contact';
import { PokemonComponent } from './components/pokemon/pokemon';

export const routes: Routes = [
  { path: '', component: Header },
  { path: 'about', component: About },
  { path: 'interests', component: Interests },
  { path: 'resumen', component: Resumen },
  { path: 'pokemon', component: PokemonComponent },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
