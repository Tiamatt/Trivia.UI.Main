import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// custom objects
import { MainFeatureRoutingModule } from '../feature-routing-modules/main-feature-routing.module'
import * as MainComponents from '../../../main';

const providers: any[] = [
];

const components: any[] = [
    MainComponents.MainComponent,
    MainComponents.NavComponent,
    MainComponents.HomeComponent,
    MainComponents.AboutComponent,
    MainComponents.ProfileComponent,
    MainComponents.FavoriteComponent
];

const pipes: any[] = [];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MainFeatureRoutingModule,
    ],
    declarations: components.concat(pipes),
    providers: providers
})

export class MainModule { }