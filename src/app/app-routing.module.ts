import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
    { path: "", component: HomeComponent },
    {
        path: "itens",
        loadChildren: () => import("./item/item-listar/item-listar.module").then(m => m.ItemListarModule),
    },
    {
        path: "itens/cadastrar",
        loadChildren: () => import("./item/item-cadastrar-editar/item-cadastrar-editar.module").then(m => m.ItemCadastrarEditarModule),
    },
    {
        path: "itens/editar/:id",
        loadChildren: () => import("./item/item-cadastrar-editar/item-cadastrar-editar.module").then(m => m.ItemCadastrarEditarModule),
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }  // Redireciona para Home em caso de rota inválida
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
