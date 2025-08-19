const cartBtns = document.querySelectorAll('.cart-btn');

cartBtns.forEach(cartBtn => {
    const originalCartBtn = cartBtn.innerHTML;

    cartBtn.addEventListener('mouseenter', () => {
        cartBtn.innerHTML = `
            <div class="flex items-center gap-6">
        <button onclick='decrease()' class='minus bg-red-600 border rounded-full w-6 h-6 flex justify-center items-center'>-</button>
        <span id="text-box" class='quantity'>1</span>
        <button onclick='increase()' class='plus bg-purple-600 border rounded-full w-6 h-6 flex justify-center items-center'>+</button>
      </div> `;
    });

    cartBtn.addEventListener('mouseleave', () => {
        cartBtn.innerHTML = originalCartBtn;
    });
});
const decrease=()=>{
    const itemVal = document.getElementById('text-box');
    let correntVal = parseInt(itemVal.innerText)
    if(correntVal <=0){
        itemVal.innerText = 0;
        alert('negative number is not valid')
    }
    else{
        itemVal.innerText = correntVal - 1;
        itemVal.classList.add='bg-red-500'
    }
}

const increase = () =>{
    const itemVal = document.getElementById('text-box');
    
}

