const response = fetch ('reviews.json')
.then(response =>{
    return response.json()
})
.then(datajson =>{
    const dataArray = datajson.reviews;
    let random = Math.floor(Math.random()*dataArray.length)
   
    let customer = dataArray[random];
    
    const DOM = document.querySelector('.reviews')
    console.log(DOM);

    const reviewCard = document.createElement('div')
    reviewCard.setAttribute('class', 'review-card')

    const reviewImage = document.createElement('img')
    reviewImage.setAttribute(`src`, `${customer.image}`)

    const reviewName = document.createElement('h4')
    reviewName.textContent = (`Name : ${customer.name}`)

    const reviewMessage = document.createElement('p')
    reviewMessage.textContent = (`${customer.message}`)
    
    reviewCard.appendChild(reviewImage)
    reviewCard.appendChild(reviewName)
    reviewCard.appendChild(reviewMessage)
    DOM.appendChild(reviewCard)

    console.log(reviewCard);
    console.log(customer);


})