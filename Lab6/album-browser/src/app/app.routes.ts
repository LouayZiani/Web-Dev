import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Albums } from './albums/albums';
import { AlbumDetail } from './album-detail/album-detail';
import { AlbumPhotos } from './album-photos/album-photos';

export const routes: Routes = [
    //path: which URL matches which component
    {
        path: '',
        redirectTo: 'home', // pcq c le landing page/default (URL vide)
        title: 'Home Page',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: Home,
    },

    {
        path: 'about',
        component: About,
    },
    {
        path: 'albums',
        component: Albums,
    },
    {
        path: 'albums/:id',
        component: AlbumDetail
    },
    {
        path: 'albums/:id/photos',
        component: AlbumPhotos
    },

    {path: '**', redirectTo: 'home'} // any non defined route out there, redirection vers home 
];
