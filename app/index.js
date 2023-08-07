const tempArray = [2, 3, 6, 5 , 1];

/**
 * Used to find the missing number from the Array
 * @param tempArray - Array of numbers with one missing!
 */
findTheMissing = (tempArray) => {
    const min = Math.min(...tempArray);
    const max = Math.max(...tempArray);

    let sumOfArray = 0;
    tempArray.forEach((number) => {
        sumOfArray+= number;
    });

    const totalSum = (min + max ) * ((max - min + 1) / 2);

    return totalSum - sumOfArray;
}

console.log(findTheMissing(tempArray));

document.getElementById("result").innerHTML = findTheMissing(tempArray);

