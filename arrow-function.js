var evens = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// 表达式
var odds = evens.map(v => v + 1);
var nums = evens.map((v, i) => v + i);
var pairs = evens.map(v => ({even: v, odd: v + 1}));
/*console.log(odds);
console.log(nums);
console.log(pairs);
*/


// 语句块
var fives = []
nums.forEach(v => {
	if(v % 5 === 0)
		fives.push(v);
});

//console.log(fives);


// 箭头函数中的this语法
var bob = {
	_name: "Bob",
	_friends: ["Katy", "Tom"],
	printFriens() {
		this._friends.forEach(f => 
			console.log(this._name + " konws " + f));
	}
}

bob.printFriens();