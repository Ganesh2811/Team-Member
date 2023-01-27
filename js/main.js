var data = '';
var arrData = [];
var modData = JSON.parse(localStorage.getItem('teamdetails'));
if(modData != 0){
    modData.forEach(function(e){
        arrData.push(e);
    })
}

function customApi(){
    return new Promise(function(resolve,reject){
        let req = new XMLHttpRequest();
        req.open('GET' ,'https://teknopointstaging.com/api/mock/users.json');
        req.send();
        req.onload = function(){
            if(req.status == 200){
                resolve(req.response);
            }
            else{
                reject('No Found')
            }
        }
    })
}
document.body.addEventListener('load' , myfunc());
function myfunc(){
    customApi().then(function(val){
        data = JSON.parse(val);
        myfunc4(data);
    }).catch(function(error){
        console.log('API is not Working');
    }).finally(function(){
        console.log(("API is working good"));
    });
    // console.log(data);
    function myfunc4(data){
        newData = data.items;   
        if(newData.length > 0){
            var str = '';
            newData.forEach(function(elem){
                // console.log(elem);
                
            str = str + '<div class="col-xl-3" >'+
            '<img src=' + elem.avatar + ' alt="userpic" title="user-pic" class="userpic">' +
            '<p class="head-1">' + 'ID:' + elem.id+ '</p>' + 
            '<p class="head-2">' + 'Name: '+elem.name + '</p>' + 
            // '<a class="head-3" href=' + elem.avatar + '>' + elem.avatar+ '</a>' + 
            '<h2 class="head-4">'+ 'Created At: ' + elem.createdAt+ '</h2>' +
            '<button id="btn-1" class="button-1">'+ '+' + '</button>'+
            // '<button id="btn-2" class="button-2">'+ '-' + '</button>'+  
            '</div>'   
            
            });
            document.querySelector('.row').innerHTML = str;
            var btn11 = document.getElementsByClassName('button-1');
            // console.log(btn11);
            Array.from(btn11).forEach(function(e,i){
                // console.log(e);
                e.addEventListener('click', clickbtn);
                function clickbtn(){
                    // console.log('hello11');
                    // console.log(newData[i]);
                    arrData.push(newData[i]);
                    // console.log(arrData);

                    //   localStorage.setItem('formdetails', JSON.stringify(data));
                    localStorage.setItem('teamdetails' , JSON.stringify(arrData));
                    // console.log(90);
                }
            })
            
            
        }
    }
    
}




