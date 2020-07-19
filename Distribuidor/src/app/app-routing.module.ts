import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodegasComponent } from './Components/bodegas/bodegas.component';
import { CategoriasComponent } from './Components/categorias/categorias.component';
import { ProductosComponent } from './Components/productos/productos.component';
import { HomeComponent } from './Components/home/home.component';
import { UsuariosComponent } from './Components/usuarios/usuarios.component';
import {  InicioSesionComponent} from './Components/inicio-sesion/inicio-sesion.component';
import { Page404Component } from './Components/page404/page404.component';
<<<<<<< HEAD
import { EliminarComponent } from './Components/eliminar/eliminar.component';
import { ActivarCuentaComponent } from './Components/activar-cuenta/activar-cuenta.component';
=======
import { CarritoComponent } from './Components/carrito/carrito.component';
>>>>>>> 48c654bbe9d1d5d71c3be8241f13c913deb76ff3



const routes: Routes = [
{path: '', redirectTo:'/home', pathMatch:'full'},
{path:'home/:correop', component:HomeComponent},
{path:'Bodegas', component:BodegasComponent},
{path:'Categorias/:nombre', component:CategoriasComponent},
{path:'Productos/:nombre/:categoria', component:ProductosComponent},
{path:'Usuarios', component:UsuariosComponent},
{path:'InicioSesion', component:InicioSesionComponent},
<<<<<<< HEAD
{path:'Eliminar' ,component:EliminarComponent},
{path:'ActivarCuenta' ,component:ActivarCuentaComponent},
=======
{path:'CarritoCompras',component:CarritoComponent},

>>>>>>> 48c654bbe9d1d5d71c3be8241f13c913deb76ff3
{path:'**', component:Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
