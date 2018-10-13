function stairs(n) {

     let result = 0;
     let container = 0;


    for (let i = 0; i < n; i++) {
        if (n === (i*(i+1))/2) {
            result = i;
            return result;

        } else {

        }


    }


}

console.log(stairs(21));


// result 1, 3, 6, 10, 15, 21
