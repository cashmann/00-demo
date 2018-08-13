console.log('hello from jest');

describe('Jest', ()=>{
  it('can run tests', ()=>{
    console.log('Hello from a Jest test');
  });
  describe('expect', ()=>{
    it('can check truthy-ness', ()=>{
      expect(0).toBeFalsy();
      expect(1).toBeTruthy();
      expect('').toBeFalsy();
      expect(false).toBeFalsy();

    });
  });
});