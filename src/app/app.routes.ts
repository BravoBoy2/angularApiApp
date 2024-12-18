import { Routes } from '@angular/router'; 
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';


export const routes: Routes = [
    // {path: '', component: HomeComponent},
    // {path : 'register', component: RegisterComponent},
    // {path : 'login', component: LoginComponent},
        {path: '', component: HomeComponent, title: 'Home'},
        {path :'register', component: RegisterComponent, title : 'Register'},
        {path : 'login', component: LoginComponent},

    //route with wildcard
        {path: '**', component : NotFoundComponent}
];
