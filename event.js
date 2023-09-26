// define/extend an EventEmitter class
const EventEmitter = require('events');
class MyEmitter extends EventEmitter {};

// instantiate an object
const myEmitter = new MyEmitter();
// bind the 'example' event and set the function when event is emitted
myEmitter.addListener('example', () => {console.log('My first Example event fired!')});
myEmitter.on('example', () => {console.log('My second Example event fired!')});
myEmitter.on('example', () => {console.log('My third Example event fired!')});

// bind the 'sample' event and set the function when event is emitted
myEmitter.on('sample', () => {console.log('My first Sample event fired!')});
myEmitter.on('sample', () => {console.log('My second Sample event fired!')});

// count how many listeners have been bound
console.log(`EXAMPLE: The 'example' event count: ` + myEmitter.listenerCount('example'));
console.log(`SAMPLE: The 'sample' event count: ` + myEmitter.listenerCount('sample'));
// what events have been bound
console.log(`Event names: ` + myEmitter.eventNames());

// fire the 'example' event
console.log(`\nEMIT (fire) the 'example' event`);
const firstExample = () => { myEmitter.emit('example') };
firstExample();

// fire the 'sample' event
console.log(`\nEMIT (fire) the 'sample' event`);
const firstSample = () => { myEmitter.emit('sample') };
firstSample();