// show per product on cart 
function upDateOnCart(productId, price){
    const productCost = document.getElementById(productId);
    productCost.innerText = price;
    // total calculation function call 
    calculateTotal();
}
// Get per Product amoun for total calculation 
function getPerProductPrice(product){
    const price = document.getElementById(product);
    const productPrice = parseInt(price.innerText);
    return productPrice;    
}
// Total product amount calculation
function calculateTotal(){
    const bestPrice = getPerProductPrice('best-price')
    const memoryPrice = getPerProductPrice('memory-price')
    const storagePrice = getPerProductPrice('storage-price')
    const shippingPrice = getPerProductPrice('delivery-charge')
    const totalAmount = bestPrice + memoryPrice + storagePrice + shippingPrice;
    document.getElementById('total-price').innerText = totalAmount;
    document.getElementById('total-promo-price').innerText = totalAmount;
    return totalAmount;
}

// Discount calculation
function discountTotal(){
    const promoCodeInput = document.getElementById('promo-code-apply');
    const promoCode = promoCodeInput.value;
    // add promoCode and discount calculation
    if (promoCode == 'stevekaku'){
        // 20% discount on total price
        const discount = (calculateTotal() / 100) * 20;
        const grandTotalAmountText = document.getElementById('total-promo-price');
        const grandTotalAmount = parseInt(grandTotalAmountText.innerText) ;
        const promoAmount = grandTotalAmount - discount;
        grandTotalAmountText.innerText = promoAmount;
    }
}

// memory cost 
// memory 8gb
document.getElementById('btn-8gb').addEventListener('click', function(){
    upDateOnCart('memory-price', 0);
});
// memory 16gb
document.getElementById('btn-16gb').addEventListener('click', function(){
    upDateOnCart('memory-price', 180);
});

// storage cost 
// ssd 256gb
document.getElementById('btn-256gb-ssd').addEventListener('click', function(){
    upDateOnCart('storage-price', 0);
});
// ssd 512gb 
document.getElementById('btn-512gb-ssd').addEventListener('click', function(){
    upDateOnCart('storage-price', 100);
});
// ssd 1TB
document.getElementById('btn-1tb-ssd').addEventListener('click', function(){
    upDateOnCart('storage-price', 180);
});

// shipping Cost 
// regular price 
document.getElementById('btn-shipping-regular').addEventListener('click', function(){
    upDateOnCart('delivery-charge', 0);
});
// fast delivery price 
document.getElementById('btn-shipping-fast').addEventListener('click', function(){
    upDateOnCart('delivery-charge', 20);
});
    
// Promo code apply and discount 20% 
document.getElementById('btn-promo-code').addEventListener('click', function(){
   discountTotal();
})
