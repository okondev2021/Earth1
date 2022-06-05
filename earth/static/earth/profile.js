async function checkuser(name){
    function clear(){
        document.querySelector('#progress').innerHTML = ""
    } 
    await fetch('/Receiver/'+`${name}`)
    .then( response => response.json())
    .then(data => {
        if(data.status === 0){
            const msg = document.querySelector('#progress')
            msg.innerHTML = `Your donation is $${data.amount}`
            setTimeout(clear,3000)
        }
        else{
            const msg = document.querySelector('#progress')
            msg.innerHTML = `${data.amount}`
            setTimeout(clear,3000)
        }
    })
}

document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('#requestform').style.display = 'none'
    document.querySelector('#make_request').addEventListener('click',function(){
        document.querySelector('#requestform').style.display = 'block'
        document.querySelector('#request_card').style.display = 'none'
    }) 

    document.querySelector('#check_request').addEventListener('click',function(){
        checkuser(this.dataset.name)
    })
})