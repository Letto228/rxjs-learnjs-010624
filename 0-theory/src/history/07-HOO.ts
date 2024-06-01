// import { interval, map, mergeAll, mergeMap } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// // const stream$ = interval(4000).pipe(
// //     map(() => interval(2000))
// // ).subscribe(value$ => {
// //     value$.subscribe();
// // })

// const stream$ = interval(4000).pipe(
//     // map(() => interval(2000)),
//     // mergeAll(),
//     mergeMap(parentIndex => interval(2000).pipe(
//         map(nestedIndex => `Parent: ${parentIndex}: nested ${nestedIndex}`),
//     )),
// ).subscribe(value => {
//     terminalLog(value);
// })

// ----------------------------------------------------------------------------------------------------

// stream$ = interval(8000);

// --------0--------1--------2--------3--------4---

// --------0                                               
//          --------1                                               
//                   --------2                                               
//                            --------3                                               
//                                     --------4---

// const getNestedStream = () => interval(2000);

// stream$.pipe(...Map(getNestedStream))

// ********
// mergeMap

// Держит все подписки на потоки возвращаемые из оператора до того момента,
// пока они не будут закомпличены
// ********

// --------0                                        
// 0:      --a--b--c--d--e--f--g--h--k--l--m--n--o-
//          --------1                               
// 1:               --a--b--c--d--e--f--g--h--k--l-
//                   --------2                      
// 2:                        --a--b--c--d--e--f--g-
//                            --------3             
// 3:                                 --a--b--c--d-
//                                     --------4---
// 4:                                          --a-

// *************************
// mergeMap with cuncurent 2

// Данный оператор имеет второй аргумент - `concurrent`.
// Он позволяет указать сколько одновременно потоков может держать оператор
// *************************

// --------0                                                 
// 0:      --a--b--c--d--e--f--g--h--k--l--m--n--o-
//          --------1                                               
// 1:               --a--b--c--d--e--f--g--h--k--l-
//                   --------2                                               
// 2:                                               
//                            --------3                                               
// 3:                                               
//                                     --------4---
// 4:                                               

// ***********************************************************
// mergeMap with cuncurent 2 and take(8) in nested stream

// const getNestedStream = () => interval(2000).pipe(take(8));
// ***********************************************************

// --------0                                               
// 0:      --a--b--c--d--e--f--g--h|                                               
//          --------1                                               
// 1:               --a--b--c--d--e--f--g--h|                                               
//                   --------2                                               
// 2:                              --a--b--c--d--e-                                               
//                            --------3                                               
// 3:                                       --a--b-                                               
//                                     --------4---                                               
// 4:                                                                                        

// ***********************************************************
// concatMap aka mergeMap with cuncurent 1

// const getNestedStream = () => interval(2000).pipe(take(5));

// Подписывается на след вложенный поток только в том случае, когда закомлитился предыдущий
// ***********************************************************

// --------0                                               
// 0:      --a--b--c--d--e|                                               
//          --------1                                               
// 1:                     --a--b--c--d--e|                                               
//                   --------2                                               
// 2:                                    --a--b--c-                                               
//                            --------3                                               
// 3:                                                                               
//                                     --------4---                                               
// 4:                                                                                              

// *********
// switchMap

// При создании новой подписки - производит отписку от предыдущего вложенного потока.
// Данный оператор очень удобен для http запросов.
// *********

// --------0                                               
// 0:      --a--b--c                                               
//          --------1                                               
// 1:               --a--b--c                                               
//                   --------2                                               
// 2:                        --a--b--c                                               
//                            --------3                                               
// 3:                                 --a--b--c                                               
//                                     --------4---
// 4:                                          --a-

// ***********************************************************
// exaustMap

// const getNestedStream = () => interval(2000).pipe(take(5));

// Пока вложенный поток, на который подписались, не закомплитится - пропускает значения основного потока
// ***********************************************************

// --------0                                               
// 0:      --a--b--c--d--e--f--g--h|                                               
//          --------1                                               
// 1:                                                             
//                   --------2                                               
// 2:                                               
//                            --------3                                               
// 3:                                 --a--b--c--d-
//                                     --------4---
// 4:                                               