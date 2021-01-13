// const myStack = {
//     values: [],
//     push: function(newValue) {
//         this.values.unshift(newValue)
//     },
//     pop: function() {
//         return this.values.shift()
//     }
// }

// myStack.push('hi')
// myStack.push('bye')
// myStack.push('huh?')

// console.log(myStack)

// const poppedValue = myStack.pop()
// console.log(poppedValue)

// myStack.pop()
// myStack.pop()

// console.log(myStack)


const myQueue = {
    values: [],
    push: function(newValue) {
        this.values.unshift(newValue)
    },
    pop: function() {
        return this.values.pop()
    }
}

myQueue.push('huh')
myQueue.push('what')
myQueue.push('right')

console.log(myQueue)

const poppedValue = myQueue.pop()

console.log(poppedValue)
console.log(myQueue)