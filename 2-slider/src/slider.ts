import 'bootstrap';
import 'bootstrap-slider';
import  './styles.css';
import { MonoTypeOperatorFunction, Observable, fromEvent, map, startWith, tap } from 'rxjs';

interface JQuerySliderEvent {
    value: {
        newValue: number;
    }
}

enum SliderClass {
    Good = 'good',
    Warn = 'warn',
    Bad = 'bad',
}

function colorizeSlider(jqueryElement: JQuery<HTMLElement>): MonoTypeOperatorFunction<number> {
    const element = jqueryElement.prev().get(0).querySelector('.slider-track') as HTMLElement;
    const allClasses = Object.values(SliderClass);

    return tap(value => {
        element.classList.remove(...allClasses)

        if (value < 4) {
            element.classList.add(SliderClass.Bad);

            return;
        }

        if (value <= 7) {
            element.classList.add(SliderClass.Warn);

            return;
        }

        element.classList.add(SliderClass.Good);
    });
}

export function createSlider$(sliderId: string): Observable<number> {
    const jquerySlider = $(`#${sliderId}`).slider();
    const startValue = Number(jquerySlider.val());

    return fromEvent<JQuerySliderEvent>(jquerySlider, 'change').pipe(
        tap(console.log),
        map(({value}) => value.newValue),
        startWith(startValue),
        colorizeSlider(jquerySlider),
    )
}