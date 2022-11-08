import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListarProdutosComponent } from "./pages/listar-produtos/listar-produtos.component";

const rotas: Routes = [
    {
        path: '',
        redirectTo: 'produtos',
        pathMatch: 'full'
    },
    {
        path: 'produtos',
        component: ListarProdutosComponent
    }
]

@NgModule({
    declarations:[],
    imports:[RouterModule.forRoot(rotas)],
    providers:[],
    exports:[RouterModule]
})
export class AppRoutingModule {}