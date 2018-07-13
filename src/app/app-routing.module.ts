import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { ErrorComponent } from './error/error.component';

const kirbyFightRoutes: Routes = [
    { path: 'home', component: MainComponent},
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