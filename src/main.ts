import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);



// bootstrapApplication(AppComponent, {
//   providers: [
//     provideRouter(
//       [
//         {
//           path: '', //<your-domain>/ როცა home path გინდა მაშინ ცარიელს ტოვებ
//           component: NoTaskComponent,
//         },
//         {
//           path: 'users/:userId', // <your-domain>users/u1
//           component: UserTasksComponent,
//         },
//       ],
//       withComponentInputBinding()
//     ),
//   ],
// }).catch((err) => console.error(err));
