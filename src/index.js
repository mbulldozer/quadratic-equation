module.exports = function solveEquation(equation) {
    var qEquation = equation.replace(/\s+/g,'');
    var posa = qEquation.indexOf("*x^2");
    var posb = qEquation.indexOf("*x", posa+4);
    var a = +qEquation.substring(0, posa);
    var b = +qEquation.substring(posa + 4, posb);
    var c = +qEquation.substring(posb + 2);
    var discriminant = b*b - 4*a*c;
    var x1, x2;
    x1 = Math.round((-b + Math.sqrt(b*b - 4*a*c))/(2*a));
    x2 = Math.round((-b - Math.sqrt(b*b - 4*a*c))/(2*a));
    var rezalt = [x1, x2];
    return rezalt.sort((a, b) => a - b);
}
