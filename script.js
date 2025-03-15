document.addEventListener("DOMContentLoaded", function() {
    let cart = [];
    
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function() {
            let name = this.getAttribute("data-name");
            let price = parseFloat(this.getAttribute("data-price"));

            cart.push({ name, price });
            updateCart();
        });
    });

    function updateCart() {
        let cartList = document.getElementById("cart-items");
        let totalPrice = document.getElementById("cart-total");
        let cartCount = document.getElementById("cart-count");

        cartList.innerHTML = "";
        let total = 0;

        cart.forEach((item, index) => {
            let li = document.createElement("li");
            li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartList.appendChild(li);
            total += item.price;
        });

        totalPrice.textContent = total.toFixed(2);
        cartCount.textContent = cart.length;
    }

    document.getElementById("checkout-btn").addEventListener("click", function() {
        alert("Proceeding to checkout. (Integration needed for payment)");
        cart = [];
        updateCart();
    });
});
