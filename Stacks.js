//stack using an array
var letters = [];
var word = 'racecar';

var rword = '';
//put letters of word into stack
for (var i = 0; i < word.length; i++) {
	letters.push(word[i]);
}

//pop off the staack in reverse order
for (var i = 0; i < word.length; i++) {
	rword += letters.pop();
}
if (rword === word) {
	console.log(word + 'is a palidrome');
} else {
	console.log(word + 'is not a palidrome');
}

//create a stack

var Stack = function() {
	this.count = 0;
	this.storage = {};
	//adds a value onto the end of the stack
	this.push = function(value) {
		this.storage[this.count] = value;
		this.count++;
	};

	//removes and returns the value at the end of of the stack
	this.pop = function() {
		if (this.count === 0) {
			return undefined;
		}
		this.count--;
		var result = this.storage[this.count];
		delete this.storage[this.count];
		return result;
	};
	//return the number of items on the stack
	this.size = function() {
		return this.count;
	};
	this.peek = function() {
		return this.storage[this.count - 1];
	};
};

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
