var a = 5, b = 8, h = 6;
function getPerimetr(a, b, h, r, p = 0){
    p = a+b+2*Math.sqrt(Math.pow(h,2)+Math.pow((a-b),2)/4);
    return p.toFixed(r); ;
}
console.log(getPerimetr(a, b, h, 2));