function factorialize(num) {

var cloud = 1;

for (var i = 1; i <= num; i++) {
  cloud = cloud * i;

}
console.log(cloud)

return cloud;

}

factorialize(5);

//better solutios, 0, 1, 2
function factorialize(num) {

var cloud = 1;

for (var i = 2; i <= num; i++) {
  cloud = cloud * i;

}
console.log(cloud)

return cloud;

}

factorialize(5);