// import { Observable, Subscriber } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// /**
//  * Promise
//  */

// // const sequence = new Promise(resolve => {
// //     let count = 0;

// //     setInterval(() => {
// //         count += 1;

// //         console.log('setInterval', count);

// //         resolve(count);
// //     }, 1000);
// // })

// // // sequence.then(value => terminalLog(value)); // 1

// // setTimeout(() => {
// //     sequence.then(value => {
// //         terminalLog(value) // 1
// //     });
// // }, 3000);

// /**
//  * Generator
//  */

// // const sequence = (function* iteratorFn() {
// //     let count = 0;

// //     while (true) {
// //         count += 1;

// //         console.log('iteratorFn', count);

// //         yield count;
// //     }
// // })()


// // setInterval(() => {
// //     terminalLog(sequence.next().value);
// // }, 1000)

// /**
//  * Observable
//  */

// // To be continued...

// const stopTime = 5;
// const errorTime = 5;

// // const stream$ = new Observable<number>((subscriber: Subscriber<number>) => {
// const stream$ = new Observable<number>(subscriber => {
//     console.log('START');

//     let count = 0;

//     const intervalId = setInterval(() => {
//         count += 1;

//         console.log('INCREMENT', count);

//         subscriber.next(count);

//         // if (count === stopTime) {
//         //     subscriber.complete();
//         // }

//         // if (count === errorTime) {
//         //     subscriber.error(new Error('time end'));
//         // }
//     }, 1000);

//     return () => {
//         console.log('DESTROY');

//         clearInterval(intervalId);
//     }
// });

// const subscription = stream$.subscribe({
//     next: time => {
//         terminalLog(time);
//     },
//     complete: () => {
//         terminalLog('Штатное завершение')
//     },
//     error: error => {
//         terminalLog(error);
//     },
// });

// setTimeout(() => {
//     console.log('До', subscription.closed);
//     subscription.unsubscribe();
//     console.log('После', subscription.closed);
// }, 5000);

// // stream$.subscribe(time => {
// //     terminalLog(time);
// // });

// // setTimeout(() => {
// //     stream$.subscribe(time => {
// //         terminalLog(time);
// //     });
// // }, 2000);
