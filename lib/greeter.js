exports.sayHello = (name) => {
  name = name && name.trim();
  if(name) return `Hello, ${name}...`;
  else return "Hello, world!"};