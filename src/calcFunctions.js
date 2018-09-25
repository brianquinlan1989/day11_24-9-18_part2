function areaOfCircle(n) {
    if(typeof(n) !== "number") {
        return "Error";
    }
    if(n < 0) {
        return "Error";
    }
    let result = 3.1416 * (n * n);
    return Number(result.toFixed(2));
}

function squareRoot(n) {
    if(typeof(n) !== "number") {
        return "Error";
    }
    let result = Math.sqrt(n);
    return Number(result.toFixed(2));
}

function squareMe(n) {
    if (typeof(n) !== "number") {
        return "Error";
    }
    if (n % 1 > 0) {
        return "Whole value only"
    }
    let result = (n = n*n);
    return Number(result.toFixed(2));
}

function cubeMe(n) {
    let result = (n = n*n*n);
    return Number(result.toFixed(2));
}