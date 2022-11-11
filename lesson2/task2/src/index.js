import "../styles/index.scss";
import store, { increment, reset, decrement } from "./store";

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const resetBtn = document.querySelector('[data-action="reset"]');
const resultItem = document.querySelector(".counter__result");

const onIncrement = () => {
  store.dispatch(increment());
};
const onReset = () => {
  store.dispatch(reset());
};
const onDecrement = () => {
  store.dispatch(decrement());
};

incrementBtn.addEventListener("click", onIncrement);
decrementBtn.addEventListener("click", onDecrement);
resetBtn.addEventListener("click", onReset);

store.subscribe(() => {
  const state = store.getState();
  const value = state.history.reduce((acc, value) => acc + Number(value), 0);
  const historyString = state.history.join("");
  resultItem.textContent =
    state.history.length === 0 ? "" : `${historyString} = ${value}`;
  console.log(store.getState());
});
