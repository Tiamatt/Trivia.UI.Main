import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// custom objects
import * as  MainComponents from './../../../main';

const routes: Routes = [
    {
        path: '', 
        component: MainComponents.MainComponent,
        children: [
            { path: '', redirectTo: '/main/home', pathMatch: 'full'},
            { path: 'home', component: MainComponents.HomeComponent },
            { path: 'about', component: MainComponents.AboutComponent },
            { path: 'profile', component: MainComponents.ProfileComponent },
            { path: 'favorite', component: MainComponents.FavoriteComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainFeatureRoutingModule { }