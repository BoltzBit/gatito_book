import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { LoginComponent } from './body/login/login.component';
import { NovoUsuarioComponent } from './body/novo-usuario/novo-usuario.component';

const routes: Routes = [
    {
        path: '',
        component: BodyComponent,
        children: [
            { path: '', component: LoginComponent },
            { path: 'novo-usuario', component: NovoUsuarioComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
