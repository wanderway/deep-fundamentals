let arr = 'sfsfsdfsdf';

console.log(
    arr.split('').map(function(v) {
        return v + v;
    }).join('')
);