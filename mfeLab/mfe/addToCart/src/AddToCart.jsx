import { createEffect, createSignal, Show } from "solid-js";

import { jwt, addToCart } from "cart/cart";

export default ({ id }) => {
  const [loggedIn, setLoggedIn] = createSignal(false);

  createEffect(() => {
    return jwt.subscribe((jwt) => {
      console.log({jwt})
      setLoggedIn(!!jwt);
      console.log({jwt, loggedIn: loggedIn()})
    });
  });

  return (
    <Show when={loggedIn()}>
      <button
        onClick={() => addToCart(id)}
        style={{
          background: "red",
          color: "white"
        }}
        class="bg-red-900 text-white py-2 px-5 rounded-md text-sm mt-5"
      >
        Add To Cart
      </button>
    </Show>
  );
};
