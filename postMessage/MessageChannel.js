const channel = new MessageChannel()
const { port1, port2 } = channel;

const startTime = performance.now();

let count = 0;

port2.onmessage = function(e) {
    console.log(e.data)
    count ++
    if (count < 2) {
        Promise.resolve().then(() => {
            console.log('promise:', count)
        })
        setTimeout(() => {
            console.log('timer:', count)
        })
        port1.postMessage(count)
    }
}
const callback = () => {
    console.log('raf:', count)
    console.log('raf time:', performance.now() - startTime)
    if (count < 2) {
        requestAnimationFrame(callback)
    }
}
requestAnimationFrame(callback)

port1.postMessage(count)
