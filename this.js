function clickHandler(){
    console.log('inside click handler', this);
}
document.getElementById('btn-click2').addEventListener('click', function(){
    console.log(this);
})

// ==> sadaron vaba kno akta object er knoo akta method er vitora this bolta oi object ka bujay...
// ==> regular method er modda this oi buject ka bujaba kinu arrow function er modda oi taka bujba na o arak level a upora giya window ka dakaba....