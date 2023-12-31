import {Routes} from "@angular/router";
export const AppRoutes: Routes = [

    {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(x => x.HomeModule)
    },
    {
        path: 'books',
        loadChildren: () => import('./pages/books/books.module').then(x => x.BooksModule)
    },
    {
        path: 'recipes',
        loadChildren: () => import('./pages/recipes/recipes.module').then(x => x.RecipesModule)
    },
    {
      path: 'coding',
      loadChildren: () => import('./pages/coding/coding.module').then(x => x.CodingModule)
    },
    {
      path: 'games',
      loadChildren: () => import('./pages/games/games.module').then(x => x.GamesModule)
    },
    {
      path: 'friends',
      loadChildren: () => import('./pages/friends/friends.module').then(x => x.FriendsModule)

    },
    {
      path: 'about-me',
      loadChildren: () => import('./pages/home/about-me/about-me.module').then(x => x.AboutMeModule)
    },
    {
       path: '**',
       redirectTo: 'home',
       pathMatch: "full"
    }

];
