import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodegasComponent } from './Components/bodegas/bodegas.component';
import { CategoriasComponent } from './Components/categorias/categorias.component';
import { ProductosComponent } from './Components/productos/productos.component';
import { HomeComponent } from './Components/home/home.component';
import { UsuariosComponent } from './Components/usuarios/usuarios.component';
import {  InicioSesionComponent} from './Components/inicio-sesion/inicio-sesion.component';
import { Page404Component } from './Components/page404/page404.component';



const routes: Routes = [
{path: '', redirectTo:'/home', pathMatch:'full'},
{path:'home', component:HomeComponent},
{path:'Bodegas', component:BodegasComponent},
{path:'Categorias/:nombreB', component:CategoriasComponent},
{path:'Productos', component:ProductosComponent},
{path:'Usuarios', component:UsuariosComponent},
{path:'InicioSesion', component:InicioSesionComponent},
{path:'**', component:Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
