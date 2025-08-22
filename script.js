const cartBtns = document.querySelectorAll('.cart-btn');
const cartNumber = document.getElementById('cart-number');
const hiddenCart = document.getElementById('hidden-cart');
const removeHidden = document.getElementById('remove-hidden');

let totalCart = 0; // total items in cart

cartBtns.forEach(cartBtn => {
    const addToCart = cartBtn.querySelector('.label'); // "Add to Cart" text
    const counterDiv = document.createElement('div');
    counterDiv.className = "counter hidden flex items-center gap-6";
    counterDiv.innerHTML = `
        <button class="minus bg-red-600 border rounded-full w-6 h-6 flex justify-center items-center">-</button>
        <span class="quantity">0</span>
        <button class="plus bg-purple-600 border rounded-full w-6 h-6 flex justify-center items-center">+</button>
    `;
    cartBtn.appendChild(counterDiv);

    const quantityEl = counterDiv.querySelector('.quantity');
    let quantity = 0;

    // show counter on hover (only if quantity == 0)
    cartBtn.addEventListener('mouseenter', () => {
        if (quantity === 0) {
            addToCart.classList.add('hidden');
            counterDiv.classList.remove('hidden');
        }
    });

    // show "Add to Cart" again when leaving (only if quantity == 0)
    cartBtn.addEventListener('mouseleave', () => {
        if (quantity === 0) {
            addToCart.classList.remove('hidden');
            counterDiv.classList.add('hidden');
        }
    });

    // handle plus
    counterDiv.querySelector('.plus').addEventListener('click', () => {
        if (quantity < 5) {
            quantity++;
            totalCart++;
            quantityEl.innerText = quantity;
            cartNumber.innerText = totalCart;

            // show cart, hide empty message
            removeHidden.classList.remove('hidden');
            hiddenCart.classList.add('hidden');
        } else {
            alert('Max 5 allowed');
        }
    });

    // handle minus
    counterDiv.querySelector('.minus').addEventListener('click', () => {
        if (quantity > 0) {
            quantity--;
            totalCart--;
            quantityEl.innerText = quantity;
            cartNumber.innerText = totalCart;

            // if this product is now 0 → revert to "Add to Cart"
            if (quantity === 0) {
                addToCart.classList.remove('hidden');
                counterDiv.classList.add('hidden');
            }

            // if global cart empty → show empty message
            if (totalCart === 0) {
                removeHidden.classList.add('hidden');
                hiddenCart.classList.remove('hidden');
            }
        } else {
            alert('Cannot go below 0');
        }
    });
});
