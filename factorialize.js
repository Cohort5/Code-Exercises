function factorialize(num) {

if (num > 1) {
  return num * factorialize(num - 1);
} //else {
  return 1;
}

factorialize(5);

num = 5
5 * factorialize(5-1)
