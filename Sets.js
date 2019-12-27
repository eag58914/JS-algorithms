import { func } from 'prop-types';

//Sets are used for checking if something  is inside of a function

function mySet() {
	var collection = [];
	this.has = function(element) {
		return collection.indexOf(element) !== -1;
	};
	this.values = function() {
		return collection;
	};
	this.add = function(element) {
		if (!this.has(element)) {
			collection.push(element);
			return true;
		}
		return false;
	};
	this.remove = function(element) {
		if (this.has(element)) {
			index = collection.indexOf(element);
			collection.splice(index, 1);
			return true;
		}
		return false;
	};
	//not a method in es6 but a property
	this.size = function() {
		return collection.length;
	};
	//this method will return a union of  two sets and leave out duplicates
	this.union = function(otherSet) {
		var unionSet = new mySet();
		var firstSet = this.values();
		var second = otherSet.values();
		firstSet.forEach(function(e) {
			unionSet.add(e);
		});
		secondSet.forEach(function(e) {
			unionSet.add(e);
		});
		return unionSet;
	};
	//this method will return the intersection or same values of two sets as a new set
	this.intersection = function(otherSet) {
		var intersectionSet = new mySet();
		var firstSet = this.values();
		firstSet.forEach(function(e) {
			if (otherSet.has(e)) {
				intersectionSet.add(e);
			}
		});
		return intersectionSet;
	};
	//this method will return the difference of two sets(items in one set but not the other) as a new set
	this.difference = function(otherSet) {
		var differenceSet = new mySet();
		var firstSet = this.values();
		firstSet.forEach(function(e) {
			if (!otherSet.has(e)) {
				differenceSet.add(e);
			}
		});
		return differenceSets;
	};
	this.subset = function(otherSet) {
		var firstSet = this.values();
		return firstSet.every(function(value) {
			//every method will test if the elements pass the test of having the same value
			return otherSet.has(value);
		});
	};
}

var setA = new mySet();
var setB = new mySet();

setA.add('a');
setB.add('b');
setB.add('c');
setB.add('a');
setB.add('s');
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
