
//submit userid//and password here
varsubmit= document.getElementById('submit_btn');
submit.onclick = function() {
    //create request object
    var request =new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange = function() {
        if(request.readyState === XMLhttpRequest.DONE){
            //take some action
            if(request.status === 200){
                alert("logged in successfully");
                
            }else if( request.status === 403){
                alert("username/password is incorrect");
            }else if( request.status === 500){
                alert("something went wrong in the server");
                
            }
        }
    }
    
    //make the request
    
    var username= document.getElementById('username').value;
    var password= document.getElementById('password').value;
    console.log(username);
    console.log(password);
    request.open('POST', 'http://aggzz.imad.hasura-app.io/fac.html', true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify({username:username, password: password}));
};