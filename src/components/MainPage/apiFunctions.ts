export async function deleteCart(id: number, carts) {
  //because not possible to update dummy database
  const dummyId = 1;
  //
  try {
    const res = await fetch(`https://dummyjson.com/carts/${dummyId}`, {
      method: "DELETE",
    });
    const json = await res.json();
    const newCarts = [...carts];
    const cartToDelete = newCarts.findIndex((obj) => obj.id === id);
    newCarts.splice(cartToDelete, 1);
    return newCarts;
  } catch (error) {
    console.log(error);
  }
}

export async function addCart(carts) {
  let randProducts = [];
  const numOfProducts = Math.floor(Math.random() * 10 + 1);
  //hardcoded number of products = 100 https://dummyjson.com/products
  const availableProducts = 100;
  for (let i = 0; i < numOfProducts; i++) {
    randProducts.push({
      id: Math.floor(Math.random() * availableProducts + 1),
      quantity: Math.floor(Math.random() * 3 + 1),
    });
  }
  try {
    const res = await fetch("https://dummyjson.com/carts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: 1,
        products: randProducts,
      }),
    });
    const json = await res.json();
    const newCarts = [...carts];
    json.id = carts[carts.length - 1].id + 1;
    newCarts.push(json);
    return newCarts;
  } catch (error) {
    console.log(error);
  }
}
