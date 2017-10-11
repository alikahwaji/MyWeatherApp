var somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Its working')
        reject('Unable to fulfill a promise')
    }, 2500)
    
})

somePromise.then((message) => {
    console.log('Success: ', message)
}, (errorMessage) => {
    console.log('Error: ', errorMessage)

})