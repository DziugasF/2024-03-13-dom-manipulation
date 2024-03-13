let body = document.querySelector('body')
let container = document.createElement('div')
container.classList.add('container')
body.append(container)

let grid = document.createElement('div')
grid.classList.add('grid')
container.append(grid)

let image = document.createElement('div')
image.classList.add('img')
grid.append(image)

let img = document.createElement('img')
img.setAttribute('src', 'image-product-desktop.jpg')
img.setAttribute('alt', 'perfume')
image.append(img)

let  cardContent = document.createElement('div')
cardContent.classList.add('card-content')
grid.append(cardContent)

let category = document.createElement('h6')
category.textContent = "Perfume"
category.classList.add('category')
cardContent.append(category)

let productName = document.createElement('h2')
productName.textContent = "Gabrielle Essence Eau De Parfum"
productName.classList.add('product-name')
cardContent.append(productName)

let productDescription = document.createElement('p')
productDescription.textContent = "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL."
productDescription.classList.add('product-description')
cardContent.append(productDescription)

let price = document.createElement('div')
price.classList.add('price')
cardContent.append(price)

let currentPrice = document.createElement('p')
currentPrice.textContent = "$149.99"
currentPrice.classList.add('current-price')
price.append(currentPrice)

let previousPrice = document.createElement('p')
previousPrice.textContent = "$169.99"
previousPrice.classList.add('previous-price')
price.append(previousPrice)

let cartBtn = document.createElement('button')
cartBtn.classList.add('cart-image')
price.after(cartBtn)

let buttonImage = document.createElement('img')
buttonImage.setAttribute('src', 'icon-cart.svg')
buttonImage.setAttribute('alt', 'icon-cart')
cartBtn.textContent = "Add to Cart"
cartBtn.append(buttonImage)
{/* <div class="container">
<div class="grid">
    <div class="img">
        <img src="image-product-desktop.jpg" alt="perfume">
    </div>
    <div class="card-content">
        <h6 class="category">Perfume</h6>
        <h2 class="product-name">Gabrielle Essence Eau De Parfum</h2>
        <p class="product-description">A floral, solar and voluptuous interpretation composed by Olivier Polge, 
        Perfumer-Creator for the House of CHANEL.</p>
        <div class="price">
            <p class="current-price">$149.99</p>
            <p class="previous-price">$169.99</p>
        </div>
        <button class="cart-image"><img src="icon-cart.svg" alt="icon-cart">Add to Cart</button>
    </div>
</div>
</div> */}