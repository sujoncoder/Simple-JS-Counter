// Collect Id
const increamentEl = document.getElementById('increment')
const decreamentEl = document.getElementById('decrement')
const countEl = document.getElementById('count')

// Initial state
let count = 0


// Create Handler Function
increamentEl.addEventListener("click",()=>{
    count++;
    countEl.innerText = count
})


decreamentEl.addEventListener("click",()=>{
    count--;
    countEl.innerText = count
})
