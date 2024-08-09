import {
  Subject, BehaviorSubject, fromEvent, combineLatest, switchMap, startWith, from, map, tap, filter, scan, debounceTime, distinctUntilChanged, timer
} from "https://cdn.skypack.dev/rxjs@7.5.7";

// Server Side request
const products = ['Красная машина', 'Красный велосипед', 'Синяя машина']

const getProducts = (searchPattern) => {
  console.log(`Server recieved the search request '${searchPattern}'`)  
  return new Promise((resolve) => 
                     setTimeout(() => resolve(
    products.filter(item =>   
      item.toLowerCase().includes(searchPattern.toLowerCase()))), 1000))
}                                                         
                                                              
// Clinet
const obs$ = new BehaviorSubject(null);
                                                           
const repeatLatestWhen = (notifier$) =>
  (inputSource) =>
    combineLatest(
      inputSource,
      notifier$ //.pipe(startWith(null))
    ).pipe(
      // tap(([sourceValue, notifierValue]) => console.log('tap', sourceValue, notifierValue)),
      map(([sourceValue, notifierValue]) => sourceValue),
    );

document.getElementById('refresh').addEventListener(
  'click',
  () => obs$.next())

fromEvent(document.getElementById('search'), 'input')
  .pipe(
    map(e => e.currentTarget.value),

    debounceTime(500),
    distinctUntilChanged(),
    tap(e => console.log('before repateLatestWhen')) ,
    repeatLatestWhen(obs$),
  tap(e => console.log('after repateLatestWhen')) ,
    switchMap(value => getProducts(value))
  )
  .subscribe(value => console.log(`Response: ${value}`))
