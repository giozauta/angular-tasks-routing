import { Routes } from '@angular/router';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import { resolverUserName, UserTasksComponent } from './users/user-tasks/user-tasks.component';
import {routes as userRoutes} from './users/users.routes'

export const routes: Routes = [
  {
    path: '', //<your-domain>/ როცა home path გინდა მაშინ ცარიელს ტოვებ
    component: NoTaskComponent,
  },
  {
    path: 'users/:userId', // <your-domain>users/u1
    component: UserTasksComponent,
    children: userRoutes,
    data:{
      message:"hello!"
    },
    resolve:{
      userName:resolverUserName
    }
  },
  {
    path: '**',
    component: NoTaskComponent,
  },
];
