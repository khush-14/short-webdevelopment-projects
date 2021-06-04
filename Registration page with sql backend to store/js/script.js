console.log('hello');
const form = document.getElementById('form').elements;

function verification(){
    console.log(form[0].value);
    console.log(form[1].value);
    console.log(form[2].value);
    console.log(form[3].value);
    console.log(form[4].value);
    console.log(form[5].value);
    console.log(form.length);
}
function removealert(){
    let ele= document.getElementsByName('gender');
    let val;
    ele.forEach(element => {
        if(element.checked)
        val= element.value;
    });
    let user = {
        name : form[0].value,
        rollNumber : form[1].value,
        tripname: form[2].value,
        gender:val,
        email : form[5].value,
    }
    //this will add details in sql 
    $.post('/userdetails',user,(data)=>{
        refresh();
    })
}
document.getElementById('pay').addEventListener('click',(event)=>{
    event.preventDefault();
    removealert();
    verification();
    
})
function refresh(){
    alert("successfully registered");
}