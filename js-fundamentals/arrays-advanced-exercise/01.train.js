function train(input) {
    let wagons = input.shift().split(" ").map(Number);
    let maxCapacity = Number(input.shift());

    let result = addWagon(input, wagons, maxCapacity);
    console.log(result);
    


}
function addWagon(input, wagons, maxCapacity) {
    for (let i = 0; i < input.length; i++) {
        let element = input[i].split(" ");
        if (element[0] == "Add") {
            wagons.push(Number(element[1]));
        } else {
            for (let y = 0; y < wagons.length; y++) {
                let maxPas = (Number(element[0]) + wagons[y]);
                if (maxPas <= maxCapacity) {
                    wagons[y] = maxPas;
                    break;
                }

            }
        }

    }
    return wagons.join(" ");

}
train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);