// import { Observable, Subscriber } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';
// import { event } from 'jquery';

// const ws = new WebSocket('ws://localhost:8081');

// ws.addEventListener('open', () => {
//     ws.send('on');
// });

// const wsMessages$ = new Observable<MessageEvent>(subscriber => {
//     console.log('START');

//     function listenerMessage(messageEvent: MessageEvent) {
//         console.log('NEW EVENT', messageEvent);

//         subscriber.next(messageEvent);
//     }

//     function listenerComplete() {
//         subscriber.complete();
//     }

//     function listenerError(errorEvent: Event) {
//         subscriber.error(errorEvent);
//     }

//     ws.addEventListener('message', listenerMessage);
//     ws.addEventListener('compete', listenerComplete);
//     ws.addEventListener('error', listenerError);

//     return () => {
//         console.log('DESTROY');

//         ws.removeEventListener('message', listenerMessage);
//         ws.removeEventListener('compete', listenerComplete);
//         ws.removeEventListener('error', listenerError);
//     }
// });

// wsMessages$.subscribe(event => {
//     terminalLog(`Subcription 1 - ${event.data}`);
// });

// setTimeout(() => {
//     wsMessages$.subscribe(event => {
//         terminalLog(`Subcription 2 - ${event.data}`);
//     });
// }, 4000)

// // const stream$ = new Observable<number>(subscriber => {
// //     console.log('START');

// //     let count = 0;

// //     const intervalId = setInterval(() => {
// //         count += 1;

// //         console.log('INCREMENT', count);

// //         subscriber.next(count);
// //     }, 1000);

// //     return () => {
// //         console.log('DESTROY');

// //         clearInterval(intervalId);
// //     }
// // });

// // stream$.subscribe(time => {
// //     terminalLog(`Subcription 1 - ${time}`);
// // });

// // setTimeout(() => {
// //     stream$.subscribe(time => {
// //         terminalLog(`Subcription 2 - ${time}`);
// //     });
// // }, 4000)
