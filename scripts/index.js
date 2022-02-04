function initColorRadio() {
    const colorButtonList = document.querySelectorAll('.product-color-radio-input')
    const productColorSpan = document.querySelector('.product-color-text')

    colorButtonList.forEach(colorButton => {
        colorButton.addEventListener('click', event => {
            productColorSpan.innerHTML = 'Color: ' + event.target.value
        })
    })
}

function initQuantityInputButtons() {
    const quantityMinusButton = document.querySelector('.product-quantity-minus-button')
    const quantityPlusButton = document.querySelector('.product-quantity-plus-button')
    const quantityInput = document.querySelector('.product-quantity-input')

    quantityMinusButton.addEventListener('click', () => {
        let quantity = parseInt(quantityInput.value) - 1

        if (quantity < 0) {
            return quantityInput.value = '00'
        }

        if (quantity < 10) {
            quantityInput.value = '0' + quantity
        } else {
            quantityInput.value = quantity
        }
    })

    quantityPlusButton.addEventListener('click', () => {
        let quantity = parseInt(quantityInput.value) + 1

        if (quantity < 10) {
            quantityInput.value = '0' + quantity
        } else {
            quantityInput.value = quantity
        }
    })
}

function initMagnifyProductImage() {
    const productImageArea = document.querySelector('.product-image-area')
    const productImage = document.querySelector('.product-image')

    productImageArea.addEventListener('mousemove', event => {
        clientX = event.clientX - productImageArea.offsetLeft
        clientY = event.clientY - productImageArea.offsetTop

        mWidth = productImageArea.offsetWidth
        mHeight = productImageArea.offsetHeight

        clientX = clientX / mWidth * 100
        clientY = clientY / mHeight * 100

        productImage.style.transform = 'translate(-' + clientX + '%, -' + clientY + '%) scale(2)'
    })

    productImageArea.addEventListener('mouseleave', () => {
        productImage.style.transform = 'translate(-50%, -50%) scale(1)'
    })
}

function initComponents() {
    initColorRadio()
    initQuantityInputButtons()
    initMagnifyProductImage()
}

initComponents()