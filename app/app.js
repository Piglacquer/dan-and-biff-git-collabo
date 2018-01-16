let arrayOfObj = [
	{
		name: 'Dan',
		age: '21'
	},
	{
		name: 'Ralph',
		age: '50'
	}
]

const $arrayOfObj = [
	{
		name: 'Poodle',
		age: 2
	},
	{
		name: 'Labradoodle',
		age: 27
	}
]
// 
function multi(params) {
    const reducer = (accumulator, item) => {return accumulator*item};
    return params.reduce(reducer);
}
console.log(multi([2,3]));