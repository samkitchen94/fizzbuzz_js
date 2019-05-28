describe('Fizzbuzz', function() {

  it("should print fizz when divisible by 3", function() {
    expect(fizzbuzz(3)).toEqual("Fizz");
  });

  it("should print the number when not divisible by 3 or 5", function(){
    expect(fizzbuzz(1)).toEqual(1);
  });

  it("should print buzz when divisible by 5", function() {
    expect(fizzbuzz(5)).toEqual("Buzz");
  });

  it("should print fizzbuzz when divisible by 5 & 3", function() {
    expect(fizzbuzz(15)).toEqual("FizzBuzz");
  });

  it("should return 0 when given 0", function() {
    expect(fizzbuzz(0)).toEqual(0);
  });
});
