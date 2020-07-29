//Objectiev is to find the maximum number of consecutive ones in an array

let nums = [1,1,0,1,1,1]


//O(n) solution that iterates through the array and resets the count
//whenever a non-zero is encountered

let count = 0
let maxCount = 0

for (let num of nums) {
    if (num == 1) {
        count++
    } else {
        maxCount = Math.max(maxCount, count)
        count = 0
    }
}

return Math.max(count, maxCount)