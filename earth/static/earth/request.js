document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('#contribute').addEventListener('click',function(){
        window.location.href = `http://127.0.0.1:8000/Create-Item/${this.dataset.id}`;
    })

    document.querySelector('#finacially').addEventListener('click',function(){
        window.location.href = `http://127.0.0.1:8000/Payment-Earth-commerce/${this.dataset.id}`
    })
})