import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacaoGuard } from './autenticacao/guard/autenticacao.guard';
import { LoginGuard } from './autenticacao/guard/login.guard';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },//full informa pra tirar os espaços
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
        canLoad: [LoginGuard]
    },
    {
        path: 'animais',
        loadChildren: () => import('./animais/animais.module').then(m => m.AnimaisModule),
        canLoad: [AutenticacaoGuard]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
