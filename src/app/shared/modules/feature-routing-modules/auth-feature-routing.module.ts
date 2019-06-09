import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// custom objects
import * as  AuthComponents from './../../../auth';

const routes: Routes = [
    {
        path: '', 
        component: AuthComponents.AuthComponent,  
        children: [
            { path: '',     redirectTo: '/auth/login', pathMatch: 'full' },
            { path: 'login', component: AuthComponents.LoginComponent },
            { path: 'signup', component: AuthComponents.SignupComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthFeatureRoutingModule { }