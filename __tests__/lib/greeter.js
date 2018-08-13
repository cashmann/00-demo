const greeter = require('../../lib/greeter');
console.log(greeter);

describe('greeter', ()=>{
  it('can say hello anonymously', ()=>{
    var greeting= greeter.sayHello();
    expect(greeting).toBe('Hello, world!');
  });
  it('can say hello to a person', ()=>{
    expect(greeter.sayHello('Bruce')).toBe('Hello, Bruce...');
  });
  it('trims whitespace', ()=>{
    expect(greeter.sayHello(' ')).toBe('Hello, world!');
  });
});