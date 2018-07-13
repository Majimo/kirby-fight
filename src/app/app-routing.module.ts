import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { ErrorComponent } from './components/error/error.component';
import { PlayersComponent } from './components/players/players.component';

const kirbyFightRoutes: Routes = [
    { path: 'home', component: MainComponent},
    { path: 'players', component: PlayersComponent},
    { path: '', component: MainComponent},
    { path: '**', component: ErrorComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(kirbyFightRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }