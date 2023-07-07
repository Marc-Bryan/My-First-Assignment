// Create a variable named “customer” using the “let” declaration. Set its value
// as shown in the table below:

// customer_name Johnny Manggo
// points 12300
// cart item: Shampoo ,
// quantity: 2,
// price_$: 3
// item: Soap ,
// quantity: 2,
// price_$: 2
// item: Toothpaste ,
// quantity: 1,
// price_$: 3

let customer = {
    customer_name: "Johnny Manggo",
    points: 12300,
    cart: [
      { item: "Shampoo", quantity: 2, price_$: 3 },
      { item: "Soap", quantity: 2, price_$: 2 },
      { item: "Toothpaste", quantity: 1, price_$: 3 }
    ]
  };
  
  console.log(`Hi! ${customer.customer_name} We are happy to see you today`);
  console.log(`Your current points are: ${customer.points}`);
  
  let totalbill = 0;

  //Print the purchased Item part 1
  console.log("Purchased Item:");

  // Iterate through the items in the cart
for (let i = 0; i < customer.cart.length; i++) {
    let item = customer.cart[i];
    
    // Multiply the quantity by the price of each item
    let itemTotal = item.quantity * item.price_$;
    
    // Add the item's total cost to the total bill
    totalbill += itemTotal;

    //Print the purchased Item part 2
    console.log(`${item.quantity}x ${item.item} ---- $ ${itemTotal.toFixed(2)}`);
    
    //add calculation that will increment customer points by the quantity of item

    customer.points = customer.points + item.quantity;
}
  
    //Print the Total bill
    console.log(`Total Bill: ${totalbill}`);
  
    //Print the new points
    console.log(`New Current Points: ${customer.points}`);