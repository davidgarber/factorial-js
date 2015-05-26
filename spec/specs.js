describe('factorial', function() {
  it("returns a factorial of a given number", function(){
    expect(factorial(2)).to.equal(2);
  });

  it("returns 1 if 0!", function() {
    expect(factorial(0)).to.equal(1);
  });
});
