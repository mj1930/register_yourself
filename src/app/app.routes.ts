import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CreateformComponent } from './createform/createform.component';
import { InputComponentComponent } from './input-component/input-component.component';

export const appRoutes : Routes = [
    {
        path: '',
        component: CreateformComponent
    },
    {
        path: 'preview',
        component: InputComponentComponent
    }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: false});