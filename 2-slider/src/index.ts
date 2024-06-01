import { fromEvent, map, withLatestFrom } from 'rxjs';
import '../../assets/css/style.css';
import { createSlider$ } from './slider';
import { terminalLog } from '../../utils/log-in-terminal';

const buttonElement = document.getElementById('send-result') as HTMLElement;

fromEvent(buttonElement, 'click').pipe(
    withLatestFrom(
        createSlider$('quality'),
        createSlider$('rating'),
        createSlider$('actual'),
    ),
    map(([_clickEvent, quality, rating, actual]) => (quality + rating + actual) / 3)
).subscribe(terminalLog);
