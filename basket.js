const basketOpen = document.querySelector('.cartIconWrap');
const basketOpenMenu = document.querySelector('.basket');
const basketCounterEl = document.querySelector('.cartIconWrap span');
const basketTotalEl = document.querySelector('.basketTotal');
const basketTotalValueEl = document.querySelector('.basketTotalValue');

basketOpen.addEventListener('click', () => {
    basketOpenMenu.classList.toggle('hidden');
  });
  const basket = {};
  const addBasketItems = document.querySelector('.featuredItems');
  addBasketItems.addEventListener('click', event => {
    if (!event.target.closest('.addToCart')) {
        return;
      }
    
    const basketEl = (event.target.closest('.featuredItem'));
    const id = +basketEl.dataset.id;
    const name = basketEl.dataset.name;
    const price = +basketEl.dataset.price;
    

    addToCard(id,name,price);
  });
/**
 * 
 * @param {number} id 
 * @param {string} name 
 * @param {number} price 
 */
function addToCard (id,name,price){
    if(!(id in basket)){
basket[id] = {id: id, name: name, price: price, count: 0};
    }
    basket[id].count++;
    basketCounterEl.textContent = getTotalBasketCount().toString();
    basketTotalValueEl.textContent = getTotalBasketPrice().toFixed(2);
    renderProductInBasket(id);
}

function getTotalBasketCount() {
return Object.values(basket).reduce((acc,product) => +product.count, 0)
}
/**
 * 
 * @return {number} 
 */
 function getTotalBasketPrice() {
    return Object
      .values(basket)
      .reduce((acc, product) => acc + product.price * product.count, 0);
  }

/**
 * 
 * @param {number} productId 
 */
 function renderProductInBasket(productId) {
    const basketRowEl = basketOpenMenu
      .querySelector(`.basketRow[data-id="${productId}"]`);
    if (!basketRowEl) {
      renderNewProductInBasket(productId);
      return;
    }
    const product = basket[productId];
    basketRowEl.querySelector('.productCount').textContent = product.count;
    basketRowEl
      .querySelector('.productTotalRow')
      .textContent = (product.price * product.count).toFixed(2);
  }
  /**
   * 
   * @param {number} productId 
   */
  function renderNewProductInBasket(productId) {
    const productRow = `
      <div class="basketRow" data-id="${productId}">
        <div>${basket[productId].name}</div>
        <div>
          <span class="productCount">${basket[productId].count}</span> шт.
        </div>
        <div>$${basket[productId].price}</div>
        <div>
          $<span class="productTotalRow">${(basket[productId].price * basket[productId].count).toFixed(2)}</span>
        </div>
      </div>
      `;
    basketTotalEl.insertAdjacentHTML("beforebegin", productRow);
  }