
// const stream$ = new Observable<number>(subscriber => {
//     subscriber.next(1);
//     subscriber.next(10);
//     subscriber.error(new Error('Error!'));
// });

// // stream$.subscribe({
// //     error: error => {
// //         terminalLog(error);
// //     }
// // });

// // stream$
// //     .pipe(
// //         tap({
// //             error: error => {
// //                 terminalLog(error);
// //             }
// //         }),
// //     )
// //     .subscribe();

// stream$
//     .pipe(
//         // catchError(error => interval(1000).pipe(
//         //     startWith(error),
//         // )),
//         // catchError((error, parentValue$) => parentValue$.pipe(
//         //     startWith(error),
//         // )),
//         // retry(3),
//         // retry({
//         //     count: 3,
//         //     // delay: 1000,
//         //     delay: () => timer(1000),
//         //     // delay: (error, count) => {
//         //     //     console.log(error, count);

//         //     //     return timer(count * 1000);
//         //     // },
//         // }),
//         // catchError(() => EMPTY), // |
//         // catchError(() => NEVER), // -----------------...
//         // catchError(() => throwError(() => new Error('Not error'))), // X
//         catchError(error => throwError(() => error)), // X
//     )
//     .subscribe({
//         next: terminalLog,
//         error: error => {
//             terminalLog(error);
//         }
//     });