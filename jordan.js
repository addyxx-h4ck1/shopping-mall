const responce = fetch ('products.json')
.then(dataBack =>{
    return dataBack.json();
})
.then(datajson =>{
    const productData = datajson
   const productArray = datajson.jordan;
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
         const buttonA = document.createElement('a')
         buttonA.setAttribute('href', 'mailto:briannjosh@gmail.com')
         buttonA.textContent = (`Buy  `)
        
         button.appendChild(buttonA)

         main.appendChild(image)
         main.appendChild(title)
         main.appendChild(price)
         main.appendChild(productID)
         main.appendChild(button)
         flashSales.appendChild(main)
    
    })
})