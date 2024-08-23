import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {debounceTime, distinctUntilChanged, from, fromEvent, map, Observable, Subscription, switchMap} from "rxjs";

type Role = {
  id: number;
  name: string;
}

const getRoles = (searchPattern?: string): Promise<Role[]> =>  {
  const users: Role[] = [
    {id: 1, name: 'Владелец продукта'},
    {id: 2, name: 'Разработчик'},
    {id: 3, name: 'QA'}
  ]

  // Request to HTTP SERVER
  console.log(`send request http ${searchPattern}`);
  const response = new Promise<Role[]>(resolve => {
    resolve(searchPattern
      ? users.filter(item => item.name.includes(searchPattern))
      : users
    )
  })

  return response;
}


@Component({
  selector: 'lib-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit, OnDestroy, AfterViewInit {

  roles!: Role[]

  @ViewChild('search')
  input!: ElementRef

  subscription!: Subscription;


  constructor() {
    //this.roles$ = from(getRoles());
  }

  ngAfterViewInit(): void {
     this.subscription = fromEvent(this.input!.nativeElement, 'input')
      .pipe(
        debounceTime(300),
        map((e: any) => e.target.value),
        distinctUntilChanged(),
        switchMap(data => from(getRoles(data)))
      )
       .subscribe(roles => {
         this.roles = roles;
       })
  }

  ngOnInit(): void {
    console.log('ngOnInit', this.input);
  }

  onInput(e: any) {

    /*
    getRoles(e.target.value)
      .then(roles => {
        this.roles = roles;
      })

     */

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
