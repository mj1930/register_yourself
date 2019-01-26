import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CreateformComponent } from './createform/createform.component';

export const appRoutes : Routes = [
    {
        path: '',
        component: CreateformComponent
    }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: false});