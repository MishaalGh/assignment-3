// Names: Mishaal.G
// Date: 2024-11-24
// Class: Web and Script Programming
// Purpose: In addition to managing dynamic deletion actions on user records and handling form submissions for adding and changing user data, this script also generates feedback warnings.

// Hanles submmiting forms when new friend is added
$("#add_user").submit(function(event){
    // Display an alert message upon successful data insertion
    alert("Friend added Successfully!");
})

// Handle form submission for updating an existing user
$("#update_user").submit(function(event){
    event.preventDefault();// Prevent the default form submission behavior

    // Serialize the form data into an array
    var unindexed_array = $(this).serializeArray();
    var data = {}

    // Convert the serialized array into a key-value pair object
    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })

    // Create an AJAX request for updating the user data
    var request = {
        "url" : `http://localhost:3000/api/users/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    // Execute the AJAX request
    $.ajax(request).done(function(response){
        alert("Friend Updated Successfully!");
    })

})
// Handle delete operations on the home page
if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");// Select all delete buttons in the table
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:3000/api/users/${id}`,
            "method" : "DELETE"
        }
        // Confirm before deleting the user
        if(confirm("Are you sure you want to delete this friend?")){
            $.ajax(request).done(function(response){
                alert("Friend Deleted Successfully!");
                location.reload(); // Reload the page to reflect changes
            })
        }

    })
}
//End of program