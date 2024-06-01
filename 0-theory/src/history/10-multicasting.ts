import { AsyncSubject, BehaviorSubject, EMPTY, NEVER, Observable, ReplaySubject, Subject, Subscriber, Subscription, catchError, interval, map, mergeAll, mergeMap, retry, share, startWith, tap, throwError, timer } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// const stream$ = new Observable<number>(subscriber => {
//     console.log('START');

//     let count = 0;

//     const intervalId = setInterval(() => {
//         count += 1;

//         console.log('INCREMENT', count);

//         subscriber.next(count);

//         // if (count === 6) {
//         //     subscriber.complete();
//         // }
//     }, 1000);

//     return () => {
//         console.log('DESTROY');

//         clearInterval(intervalId);
//     }
// });

// const hotStream$ = stream$.pipe(
//     // share({
//     //     connector: () => new Subject()
//     //     // connector: () => new BehaviorSubject(99999)
//     //     // connector: () => new ReplaySubject()
//     //     // connector: () => new AsyncSubject()
//     // }),
//     share({
//         resetOnRefCountZero: false,
//         // resetOnComplete: ,
//         // resetOnError: ,
//     }),
// )

// let subFirst: Subscription;
// let subSecond: Subscription;

// setTimeout(() => {
//     subFirst = hotStream$.subscribe(time => {
//         terminalLog(`Subcription 1 - ${time}`);
//     });
// }, 3000)

// setTimeout(() => {
//     subSecond = hotStream$.subscribe(time => {
//         terminalLog(`Subcription 2 - ${time}`);
//     });
// }, 4000);


// setTimeout(() => {
//     subFirst.unsubscribe();
// }, 6000)

// setTimeout(() => {
//     subSecond.unsubscribe();
// }, 8000)