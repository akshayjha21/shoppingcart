// document.addEventListener('DOMContentLoaded', () => {

//     const products = [
//         { id: 1, name: "Product 1", price: 69.09 },
//         { id: 2, name: "Product 2", price: 10.99 },
//         { id: 3, name: "Product 3", price: 29.99 }
//     ]
//     const cart = []

//     const productlist = document.getElementById("product-list")
//     const checkoutbttn = document.getElementById("checkout-btn")
//     const cartlist = document.getElementById("cart-items")
//     const total = document.getElementById("total-price")
//     const emptycartmessage = document.getElementById("empty-cart")
//     const carttotalmsg = document.getElementById("cart-total")

//     products.forEach((product) => {
//         //creating a div

//         const productdiv = document.createElement('div')
//         productdiv.classList.add('product')
//         productdiv.innerHTML =
//             `<span>${product.name} - $${product.price.toFixed(2)}</span>
//         <button data-id=${product.id}>Add to cart </button>`



//         productlist.appendChild(productdiv);
//     });
//     productlist.addEventListener('click', (e) => {
//         if (e.target.tagName === "BUTTON") {
//             const productId = parseInt(e.target.getAttribute("data-id"))
//             const product = products.find(p => p.id === productId)
//             addtocart(product)
//             rendercartitems();
//         }
//     })
//     function addtocart(product) {
//         cart.push(product);
//         console.log(cart)
//         rendercartitems();

//     }
//     function rendercartitems() {
//         cartlist.innerHTML = ''
//         if (cart.length > 0) {

//             let totalprice = 0;
//             cart.forEach((product, item) => {
//                 totalprice += product.price;
//                 const cartitem = document.createElement('div')
//                 cartitem.classList.add('cart-item')
//                 total.textContent = `$${totalprice.toFixed(2)}`
//                 cartitem.innerHTML = `
//                <span>${product.name} - $${product.price}</span>
//                <button>Remove</button>`
//                 cartlist.appendChild(cartitem);
//                 emptycartmessage.classList.add('hidden')
//                 carttotalmsg.classList.remove('hidden')

//                 //creating a button and clickig on 
//                 cartlist.addEventListener('click', (e) => {
//                     if (e.target.tagName === "BUTTON") {
//                         const itemIndex = parseInt(e.target.getAttribute("data-id"));
//                         removefromcart(itemIndex);
//                     }
//                 })
//                 // removecartitem()
//             })
//         }
//         else {
//             emptycartmessage.classList.remove('hidden')
//             carttotalmsg.classList.add('hidden')
//         }
//     }
//     checkoutbttn.addEventListener('click', () => {
//         cart.length = 0;
//         alert("checkout succesfully")
//         rendercartitems()
//     })
//     removefromcart(Index)
//     {
//         cart.splice(Index,1);
//         rendercartitems()
//     }
// })

// document.addEventListener('DOMContentLoaded', () => {

//     const products = [
//         { id: 1, name: "Product 1", price: 69.09 },
//         { id: 2, name: "Product 2", price: 10.99 },
//         { id: 3, name: "Product 3", price: 29.99 }
//     ];
//     const cart = [];

//     const productlist = document.getElementById("product-list");
//     const checkoutbttn = document.getElementById("checkout-btn");
//     const cartlist = document.getElementById("cart-items");
//     const total = document.getElementById("total-price");
//     const emptycartmessage = document.getElementById("empty-cart");
//     const carttotalmsg = document.getElementById("cart-total");

//     // Create product list
//     products.forEach((product) => {
//         const productdiv = document.createElement('div');
//         productdiv.classList.add('product');
//         productdiv.innerHTML = `
//             <span>${product.name} - $${product.price.toFixed(2)}</span>
//             <button data-id="${product.id}">Add to cart</button>`;

//         productlist.appendChild(productdiv);
//     });

//     // Add to cart when button is clicked
//     productlist.addEventListener('click', (e) => {
//         if (e.target.tagName === "BUTTON") {
//             const productId = parseInt(e.target.getAttribute("data-id"));
//             const product = products.find(p => p.id === productId);
//             addtocart(product);
//         }
//     });

//     function addtocart(product) {
//         cart.push(product);
//         rendercartitems();
//     }

//     // Render cart items
//     function rendercartitems() {
//         cartlist.innerHTML = ''; // Clear previous items
//         let totalprice = 0;

//         if (cart.length > 0) {
//             cart.forEach((product, index) => {
//                 totalprice += product.price;
//                 const cartitem = document.createElement('div');
//                 cartitem.classList.add('cart-item');
//                 cartitem.innerHTML = `
//                     <span>${product.name} - $${product.price.toFixed(2)}</span>
//                     <button data-index="${index}">Remove</button>`;

//                 cartlist.appendChild(cartitem);

//                 // Add event listener to "Remove" button
//                 const removeButton = cartitem.querySelector('button');
//                 removeButton.addEventListener('click', () => {
//                     removefromcart(index);  // Call remove function
//                 });
//             });

//             total.textContent = `$${totalprice.toFixed(2)}`;
//             emptycartmessage.classList.add('hidden');
//             carttotalmsg.classList.remove('hidden');
//         } else {
//             emptycartmessage.classList.remove('hidden');
//             carttotalmsg.classList.add('hidden');
//         }
//     }

//     // Remove from cart
//     function removefromcart(index) {
//         cart.splice(index, 1);  // Remove item at the given index
//         rendercartitems(); // Re-render cart items
//     }

//     // Checkout button clears cart
//     checkoutbttn.addEventListener('click', () => {
//         cart.length = 0;  // Empty the cart
//         alert("Checkout successful!");
//         rendercartitems();
//     });
// });


document.addEventListener("DOMContentLoaded", () => {
    
    const products = [
        { id: 1, name: "Product 1", price: 69.09 },
        { id: 2, name: "Product 2", price: 10.99 },
        { id: 3, name: "Product 3", price: 29.99 }
    ];
    const cart = JSON.parse(localStorage.getItem('cartitems'))||[];

    const productlist = document.getElementById("product-list");
    const checkoutbttn = document.getElementById("checkout-btn");
    const cartlist = document.getElementById("cart-items");
    const total = document.getElementById("total-price");
    const emptycartmessage = document.getElementById("empty-cart");
    const carttotalmsg = document.getElementById("cart-total");

    //creating a product element

    products.forEach(product => {
        const productdiv = document.createElement('div')
        productdiv.classList.add('product');
        productdiv.innerHTML =
            `<span>${product.name} - ${product.price.toFixed(2)} </span>
               <button data-id=${product.id}>Add to cart</button>`
        productlist.appendChild(productdiv)
    });
    
    //ADD TO CART BUTTON
    productlist.addEventListener('click', (e) => {
        if (e.target.tagName === "BUTTON") {
            const productid = parseInt(e.target.getAttribute('data-id'))
            const product = products.find(p => p.id === productid)
            addtocart(product)
        }
    })
    function addtocart(product) {
        cart.push(product)
        rendercartitem()
        savetasks() 

    }
    function rendercartitem() {
        cartlist.innerHTML = '';
        let totalprice = 0;
        if (cart.length > 0) {
            cart.forEach((product, index) => { // product defines the content in the cart and index defines the position of the product
                totalprice += product.price
                const cartitem = document.createElement('div');
                cartitem.classList.add('cart-item')
                cartitem.innerHTML = `
                    <span>${product.name} - $${product.price.toFixed(2)}</span>
                    <button data-index="${index}">Remove</button>`;
                cartlist.appendChild(cartitem)
                total.textContent = `$${totalprice.toFixed(2)}`;

                //remove button
                const remove = cartitem.querySelector("button")
                remove.addEventListener('click',()=>{
                    removefromcart(index)
                })
                
            })
            emptycartmessage.classList.add('hidden');
            carttotalmsg.classList.remove('hidden');
        }
        else {
            emptycartmessage.classList.remove('hidden');
            carttotalmsg.classList.add('hidden');
        }
    }
    
    function removefromcart(index){
        cart.splice(index, 1)
        savetasks();

    }
    function savetasks() {
        localStorage.setItem("cartitems",JSON.stringify(cart))  
        rendercartitem() ;  
    }

    savetasks();
    
    checkoutbttn.addEventListener('click',()=>{
        cart.length=0;
        alert('checkout succesfully ')
        rendercartitem();
    })


})
