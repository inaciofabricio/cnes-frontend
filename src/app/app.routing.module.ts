import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { ImportarComponent } from './importar/importar.component';
import { EstabelecimentoComponent } from './estabelecimento/estabelecimento.component';

const appRoutes: Routes = [
    { path: '', component: MenuComponent },
    { path: 'importar-dados', component: ImportarComponent },
    { path: 'estabelecimentos', component: EstabelecimentoComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: false })],
    exports: [RouterModule]
})
export class AppRoutingModule {

}