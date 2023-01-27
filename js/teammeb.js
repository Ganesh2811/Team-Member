// var userData = JSON.parse(window.localStorage.formdetails);


var userData = JSON.parse(localStorage.getItem('teamdetails'));
console.log(userData);


if(userData.length > 0){
    var str = '';
    userData.forEach(function(elem){
        // console.log(elem);
        
    str = str + '<div class="col-xl-3" >'+
    '<img src=' + elem.avatar + ' alt="userpic" title="user-pic" class="userpic">' +
    '<p class="head-1">' + 'ID:' + elem.id+ '</p>' + 
    '<p class="head-2">' + 'Name: '+elem.name + '</p>' + 
    // '<a class="head-3" href=' + elem.avatar + '>' + elem.avatar+ '</a>' + 
    '<h2 class="head-4">'+ 'Created At: ' + elem.createdAt+ '</h2>' +
    // '<button id="btn-1" class="button-1">'+ '+' + '</button>'+
    '<button id="btn-2" class="button-2">'+ '-' + '</button>'+  
    '</div>'   
    
    });
    document.querySelector('.row').innerHTML = str;
    var rmvBtn = document.getElementsByClassName('button-2');
    // console.log(rmvBtn);
    Array.from(rmvBtn).forEach(function(e,i){
        // console.log(e);
        e.addEventListener('click' , removeCard);
        function removeCard(e){
            // console.log('hello12');
            userData.splice(i,1);
            e.target.parentElement.remove();
            localStorage.setItem("teamdetails",JSON.stringify(userData));
        }
    })    
}