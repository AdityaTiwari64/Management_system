const axios = require('axios')

exports.homeRoute = (req,res)=>{
    axios.get('http://localhost:5000/api/users')
    .then(function(response){
        res.render('index',{users:response.data})
        
    })
    .catch(err=>{
        res.send(err)
    })
}

exports.addUserRoute = (req,res)=>{
        res.render('addUser')
}
exports.updateUserRoute = (req,res)=>{
    axios.get('http://localhost:5000/api/users',{params: {id:req.query.id}})
    .then(function(userData){
        console.log(userData.data)
        res.render('updateUser',{user:userData.data})
        // console.log(user)
    })
    .catch(err=>{
        res.send(err)
    })
}