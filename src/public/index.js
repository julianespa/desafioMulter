// Mostrar productos en pantalla
let products
fetch('/api/products').then(r=>r.json()).then(json=>{
    products = json.payload
    let container = document.getElementById('product-container')
    products.forEach(product => {
        let card = document.createElement('div')
        card.setAttribute('class','product-card')
        let title = document.createElement('p')
        title.setAttribute('class','product-title')
        title.innerHTML = product.title
        let price = document.createElement('p')
        price.setAttribute('class','product-price')
        price.innerHTML = '$'+product.price
        let img = document.createElement('img')
        img.src = product.thumbnail
        card.append(title)
        card.append(price)
        card.append(img)
        container.append(card)
    });
})

// Formulario de ingreso de productos
let form = document.getElementById('productForm')
const handleSubmit = (e,form,route)=>{
    e.preventDefault()
    let formData = new FormData(form)
    fetch(route,{
        method:'POST',
        body:formData
    }).then(r=>r.json()).then(json=>console.log(json))
    form.reset()
}

form.addEventListener('submit',(e)=>handleSubmit(e,e.target,'/api/products'))