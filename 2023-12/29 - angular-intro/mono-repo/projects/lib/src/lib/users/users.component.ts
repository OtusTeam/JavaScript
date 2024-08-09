import {Component, Input, OnInit} from '@angular/core';
import {
  catchError,
  combineLatest, connect,
  debounceTime, defaultIfEmpty, distinctUntilChanged,
  filter,
  from,
  fromEvent,
  map, merge,
  mergeMap,
  Observable,
  of,
  switchMap,
  tap, throwError
} from "rxjs";

type User = {
  login: string
}

const getUsers = (searchPattern: string): Observable<User[]> =>  {
  const users: User[] = [
    {login: 'alex'},
    {login: 'bob'},
    {login: 'alexander'}
  ]

  const response = new Promise<User[]>(resolve => {
    resolve(users.filter(item => item.login.includes(searchPattern)))
  })

  return from(response);
}

@Component({
  selector: 'lib-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users$!: Observable<User[]>;

  constructor() { }

  ngOnInit(): void {
    const searchElement = document.getElementById('search');
    this.users$ = fromEvent<InputEvent>(searchElement!, 'input')
      .pipe(
        debounceTime(300),
        map( (event: any) => event.target.value),
        distinctUntilChanged(),
        connect(shared$ =>
          merge(
            shared$.pipe(
              filter((data: any) => data == null || data.length < 3),
              map(data => [])
            ),
            shared$.pipe(
              filter((data: any) => data != null && data.length >= 3),
              switchMap(data => getUsers(data)),
              )
        ))
      )
  }

}
