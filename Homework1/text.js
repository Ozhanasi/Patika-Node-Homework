const arguments = process.argv.slice(2);

function daireAlan(r){
    const PI = Math.PI;
    A = (r*r)*PI;
    if(r > 0) {
    console.log("Yarıçapı "+r+" olan dairenin alanı: "+A);
    }
}

daireAlan(arguments[0] *1);