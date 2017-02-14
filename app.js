var events = require("events");

// var myEmitter = new events.EventEmitter();
// myEmitter.on('someEvent', msg => console.log(msg));
// myEmitter.emit('someEvent', 'Fortza CFR Emitter');


var util = require('util');

var Person = function(name) {
    this.name = name;
}


util.inherits(Person, events.EventEmitter);

var Zoro = new Person('Zoro')
var Astru = new Person('Astru')
var Petru = new Person('Petru')

let people = ['Zoro', 'Astru', 'Petru'];

people.forEach( function(person) {
    person.on('speak', function(msg) {
        console.log(person + ' said ' + msg);
    });
});


Zoro.emit('speak', 'pam pam pam');


// let mod = require('./module');

// const arr = [1,24,5,5];

// console.log(mod.counter(arr));

// console.log(mod.add(8, 2));