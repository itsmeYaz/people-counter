let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count");
let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let prevCount = ` ${count} - `;
  saveEl.textContent += prevCount;
  //My solution reseting the count into zero
  // let resetCount = count - count;
  // count = resetCount;
  // countEl.textContent = count;

  //Course Soulution
  countEl.textContent = 0;
  count = 0;
}
