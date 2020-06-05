const Rx = require('rxjs');

// Observable: 可观察对象
const observable =  Rx.Observable.create((observer) => {
    observer.next(1)
    observer.next(2)
    setTimeout(() => {
        observer.next(3)
    })
})

// observer: 观察者
const observer = {
    next: x => console.log('Observer got a next value: ' + x),
    error: err => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
};

// 观察者(observer) 订阅 可观察对象(observable)
observable.subscribe(observer)

observable.subscribe((x) => console.log(x))



