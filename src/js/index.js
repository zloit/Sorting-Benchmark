// Main js file
var arr = [];
window.arr = arr;
let unsortedList = document.getElementsByClassName('list-unsorted')[0];
let sortedList = document.getElementsByClassName('list-sorted')[0];
var n=100;
window.n = n;

function createList(object,n,arr) {
	object.innerHTML="";
	for (let i = 0; i < n; i++) {
		let excel = document.createElement('li');
		excel.innerHTML = arr[i];
		object.append(excel);
	}
}

function ascend(n,arr) {
	arr.length = 0;
	for (let i = 0; i < n; i++) arr.push(i)
	createList(unsortedList,n,arr);
}
window.ascend = ascend;

function backwards(n,arr) {
	arr.length = 0;
	for (let i = n; i >= 0; i--) arr.push(i)
	createList(unsortedList,n,arr);
}
window.backwards = backwards;

function random(n,arr) {
	arr.length = 0;
	for (let i = 0; i < n; i++) arr.push(Math.floor(Math.random() * 3000))
	createList(unsortedList,n,arr);
}
window.random = random;


function bubble(arr) {
	let sorted = arr.slice();
	let t1 = performance.now();
		let x = sorted.length-1;
		while (x) {
			for (let i = 0; i <= x; i++) {
				if (sorted[i] > sorted[i+1]) [sorted[i],sorted[i+1]] = [sorted[i+1],sorted[i]]
			}
			x--;
		}
	let t2 = performance.now();
	console.log(t2-t1);
	createList(sortedList,n,sorted);
}
window.bubble = bubble;

function cocktail(arr) {
	let sorted = arr.slice();
	let left = 0;
	let right = sorted.length;
	let t1 = performance.now();
	while (left<right) {
		for (let i = left; i <= right; i++) {
			if (sorted[i] > sorted[i+1]) [sorted[i],sorted[i+1]] = [sorted[i+1],sorted[i]]
		}
		right--;
		for (let i = right; i >= left; i--) {
			if (sorted[i] > sorted[i+1]) [sorted[i],sorted[i+1]] = [sorted[i+1],sorted[i]]
		}
		left++;
	}
	let t2 = performance.now();
	console.log(t2-t1);
	createList(sortedList,n,sorted);
}
window.cocktail = cocktail;

function insert(arr) {
	let result = [];
	let t1 = performance.now();
	for (var i = 0; i < arr.length; i++) {
		result[i] = arr[i];
		let k = i;
		while (result[k]<result[k-1]) {
			[result[k],result[k-1]] = [result[k-1],result[k]];
			k--;
		}
	}
	let t2 = performance.now();
	console.log(t2-t1);
	createList(sortedList,n,result);
}
window.insert = insert;

function Selection(arr) {
	let sorted = arr.slice();
	let t1 = performance.now();
	let n = sorted.length;
		for (let i = 0; i < n-1; i++) {
			let min = i;
			for (let j = i; j < n-1; j++) {
				if (sorted[j]<sorted[min]) {
					min = j;
				}
			}
			[sorted[i],sorted[min]] = [sorted[min],sorted[i]];
			
		}
	let t2 = performance.now();
	console.log(t2-t1);
	createList(sortedList,n,sorted);
}
window.Selection = Selection;