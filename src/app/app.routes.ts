import { CanMatchFn, RedirectCommand, Router, Routes } from '@angular/router';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import {
  resolverUserName,
  resolveTitle,
  UserTasksComponent,
} from './users/user-tasks/user-tasks.component';
import { routes as userRoutes } from './users/users.routes';
import { inject } from '@angular/core';

// const dummyCanMatch: CanMatchFn = (route, segments) => {
//   const router =inject(Router);
//   const shouldGetAccess = Math.random();
//   if(shouldGetAccess<0.5) {return true}

//   return new RedirectCommand(router.parseUrl('/unauthorized'));
// };

export const routes: Routes = [
  {
    path: '', // როდესაც URL ცარიელია ანუ <your-domain>/, ეს არის მთავარი გვერდი (home)
    component: NoTaskComponent, // რომელი კომპონენტი გამოჩნდეს ამ მისამართზე
    //redirectTo: '/users/u1',
    //pathMatch: 'full',
    title: 'no task selected', // დოკუმენტის სათაური ბრაუზერის tab-ში
  },
  {
    path: 'users/:userId', // დინამიკური path პარამეტრით, მაგ: <your-domain>/users/u1
    component: UserTasksComponent, // ეს კომპონენტი გამოჩნდება ამ მისამართზე
    children: userRoutes, // შიდა ქვე-რუტები ანუ nested routes
    // canMatch: [dummyCanMatch],
    data: {
      message: 'hello!', // დამატებითი მონაცემი, რომლის წაკითხვაც შეიძლება როუტისგან
    },
    resolve: {
      userName: resolverUserName, // როუტის ჩატვირთვამდე გამოთვლილი მონაცემი (resolver) ცვალებადია
    },
    title: resolveTitle, // სახელი მიენიჭება დინამიურად
  },
  {
    path: '**', // ნებისმიერი მისამართი რაც ზემოთ არ დაემთხვა (404 ან fallback page)
    component: NoTaskComponent, // საჩვენებელი კომპონენტი fallback-ზე
  },
];
