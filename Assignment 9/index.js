const divide = (a, b, next) => {
    if(b==0) {
        next(new Error("Cannot divide by zero"));
    } else {
        next(null, a/b);
    }
}

divide(5, 0, (error, res) =>{
    if(error) {
        console.log(error.message);
    } else {
        console.log(res);
    }
});