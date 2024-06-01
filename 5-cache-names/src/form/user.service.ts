import { ajax } from "rxjs/ajax";
import { User } from "./user.interface";
import { AsyncSubject, BehaviorSubject, Observable, Subject, map, share, switchMap } from "rxjs";

// const update$ = new BehaviorSubject<null>(null);

// class UserService {
//     readonly uniqueNameSequence$: Observable<string[]> = update$.pipe(
//         switchMap(() => ajax<User[]>({
//                 url: `https://learn.javascript.ru/courses/groups/api/participants?key=1afti6z`,
//                 crossDomain: true,
//                 method: 'GET'
//             }).pipe(
//                 map(({response}) => response.map(({profileName}) => profileName)),
//                 share({
//                     connector: () => new AsyncSubject(),
//                     resetOnComplete: false,
//                 }),
//             )
//         )
//     )
// }
class UserService {
    readonly uniqueNameSequence$: Observable<string[]> = ajax<User[]>({
        url: `https://learn.javascript.ru/courses/groups/api/participants?key=1afti6z`,
        crossDomain: true,
        method: 'GET'
    }).pipe(
        map(({response}) => response.map(({profileName}) => profileName)),
        share({
            connector: () => new AsyncSubject(),
            resetOnComplete: false,
        }),
    )
}

export const userService = new UserService();
