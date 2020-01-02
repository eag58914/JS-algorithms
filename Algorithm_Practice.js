//PRACTICE #1 Symmetric Difference
function sym() {
	var args = [];
	for (var i = 0; i < arguments.length; i++) {
		//push() is used to break down the arguments object to an  array, args
		args.push(arguments[i]);
	}
	console.log(args);
	//the  symDiff function finds the symmetric difference between two sets. It is used as a callback function for  the reduce method called on args
	function symDiff(arrayOne, arrayTwo) {
		var result = [];
		//arrayOne pushes the elements to result which are present only in arrayOne as well as not already part of result
		arrayOne.forEach(function(item) {
			if (arrayTwo.indexOf(item) < 0 && result.indexOf(item) < 0) {
				result.push(item);
			}
		});
		//arrayTwo pushes the elements to result which are present only in arrayTwo as well as not already a part of the result
		arrayTwo.forEach(function(item) {
			if (arrayOne.indexOf(item) < 0 && result.indexOf(item) < 0) {
				result.push(item);
			}
		});
		return result;
	}
	return args.reduce(symDiff);
}

//Pracitce #2
//Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

function validParentheses(str) {
	if (str.length === 0) {
		return true;
	}
	if (str[0] === ')' || str[str.length - 1] === '(') {
		return false;
	} else {
		if (str[1] === ')') {
			return validParentheses(str.slice(2));
		} else {
			var index = str.indexOf(')');
			return validParentheses(str.slice(0, index - 1) + str.slice(index + 1));
		}
	}
}

//Practice #3
// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}.

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

function validBraces(braces) {
	let tracer = [];
	for (let i = 0; i < braces.length; i++) {
		if (braces[i] === '(' || braces[i] === '{' || braces[i] === '[') {
			tracer.push(braces[i]);
		} else {
			if (tracer.length === 0) return false;
			let lastValue = tracer[tracer.length - 1];
			if (
				(braces[i] === ']' && lastValue === '[') ||
				(braces[i] === '}' && lastValue === '{') ||
				(braces[i] === ')' && lastValue === '(')
			) {
				tracer.pop();
			} else {
				break;
			}
		}
	}
	return tracer.length === 0;
}

//Pig latin exercise - first word to end of the word, add ay to the end
function pigIt(str) {
	//split the word into an array
	var normalArr = str.split(' ');
	//array for the new array to  be joined
	var pigArr = [];
	//join the array to a  new word
	newWord = '';
	// loop through the array
	for (var word in normalArr) {
		//subtring returns the first letter off the array removed
		var newWord = normalArr[word].substring(1) + normalArr[word].substring(0, 1) + 'ay';
		pigArr.push(newWord);
	}
	return pigArr.join(' ');
}
