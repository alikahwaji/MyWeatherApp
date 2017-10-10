var getUser = (id, callback) => {
     var user = {
         id: id,
         name: 'Mike'
     }
     setTimeout(() => {
        callback(user)
     }, 3000)
}

getUser(10, (userObj) => {
    console.log(userObj)
})