// import { Observable, Subscriber, from, interval, of, timer } from 'rxjs';
// import { ajax } from 'rxjs/ajax';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// const stream$ = interval(1000);
// const stream$ = timer(0, 4000);

// const stream$ = of(1, 2, [3,4], {length: 5});
// const stream$ = from([1, 2, [3,4], {length: 5}]);
// const stream$ = from({length: 5});
// const stream$ = from(
//     fetch('https://learn.javascript.ru/courses/groups/api/participants?key=1afti6z'),
// );

// const stream$ = ajax({
//     url: `https://learn.javascript.ru/courses/groups/api/participants?key=1afti6z`,
//     method: 'GET',
//     crossDomain: true,
// });

// stream$.subscribe(value => {
//     // terminalLog(value);
//     console.log(value);
// });