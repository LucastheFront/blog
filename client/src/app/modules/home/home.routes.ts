import { Routes } from '@angular/router';
import { HomeLayout } from './layout/home.layout';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { LatestPostsPage } from './pages/latest-posts/latest-posts.page';

export const HOME_ROUTES: Routes = [
    {
        path: '',
        component: HomeLayout,
        children: [
            {
                path: '',
                redirectTo: 'blog',
                pathMatch: 'full'
            },
            {
                path: 'blog',
                component: LatestPostsPage
            },
            {
                path: 'blog/:id',
                component: PostDetailComponent
            }
        ]
    }
];
