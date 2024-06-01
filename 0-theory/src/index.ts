import { AsyncSubject, BehaviorSubject, EMPTY, NEVER, Observable, ReplaySubject, Subject, Subscriber, Subscription, asapScheduler, asyncScheduler, catchError, from, interval, map, mergeAll, mergeMap, observeOn, of, retry, scheduled, share, startWith, subscribeOn, tap, throwError, timer } from 'rxjs';
import '../../assets/css/style.css';
import { terminalLog } from '../../utils/log-in-terminal';

console.log('Start');

// from(Array.from({length: 10}, (_, index) => index)).subscribe(console.log);

// scheduled(Array.from({length: 10}, (_, index) => index), asyncScheduler).subscribe(console.log);
// scheduled(Array.from({length: 10}, (_, index) => index), asapScheduler).subscribe(console.log);

// interval(0).subscribe(console.log);

from(Array.from({length: 10}, (_, index) => index))
    .pipe(
        tap(() => {
            console.log('default scheduler');
        }),
        observeOn(asyncScheduler),
        tap(() => {
            console.log('before custom scheduler');
        }),
        subscribeOn(asapScheduler),
    )
    .subscribe(value => {
        console.log(`async - ${value}`)
    })
    

of(1, 2, 3).subscribe(value => {
    console.log(`sync - ${value}`)
})

console.log('End');
