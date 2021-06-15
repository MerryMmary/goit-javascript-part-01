function checkAge(age) {
  if (age>=18) { // Change this line
    return "You are an adult";
  }

  return "You are a minor";
}

console.log('01-checkAge(20) — ', checkAge(20));
console.log('01-checkAge(8) — ', checkAge(8));