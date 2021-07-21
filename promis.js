// const p = new Promise((res, rej) => {
// 	setTimeout(() => {
// 		res("ok");
// 	}, 10000);
// });

// const a = async () => {
// 	p.then((res) => console.log(res));
// 	console.log("guy omo");
// };

// a();

// const sex = (num) => {
// 	return new Promise((res, rej) => {
// 		res(num ** 2);
// 	});
// };
// const sex2 = (num) => {
// 	return new Promise((res, rej) => {
// 		res(num ** 3);
// 	});
// };
// const sex3 = (num) => {
// 	return new Promise((res, rej) => {
// 		setTimeout(() => {
// 			res(num ** 4);
// 		}, 3000);
// 	});
// };

// Promise.all([sex(3), sex2(3), sex3(3)]).then((res) => console.log(res));
// // [9,27,81]

// const map2 = (arr, cb) => {
// 	arr2 = [];
// 	arr.forEach((el) => {
// 		arr2.push(cb(el));
// 	});
// 	return arr2;
// };
// const a = map2([1, 2, 3, 4], (el) => el ** 2);
// console.log(a);

// const arr = [1, 2, 3, 4, 5].filter((el) => el ** 2);
// console.log(arr);

function a() {
	console.log(this);
	// console.log(a);
}
a();

const arrow = () => {
	console.log(this);
};
arrow();
