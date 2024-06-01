import { Observable, OperatorFunction, Subscriber, filter, map, of, pipe } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// const stream$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9);

// // const filterEven = filter<number>(value => value % 2 === 0);
// // const double = map<number, number>(value => value * 2);

// // const filterEvenChildStream$ = filterEven(stream$);
// // const doubleChildStream$ = double(filterEvenChildStream$);

// // doubleChildStream$.subscribe(terminalLog);

// // const result$ = map<number, number>(value => value * 2)(
// //     filter<number>(value => value % 2 === 0)(
// //         stream$
// //     )
// // )

// // function pipe(
// //     ...operatorsFunctions: Array<OperatorFunction<any, any>>
// // ): OperatorFunction<any, any> {
// //     return (source$: Observable<any>): Observable<any> => operatorsFunctions.reduce(
// //         (parentStream$, operatorFunction) => operatorFunction(parentStream$),
// //         source$,
// //     )
// // }

// // const resultOperatorFunction = pipe(
// //     filter<number>(value => value % 2 === 0),
// //     map<number, number>(value => value * 2),
// // );

// // resultOperatorFunction(stream$).subscribe(terminalLog);

// // pipe(
// //     filter<number>(value => value % 2 === 0),
// //     map<number, number>(value => value * 2),
// // )(stream$);

// // stream$.pipe(
// //     filter<number>(value => value % 2 === 0),
// //     map<number, number>(value => value * 2),
// // ).subscribe(terminalLog);

// // stream$.pipe(
// //     map<number, number>(value => value * 2),
// //     filter<number>(value => value % 2 === 0),
// // ).subscribe(terminalLog);
