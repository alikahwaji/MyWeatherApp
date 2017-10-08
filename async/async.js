console.log('Starting app')

setTimeout(() => {
    console.log('Inside of call back')
},2000)

setTimeout(() => {
    console.log('2nd time out')
}, 0)
console.log('Finishing app')