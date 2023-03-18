function a(contect){
    alert(contect)
}
function con(contect) {
    return confirm(contect)
}
function p(contect, value) {
    return prompt(contect, value)
}
function id(id){
    return document.getElementById(id)
}
function c(id){
    return document.getElementById(id).innerHTML
}
function color(id){
    return document.getElementById(id).style.color
}
function bgc(id){
    return document.getElementById(id).style.backgroundColor
}
function random(a,b) {
    if (a > b) {
        // Swap a and b to ensure a is smaller.
        var c = a;
        a = b;
        b = c;
    }
    return Math.floor(Math.random() * (b - a + 1) + a);
}
function round(n){
    return Math.round(n)
}
function ceil(n) {
    return Math.fceil(n)
}
function floor(n) {
    return Math.floor(n)
}
function rep(a,b,c){
    return a.replaceAll(b,c)
}
function max(n){
    return Math.max(n)
}
function min(n) {
    return Math.min(n)
}
function prime(n) {
    if (n == 2 || n == 3) {
        return true;
    }
    // False if n is NaN, negative, is 1, or not whole.
    // And false if n is divisible by 2 or 3.
    if (isNaN(n) || n <= 1 || n % 1 !== 0 || n % 2 === 0 || n % 3 === 0) {
        return false;
    }
    // Check all the numbers of form 6k +/- 1, up to sqrt(n).
    for (var x = 6; x <= Math.sqrt(n) + 1; x += 6) {
        if (n % (x - 1) === 0 || n % (x + 1) === 0) {
            return false;
        }
    }
    return true;
}