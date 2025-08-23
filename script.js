const cartBtns = document.querySelectorAll('.cart-btn');
const cartNumber = document.getElementById('cart-number');
const hiddenCart = document.getElementById('hidden-cart');
const removeHidden = document.getElementById('remove-hidden');
const cartItemsContainer = document.getElementById('cart-items'); // make sure this div exists in your cart section
const cartTotalEl = document.getElementById('cart-total');
const confirmedBtn = document.querySelector('.btn-confirmed');

let totalCart = 0;
let totalPrice = 0;

cartBtns.forEach(cartBtn => {
    const addToCart = cartBtn.querySelector('.label'); 
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

    // ✅ get product name & price
    const productName = cartBtn.closest(".pt-8").querySelector(".product-name").innerText;
    const productPrice = parseFloat(cartBtn.closest(".pt-8").querySelector(".price").dataset.price);

    // hover logic
    cartBtn.addEventListener('mouseenter', () => {
        if (quantity === 0) {
            addToCart.classList.add('hidden');
            counterDiv.classList.remove('hidden');
        }
    });

    cartBtn.addEventListener('mouseleave', () => {
        if (quantity === 0) {
            addToCart.classList.remove('hidden');
            counterDiv.classList.add('hidden');
        }
    });

    // plus button
    counterDiv.querySelector('.plus').addEventListener('click', () => {
        if (quantity < 5) {
            quantity++;
            totalCart++;
            totalPrice += productPrice;

            quantityEl.innerText = quantity;
            cartNumber.innerText = totalCart;

            removeHidden.classList.remove('hidden');
            hiddenCart.classList.add('hidden');
            confirmedBtn.classList.remove('hidden')

            // add or update item row
            let itemRow = document.querySelector(`#cart-item-${productName.replace(/\s+/g, '-')}`);
            
            if (!itemRow) {
                itemRow = document.createElement('p');
                itemRow.id = `cart-item-${productName.replace(/\s+/g, '-')}`;
                cartItemsContainer.appendChild(itemRow);
            }
            itemRow.textContent = `${productName} x ${quantity} = $${(quantity * productPrice).toFixed(2)}`;
            cartTotalEl.textContent = `Total: $${totalPrice.toFixed(2)}`;
        } else {
            alert('Max 5 allowed');
        }
    });

    // minus button
    counterDiv.querySelector('.minus').addEventListener('click', () => {
        if (quantity > 0) {
            quantity--;
            totalCart--;
            quantityEl.innerText = quantity;
            cartNumber.innerText = totalCart;

            let itemRow = document.querySelector(`#cart-item-${productName.replace(/\s+/g, '-')}`);
            if (quantity > 0) {
                itemRow.textContent = `${productName} x ${quantity} = $${(quantity * productPrice).toFixed(2)}`;
            } else if (itemRow) {
                itemRow.remove();
            }

            if (quantity === 0) {
                addToCart.classList.remove('hidden');
                counterDiv.classList.add('hidden');
            }
            if (totalCart === 0) {
                removeHidden.classList.add('hidden');
                hiddenCart.classList.remove('hidden');
            }
             cartTotalEl.textContent = `Total: $${totalPrice.toFixed(2)}`;
        }
    });
});
