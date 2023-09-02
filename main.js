const responce = fetch ('products.json')
.then(dataBack =>{
    return dataBack.json();
})
.then(datajson =>{
    const productData = datajson
   const productArray = datajson.flashSales;
////////////////////////////Flashsales////////////////////////////////////
   const product = productArray.map(product =>{
        const flashSales = document.getElementById('flash-sales')

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

        const button = document.createElement('button')
        const buttonA = document.createElement('a')
        buttonA.setAttribute('href', 'mailto:briannjosh@gmail.com')
        buttonA.textContent = ('Buy Now')
        button.appendChild(buttonA)

        main.appendChild(image)
        main.appendChild(title)
        main.appendChild(price)
        main.appendChild(button)
        flashSales.appendChild(main)
    
   })
///////////////////////////Flashsales////////////////////////////////////
return productData;
})
.then(datajson => {
    console.log(datajson)
    const productArray = datajson.electronics;
////////////////////////////Flashsales////////////////////////////////////
       const product = productArray.map(product =>{
            const flashSales = document.getElementById('electronics')
    
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
    
            const button = document.createElement('button')
            const buttonA = document.createElement('a')
            buttonA.setAttribute('href', 'mailto:briannjosh@gmail.com')
            buttonA.textContent = ('Buy Now')
            button.appendChild(buttonA)
    
            main.appendChild(image)
            main.appendChild(title)
            main.appendChild(price)
            main.appendChild(button)
            flashSales.appendChild(main)
        
       })
///////////////////////////Flashsales////////////////////////////////////
return datajson;
})
