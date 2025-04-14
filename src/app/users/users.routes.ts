import { Routes } from "@angular/router";
import { NewTaskComponent } from "../tasks/new-task/new-task.component";
import { TasksComponent } from "../tasks/tasks.component";

export const routes:Routes =[
    {
      path:'',
      redirectTo: 'tasks',
      pathMatch:"full"
    },
    {
      path: 'tasks', // ეს როუტი მშობლის როუტებსაც მიიღებს მაგ : users/:userId/tasks
      component: TasksComponent,
    },
    {
      path: 'tasks/new',
      component: NewTaskComponent,
    },
  ]