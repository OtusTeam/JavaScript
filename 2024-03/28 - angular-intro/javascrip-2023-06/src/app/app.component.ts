import {AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {IUserService, UserService} from "./services/user.service";
import {CounterComponent} from "./counter/counter.component";
import {RoleService} from "./role.service";
import {Observable} from "rxjs";
import {fromPromise} from "rxjs/internal/observable/innerFrom";
import {AbstractUserService} from "./services/AbstractUserService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked, AfterViewInit, OnInit {
  title = 'javascrip-2023-06';

  role$: Observable<string[]> | null = null;

  @ViewChild("counter")
  counter: CounterComponent | null = null;
  isCounterVisible: boolean = true;

  constructor(public readonly userService: AbstractUserService, private roleService: RoleService) {
    this.role$ = fromPromise(this.roleService.getRoles())
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked', this.counter)
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit', this.counter)
  }

  ngOnInit(): void {
    console.log('ngOnIniut', this.counter)
  }
}
