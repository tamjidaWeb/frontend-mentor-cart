const cartBtns = document.querySelectorAll('.cart-btn');

cartBtns.forEach(cartBtn => {
    const addToCart = cartBtn.querySelector('.label'); // "Add to Cart" text
    const counterDiv = document.createElement('div');
    counterDiv.className = "counter hidden flex items-center gap-6";
    counterDiv.innerHTML = `
        <button onclick="minus('itemVal)" class="minus bg-red-600 border rounded-full w-6 h-6 flex justify-center items-center">-</button>
        <span class="quantity">1</span>
        <button class="plus bg-purple-600 border rounded-full w-6 h-6 flex justify-center items-center">+</button>
    `;
    cartBtn.appendChild(counterDiv);

    const quantityEl = counterDiv.querySelector('.quantity');
    const addToCartLabel = document.querySelectorAll('#addto-Cart')
    let quantity = 1;

    // show counter on hover
    cartBtn.addEventListener('mouseenter', () => {
        addToCart.classList.add('hidden');
        counterDiv.classList.remove('hidden');
        addToCartLabel.classList.add('hidden');
    
    });

    // show "Add to Cart" again when leaving (but keep quantity)
    cartBtn.addEventListener('mouseleave', () => {
        addToCart.classList.remove('hidden');
        counterDiv.classList.add('hidden');
        addToCartLabel.classList.remove('hidden')
    });

    // handle plus/minus
    counterDiv.querySelector('.plus').addEventListener('click', () => {
        const removeHidden = document.getElementById('remove-hidden');
        const hiddenCart = document.getElementById('hidden-cart');
        if (quantity < 5) {
            quantity++;
            quantityEl.innerText = quantity;
            removeHidden.classList.remove('hidden');
            hiddenCart.classList.add('hidden');
            
        } else {
            alert('Max 5 allowed');
        }
    });

    counterDiv.querySelector('.minus').addEventListener('click', () => {
        if (quantity > 0) {
            quantity--;
            quantityEl.innerText = quantity;

        } else {
            alert('Cannot go below 0');
        }
    });


    const minus = (itemPrice)=>{
        const itemVal = document.getElementById(itemPrice);
    }
});




