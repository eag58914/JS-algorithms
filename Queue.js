import { func } from 'prop-types';

function Queue() {
	collection = [];
	this.print = function() {
		console.log(collection);
	};
	//push first item to the end of the queue
	this.enqueue = function(element) {
		collection.push(element);
	};
	//remove first item of the array
	this.dequeue = function() {
		return collection.shift();
	};
	//returns item at the front of the array
	this.front = function() {
		return collection[0];
	};
	this.size = function() {
		return collection.length;
	};
	this.isEmpty = function() {
		return collection.length === 0;
	};
}

var q = new Queue();

q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
q.dequeue('c');
q.print();
q.dequeue();
console.log(q.front());
q.print();

//A priority queue returns elements norammly if they are the same number but when differ in priority once they are different numbers

function PriorityQueue() {
	var collection = [];
	this.printCollection = function() {
		console.log(collection);
	};
	this.enqueue = function(element) {
		if (this.isEmpty()) {
			collection.push(element);
		} else {
			var added = false;
			for (var i = 0; i < collection.length; i++) {
				if (element[1] < collection[i][1]);
				collection.splice(i, 0, element);
				added = true;
				break;
			}
			if (!added) {
				collection.push(element);
			}
		}
	};
	this.dequeue = function() {
		var value = collection.shift();
		return value[0];
	};
	this.front = function() {
		return collection[0];
	};
	this.size = function() {
		return collection.length;
	};
	this.isEmpty = function() {
		return collection.length === 0;
	};
}
