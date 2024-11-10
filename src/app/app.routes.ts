import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Home} from '../pages/Home/Home';
import {Login} from '../pages/Login/Login';
import {ReadingRoom} from '../pages/ReadingRoom/ReadingRoom';
import {AboutUs} from '../pages/AboutUs/AboutUs';
import {Manga} from '../pages/Manga/Manga';

export const routes: Routes = [
  {path: '', component: Home},
  {path: 'login', component: Login},
  {path: 'about-us', component: AboutUs},
  {path: 'manga/:id', component: Manga}
];

export const readingRoute: Routes = [
  {path: 'reading-room', component: ReadingRoom},
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'}), RouterModule.forRoot(readingRoute)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
