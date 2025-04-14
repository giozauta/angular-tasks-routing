import {
  Component,
  computed,
  DestroyRef,
  inject,
  input,
  OnInit,
  signal,
} from '@angular/core';

import { TaskComponent } from './task/task.component';
import { TasksService } from './tasks.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, RouterLink],
})
export class TasksComponent implements OnInit {
  userId = input.required<string>();
  //ეს შედარებით მარტივი გზაარის რომ path მოვიპოვოთ
  // order = input<'asc' | 'desc'>();
  order = signal<'asc' | 'desc'>('desc');
  private tasksService = inject(TasksService);
  private destroyRef = inject(DestroyRef);
  message = input.required<string>();

  //მოსულ მონაცემებს ვფილტრავთ აიდის მიხედვით რომ
  //სპეციალური თასქი სპეციალურ იუზერთან მივიდეს
  //პლიუს ვსორტავთ რომ იმის მიხედვით აგმოაჩინოს თუ რომლის აიდი ახალი ან ძველია
  userTasks = computed(() =>
    this.tasksService
      .allTasks()
      .filter((task) => task.userId === this.userId())
      .sort((a, b) => {
        if (this.order() === 'asc') {
          return a.id > b.id ? -1 : 1;
        } else {
          return a.id < b.id ? -1 : 1;
        }
      })
  );

  //ეს შედარებით ძველი გზაარის
  private activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    const subscribtion = this.activatedRoute.queryParams.subscribe({
      next: (params) => this.order.set(params['order']),
    });

    this.destroyRef.onDestroy(() => {
      subscribtion.unsubscribe();
    });
  }
}
