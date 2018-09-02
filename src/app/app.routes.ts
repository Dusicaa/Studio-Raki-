import { Routes, CanActivate } from '@angular/router';
import { 
  AuthGuardService as AuthGuard 
} from './services/auth/auth-guard.service';
import { AppComponent } from './app.component';
import { PostoviComponent } from './postovi/postovi.component';
import { ProductComponent } from './products/product.component';



export const ROUTES: Routes = [
  { path: '', component: AppComponent },
  { 
    path: 'postovi/show',
    component: PostoviComponent,
    canActivate: [AuthGuard] 
  },
  { 
    path: 'product/delete',
    component: ProductComponent,
    canActivate: [AuthGuard] 
  },
  { 
    path: 'product/edit',
    component: ProductComponent,
    canActivate: [AuthGuard] 
  },
  { 
    path: 'product/add',
    component: ProductComponent,
    canActivate: [AuthGuard] 
  },
  { path: '**', redirectTo: '' }
];