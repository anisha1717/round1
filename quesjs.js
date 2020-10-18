var arr = [];
var length = 15;
var value = 0;
var demo = document.querySelector('#demo');
var out = document.querySelector('#out');
var inp = document.querySelector('#inp');

/* take input from user */
for (var i = 0; i < length; i++) {
    arr.push(prompt("enter a 15 number of Input"));

}
/*take input from user end*/

 /*document.write(arr); */
var sorarr = arr.sort()


/* show ouput*/
out.addEventListener('click', shock);

function shock(length, sorarr) {
    var i = 0;

    var pair = 0;

    while (i < length) {
        if (sorarr[i] == sorarr[i + 1]) {
            pair++;
            i = i + 2;
        }
        else {
            i = i + 1;
        }

    }
    value = pair;
    demo.innerHTML = value;

}

/*show output end*/

shock(length, sorarr);


/* to display a input array */
var e = "<hr/>";

for(var y=0; y<15; y++)
{
    e = e+ "index" +"[" + y +"]"+ "=" +"value is"+ arr[y] + "<br/>";
}

inp.innerHTML = e;

/* to display a input array end */