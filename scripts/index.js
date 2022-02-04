/* Product quantity input buttons */
const quantityMinusButton = document.querySelector('.product-quantity-minus-button')
const quantityPlusButton = document.querySelector('.product-quantity-plus-button')

quantityMinusButton.addEventListener('click', e => {
    const quantityInput = document.querySelector('.product-quantity-input')

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

quantityPlusButton.addEventListener('click', e => {
    const quantityInput = document.querySelector('.product-quantity-input')

    let quantity = parseInt(quantityInput.value) + 1

    if (quantity < 10) {
        quantityInput.value = '0' + quantity
    } else {
        quantityInput.value = quantity
    }
})

/* Product color radio */
const colorButtonList = document.querySelectorAll('.product-color-radio-input')

colorButtonList.forEach (colorButton => {
    colorButton.addEventListener('click', e => {
        const productColorSpan = document.querySelector('.product-color-text')
        productColorSpan.innerHTML = 'Color: ' + e.target.value
    })
})