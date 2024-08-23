import { Component, OnInit, Signal, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-pic-single',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './pic-single.component.html',
  styleUrl: './pic-single.component.css'
})
export class PicSingleComponent implements OnInit {
  public num!: Observable<number>;

  private current!:number;
  constructor(private readonly route: ActivatedRoute,
    private readonly router:Router
  ) {
    this.current=Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.route.snapshot.queryParams['barbie'])
  }

  ngOnInit(): void {
    this.num = this.route.paramMap.pipe(
      map(params => {
        console.log('new id ');
        return Number(params.get('id')) as number;
      }));
  }
  next(){
    this.current=((this.current+1)%3)+1;
    this.router.navigate(['/pics',this.current ]);
  }
}

