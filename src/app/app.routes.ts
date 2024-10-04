import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Home} from '../pages/Home/Home';
import {Login} from '../pages/Login/Login';
import {ReadingRoom} from '../pages/ReadingRoom/ReadingRoom';
import {AboutUs} from '../pages/AboutUs/AboutUs';

export const routes: Routes = [
  {path: '', component: Home},
  {path: 'login', component: Login},
  {path: 'reading-room', component: ReadingRoom},
  {path: 'about-us', component: AboutUs}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
