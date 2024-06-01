// import { Observable, OperatorFunction, Subscriber, filter, of } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// // function filterStreamByValue<T>(cb: (value: T) => boolean): (source$: Observable<T>) => Observable<T> {
// //     return (source$: Observable<T>): Observable<T> => new Observable<T>(subscriber => {
// //         const subscription = source$.subscribe({
// //             next: value => {
// //                 if (cb(value)) {
// //                     subscriber.next(value);
// //                 }
// //             },
// //             complete: () => {
// //                 subscriber.complete();
// //             },
// //             error: error => {
// //                 subscriber.error(error)
// //             },
// //         });

// //         // return () => {
// //         //     subscription.unsubscribe();
// //         // }
// //         // return {
// //         //     unsubscribe: () => {
// //         //         subscription.unsubscribe();
// //         //     },
// //         // };

// //         return subscription;
// //     })
// // }
// // function filterStreamByValue<T>(cb: (value: T) => boolean): (source$: Observable<T>) => Observable<T> {
// // function filterStreamByValue<T>(cb: (value: T) => boolean): OperatorFunction<T, T> {
// //     const operatorFunction: OperatorFunction<T, T> = (source$: Observable<T>): Observable<T> =>
// //         new Observable<T>(subscriber => source$.subscribe({
// //             next: value => {
// //                 if (cb(value)) {
// //                     subscriber.next(value);
// //                 }
// //             },
// //             complete: () => {
// //                 subscriber.complete();
// //             },
// //             error: error => {
// //                 subscriber.error(error)
// //             },
// //         }),
// //     );

// //     return operatorFunction;
// // }

// // function filterStreamByValue<T>(cb: (value: T) => boolean): OperatorFunction<T, T> {
// //     return (source$: Observable<T>): Observable<T> =>
// //         new Observable<T>(subscriber => source$.subscribe({
// //             next: value => {
// //                 if (cb(value)) {
// //                     subscriber.next(value);
// //                 }
// //             },
// //             complete: () => {
// //                 subscriber.complete();
// //             },
// //             error: error => {
// //                 subscriber.error(error)
// //             },
// //         }),
// //     );
// // }

// const stream$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9);
// // const filterStreamByEvenNumbers = filterStreamByValue<number>(value => value % 2 === 0);
// const filterStreamByEvenNumbers = filter<number>(value => value % 2 === 0);

// // filterStreamByEvenNumbers(stream$).subscribe(value => {
// //     terminalLog(value);
// // });
// filterStreamByEvenNumbers(stream$).subscribe(terminalLog);

// const stub: OperatorFunction<unknown, string> = (_source$: Observable<unknown>) =>
//     new Observable(subscriber => {
//         subscriber.next('Stub');
//         subscriber.complete();
//     })
