import {
  Component,
  computed,
  DestroyRef,
  inject,
  input,
  OnInit,
} from '@angular/core';
import { UsersService } from '../users.service';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterLink,
  RouterOutlet,
  RouterStateSnapshot,
} from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet, RouterLink],
})
export class UserTasksComponent  {
  userName = input.required<string>();
  message = input.required<string>();

  //თუ რომ მეორე ხერხით დავიჭიროთ route იდან წამოსული data 
  // private activatedRoute = inject(ActivatedRoute);
  // ngOnInit(){
  //   this.activatedRoute.data.subscribe({
  //     next:data => {
  //       console.log(data);
  //     }
  //   })
  // }

  //როცა მონაცემებს როუტერიდან გადმოვცემთ ეს ყველაფერი აღარ გვჭირდება 
  // userId = input.required<string>(); //იგივე სახელი რაც დინამიურ პარამეტრს აქვს
  // private usersService = inject(UsersService);
  // private activatedRoute = inject(ActivatedRoute);
  // private destroyRef = inject(DestroyRef);

  // ამ სერვისიტ უბრალოდ ვიღებთ იუზერების ერრაის და მოგვაქვს
  //ამ კომპონენტში და ვამოწმებთ უკვე ჩვენი იუზერი არის თუარა
  //ამ იუზერების მასივში
  // userName = computed(
  //   () => this.userService.users.find((u) => u.id === this.userId())?.name
  // );

  // ngOnInit(): void {
  //   const subscription = this.activatedRoute.paramMap.subscribe({
  //     next: (paramMap) => {
  //       this.userName =
  //         this.usersService.users.find((u) => u.id === paramMap.get('userId'))
  //           ?.name || '';
  //     },
  //   });
  //   this.destroyRef.onDestroy(() => {
  //     subscription.unsubscribe();
  //   });
  // }
}

export const resolverUserName: ResolveFn<string>= (
  activatedRoute: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot
) => {
  const usersService = inject(UsersService);
  const userName =
    usersService.users.find(
      (u) => u.id === activatedRoute.paramMap.get('userId')
    )?.name || '';
    return userName
};
