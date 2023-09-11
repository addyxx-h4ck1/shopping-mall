//
const imageResponse = fetch ('products.json')
.then(link =>{
    return link.json()
})
.then(jsonLink =>{
    const DOMsrc = document.querySelector ('.nav-images img')
    let random = Math.floor(Math.random()*jsonLink.NIKE.length)
    DOMsrc.setAttribute(`src`, `${jsonLink.NIKE[random]}`)
    console.log(DOMsrc)
})
//

const responce = fetch ('products.json')
.then(dataBack =>{
    return dataBack.json();
})
.then(datajson =>{
    const productData = datajson
   const productArray = datajson.nike;
////////////////////////////Flashsales////////////////////////////////////
    const product = productArray.map(product =>{
         const flashSales = document.getElementById('main')

         const main = document.createElement('div')
         main.setAttribute('class', 'main-card')

         const image = document.createElement('img')
         image.setAttribute(`src`, `${product.image}`)

         const title = document.createElement('h3')
         title.setAttribute('class', 'product-title')
         title.textContent = (`${product.name}`)

         const price = document.createElement('h4')
         price.setAttribute('class', 'price')
         price.textContent = (`${product.price}`)

         const productID = document.createElement('i')
         productID.textContent = (`product id = ${product.id}`)
         productID.setAttribute('class', 'product-id')

         const button = document.createElement('button')
         button.setAttribute("class", "flash-button")
        button.textContent = ('Buy Now')
         main.appendChild(image)
         main.appendChild(title)
         main.appendChild(price)
         main.appendChild(productID)
         main.appendChild(button)
         flashSales.appendChild(main)
    
    })
})
.then(action => {
    const buttonOn = document.querySelectorAll('.main-card button')
    /* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
   
    buttonOn.forEach(button =>{
        button.addEventListener('click', (e)=>{
            const imageLink = button.parentElement.children[0].src;
            const image = document.querySelector('.overlay-content img')
            image.setAttribute(`src`, `${imageLink}`)

            const title = button.parentElement.children[1].textContent;
            const titleh3 = document.querySelector('.overlay-content .title')
            titleh3.textContent = (`${title}`)

            const price = button.parentElement.children[2].textContent;
            const priceh3 = document.querySelector('.overlay-content .price')
            priceh3.textContent = (`${price}`)

            const ID = button.parentElement.children[3].textContent;
            const productID = document.querySelector('.overlay-content .P-ID')
            productID.textContent = (`${ID}`)


            console.log(ID);
            openNav();
        })
    })
})

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}