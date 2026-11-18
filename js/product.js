const requestedId = new URLSearchParams(window.location.search).get('id');
const selectedProduct = products.find((product) => String(product.id) === (requestedId ?? '1'));

if (selectedProduct) {
  const categories = {
    kitchen: 'Кухня',
    home: 'Дом',
    electronics: 'Электроника'
  };
  const image = document.querySelector('.product__image');
  const status = document.querySelector('.product-card__status');
  const orderLink = document.querySelector('.product__info a');

  document.title = `${selectedProduct.title} — ТехноДом`;
  document.querySelector('.breadcrumbs__current').textContent = selectedProduct.title;
  document.querySelector('.product__title').textContent = selectedProduct.title;
  document.querySelector('.product__description').textContent = selectedProduct.details;
  document.querySelector('.product__price').textContent = `${selectedProduct.price.toLocaleString('ru-RU')} руб.`;
  document.querySelector('#product-category').textContent = categories[selectedProduct.category];
  document.querySelector('#product-rating').textContent = `${selectedProduct.rating.toLocaleString('ru-RU')} из 5`;
  image.src = selectedProduct.image;
  image.alt = selectedProduct.title;

  status.textContent = selectedProduct.isAvailable ? 'В наличии' : 'Нет в наличии';
  status.classList.toggle('product-card__status--available', selectedProduct.isAvailable);
  orderLink.hidden = !selectedProduct.isAvailable;
  orderLink.href = `order.html?product=${selectedProduct.id}`;
  document.querySelector('#product-details').hidden = false;
} else {
  document.querySelector('#missing-product').hidden = false;
}
