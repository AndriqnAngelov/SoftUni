function solved(inputOne, inputTwo){
    for (const value of inputOne) {
        if (inputTwo.includes(value)) {
            console.log(value);
        }
    }
}
