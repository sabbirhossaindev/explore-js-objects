function clickHandler(){
    console.log('inside click handler', this);
}
document.getElementById('btn-click2').addEventListener('click', function(){
    console.log(this);
})

// ==> sadaron vaba kno akta object er knoo akta method er vitora this bolta oi object ka bujay...
// ==> regular method er modda this oi buject ka bujaba kinu arrow function er modda oi taka bujba na o arak level a upora giya window ka dakaba....

// const obj = { a: 1, b: 7, c: 3, length: 2 };
// console.log(Object.keys(obj).length);

// const obj1 = { module: 35, video: 2 };
// const obj2 = { module: 35, video: 2 };
// console.log(obj1 === obj2);

// const getGirlFriend = (name = "ca") => "name";
// console.log(getGirlFriend());