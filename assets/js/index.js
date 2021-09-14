$('#add_user').submit(function(event){
    alert("Data inserted Successfully")
})
// $('#update_user').submit(function(event){
//     event.preventDefault()
//     var unIndexedArray = $(this).serializeArray()
//     console.log(unIndexedArray)
//     var data = {}
//     $.map(unIndexedArray,function(n){
//         data[n['name']]=n['value']
//     })
//     console.log(data)
//     var request = {
//         'url':`http://localhost:5000/api/users/${data.id}`,
//         'method':'PUT',
//         'data':data
//     }
//     $.ajax(request).done(function(response){
//         alert("Data Updated Successfully")
//     })
// })
$('#update_user').submit(function(event){
    event.preventDefault()
  
    var unindexed_array = $(this).serializeArray();
    var data = {}
  
    console.log(unindexed_array)
  
    $.map(unindexed_array, function(n,i){
      data[n['name']] = n['value']
    })
    
    console.log(data)
  
    var request = {
      'url': `http://localhost:3232/api/users/${data.id}`,
      'method' : "PUT",
      'data' : data
    }
  
    $.ajax(request).done(function(response){
      alert("Data Updated Successfully!")
    })  
  
  })
  
// Delete Function
if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete")
    $ondelete.click(function(){
        var id  = $(this).attr(`data-id`)

        var request = {
            'url':`http://localhost:5000/api/users/${id}`,
            'method':'DELETE',
        }
        if(confirm('Do You Really Want To Delete This Contact?')){
            $.ajax(request).done(function(response){
                alert("Data Deleted Successfully")
                location.reload()
            })
        }
    })
}