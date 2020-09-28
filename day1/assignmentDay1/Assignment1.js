console.log("Removing Duplicates")

let friends = ["Sarah", "Amel", "John", "Sarah", "John"]


function removeDuplicates(friends) {
    let newFriends = []
        for (let index = 0; index < friends.length; index++) {
            if (newFriends.includes(friends[index])) {
                continue
            }else {
                newFriends.push(friends[index])
            }
        } 
        return newFriends
    }

console.log(removeDuplicates(friends))


// 


console.log("Sorting array in ascending order")

let array1 = [3, 4, 56, 7, 8, 1].sort((a, b) => a - b)


console.log(array1)


// 


console.log("Largest number in array")


let array2 = [34, 2, 65, 36, 59]

function findLargest(array2) {
    let largestSeen = array2[0]
        for (let index = 0; index < array2.length; index++) {
            if (array2[index] > largestSeen) {
                largestSeen = array2[index]
            }
        }
        return largestSeen
    }

let largestSeen = findLargest(array2)
console.log(largestSeen)


// 


console.log("Smallest number in array")


function findSmallest(array2) {
    let smallestSeen = array2[0]
        for (let index = 0; index < array2.length; index++) {
            if (array2[index] < smallestSeen) {
                smallestSeen = array2[index]
            }
        }
        return  smallestSeen
    }

let smallestSeen = findSmallest(array2)
console.log(smallestSeen)


// 


console.log("Even or odd")

let number = 5

function evenOrOdd(number) {
    if (number % 2 == 0) {
        console.log("EVEN")
    } else {
        console.log("ODD")
    }
}

evenOrOdd(number)


// 


console.log("FizzBuzz")

num = 9

function fizzBuzz(num) {
    if (num % 3 == 0 && num % 5 ==0) {
        console.log("FIZZBUZZ")
    } else if (num % 3 == 0) {
        console.log("FIZZ")
    } else if (num % 5 == 0) {
        console.log("BUZZ")
    } else {
        console.log("NOT FIZZBUZZ")
    }
}

fizzBuzz(num)


// 


console.log("Smallest number in array")

let array3 = [34, 2, 65, 36, 59]