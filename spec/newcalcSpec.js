describe("Extra calculator functions", function() {
    describe("Area function", function() {
        it("should return 314.16 for a circle with radius 10", function() {
            expect(areaOfCircle(10)).toBe(314.16);
        });
        it("should return 78.54 for a circle with radius 5", function() {
            expect(areaOfCircle(5)).toBe(78.54);
        });
        it("should return an error if area of circle is a string", function() {
            expect(areaOfCircle("funky")).toBe("Error")
        });
        it("should return an Error if the area of circle is a negative number", function() {
            expect(areaOfCircle(-5)).toBe("Error")
        });
    });
    
    describe("Square Root function", function() {
        it("should return 3 for square root of 9", function() {
            expect(squareRoot(9)).toBe(3);
        });
        it("should return error if a string is used instead of a value", function() {
            expect(squareRoot("Hello")).toBe("Error");
        });
        it("should return 9 for the square root of 81", function() {
            expect(squareRoot(81)).toBe(9)
        })
    });
    
    describe("Square function", function() {
        it("should return 9 as the square of 3", function() {
            expect(squareMe(3)).toBe(9);
        });
        it("should return the square of any number entered for n", function() {
            expect(squareMe(8)).toBe(64);
        });
        it("should return error if a string is used instead of a value", function() {
            expect(squareMe("Hello")).toBe("Error");
        });
        it("should the value returned not be a whole number, return warning", function() {
            expect(squareMe(10.5)).toBe("Whole value only")
        })
    });
    describe("Cube function", function() {
        it("should return 27 as the cube of 3", function() {
            expect(cubeMe(3)).toBe(27);
        });
    });

});