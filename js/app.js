// ===== TELEGRAM BOT CONFIG =====
const TELEGRAM_BOT_TOKEN = '8827690852:AAFRLYq54yLpjhsZevPDeF7Xr-k0aTDwCrM';
const TELEGRAM_CHAT_ID = '5249728466';

// ===== STATE =====
function getCart() {
  return JSON.parse(localStorage.getItem('cart') || '[]');
}
function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartBadge();
}
function getFavorites() {
  return JSON.parse(localStorage.getItem('favorites') || '[]');
}
function saveFavorites(favs) {
  localStorage.setItem('favorites', JSON.stringify(favs));
  updateFavBadge();
}
function getProfile() {
  return JSON.parse(localStorage.getItem('profile') || '{}');
}
function saveProfile(p) {
  localStorage.setItem('profile', JSON.stringify(p));
}

// ===== THEME =====
function getTheme() {
  return localStorage.getItem('theme') || 'light';
}
function setTheme(theme) {
  localStorage.setItem('theme', theme);
  document.documentElement.setAttribute('data-theme', theme);
  const btn = document.getElementById('themeToggle');
  if (btn) {
    btn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
    btn.title = theme === 'dark' ? t('lightMode') : t('darkMode');
  }
}
function toggleTheme() {
  setTheme(getTheme() === 'dark' ? 'light' : 'dark');
}

// ===== CART =====
function addToCart(productId, size = null, qty = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const cart = getCart();
  const selectedSize = size || product.sizes[0];
  const existing = cart.find(item => item.id === productId && item.size === selectedSize);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: productId, size: selectedSize, qty });
  }
  saveCart(cart);
  showToast(t('addToCart') + ' ✓');
}

function removeFromCart(productId, size) {
  let cart = getCart().filter(item => !(item.id === productId && item.size === size));
  saveCart(cart);
  if (typeof renderCart === 'function') renderCart();
}

function updateCartQty(productId, size, qty) {
  const cart = getCart();
  const item = cart.find(i => i.id === productId && i.size === size);
  if (item) {
    item.qty = Math.max(1, qty);
    saveCart(cart);
  }
  if (typeof renderCart === 'function') renderCart();
}

function getCartTotal() {
  return getCart().reduce((sum, item) => {
    const p = PRODUCTS.find(pr => pr.id === item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);
}

function getCartCount() {
  return getCart().reduce((s, i) => s + i.qty, 0);
}

// ===== FAVORITES =====
function toggleFavorite(productId) {
  let favs = getFavorites();
  if (favs.includes(productId)) {
    favs = favs.filter(id => id !== productId);
    showToast(t('removeFromFav'));
  } else {
    favs.push(productId);
    showToast(t('addToFav') + ' ✓');
  }
  saveFavorites(favs);
  updateFavBadge();
  // Update heart icons
  document.querySelectorAll(`[data-fav-id="${productId}"]`).forEach(el => {
    el.classList.toggle('active', favs.includes(productId));
  });
  if (typeof renderFavorites === 'function') renderFavorites();
}

function isFavorite(productId) {
  return getFavorites().includes(productId);
}

// ===== BADGES =====
function updateCartBadge() {
  const count = getCartCount();
  document.querySelectorAll('.cart-badge').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
}
function updateFavBadge() {
  const count = getFavorites().length;
  document.querySelectorAll('.fav-badge').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
}

// ===== FORMAT =====
function formatPrice(price) {
  return new Intl.NumberFormat('ru-RU').format(price) + ' ' + t('sum');
}

// ===== TOAST =====
function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// ===== PRODUCT CARD HTML =====
function productCardHTML(p) {
  const lang = getLang();
  const isFav = isFavorite(p.id);
  const discount = p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;
  return `
    <div class="product-card" data-id="${p.id}">
      <a href="product.html?id=${p.id}" class="product-img-wrap">
        <img src="${p.image}" alt="${p.name[lang]}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x400?text=Rut+Sport'">
        ${discount ? `<span class="badge-discount">-${discount}%</span>` : ''}
        ${p.stock < 10 ? `<span class="badge-low">Hot</span>` : ''}
      </a>
      <button class="fav-btn ${isFav ? 'active' : ''}" data-fav-id="${p.id}" onclick="event.preventDefault(); toggleFavorite(${p.id})">
        <svg viewBox="0 0 24 24" width="20" height="20"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
      </button>
      <div class="product-info">
        <div class="product-rating">★ ${p.rating}</div>
        <a href="product.html?id=${p.id}" class="product-name">${p.name[lang]}</a>
        <div class="product-prices">
          <span class="price">${formatPrice(p.price)}</span>
          ${p.oldPrice ? `<span class="old-price">${formatPrice(p.oldPrice)}</span>` : ''}
        </div>
        <div class="product-sizes">${p.sizes.slice(0, 4).join(' · ')}${p.sizes.length > 4 ? '...' : ''}</div>
        <button class="btn btn-primary btn-sm" onclick="addToCart(${p.id})">${t('addToCart')}</button>
      </div>
    </div>
  `;
}

// ===== TELEGRAM ORDER =====
async function sendOrderToTelegram(orderData) {
  const lang = getLang();
  let text = `🛒 *Новый заказ — Rut Sport*\n\n`;
  text += `👤 *Клиент:* ${orderData.name || '—'}\n`;
  text += `📞 *Телефон:* ${orderData.phone || '—'}\n`;
  text += `📧 *Email:* ${orderData.email || '—'}\n`;
  text += `📍 *Адрес:* ${orderData.address || '—'}\n\n`;
  text += `📦 *Товары:*\n`;
  orderData.items.forEach((item, i) => {
    const p = PRODUCTS.find(pr => pr.id === item.id);
    if (p) {
      text += `${i + 1}. ${p.name.ru} | Размер: ${item.size} | Кол-во: ${item.qty} | ${formatPrice(p.price * item.qty)}\n`;
    }
  });
  text += `\n💰 *Итого: ${formatPrice(orderData.total)}*\n`;
  text += `🕐 ${new Date().toLocaleString('ru-RU')}`;

  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: text,
        parse_mode: 'Markdown'
      })
    });
    const data = await res.json();
    return data.ok;
  } catch (e) {
    console.error('Telegram error:', e);
    return false;
  }
}

async function checkout() {
  const cart = getCart();
  if (cart.length === 0) return;
  const profile = getProfile();
  if (!profile.name || !profile.phone) {
    showToast(t('fillProfile'));
    setTimeout(() => location.href = 'profile.html', 1500);
    return;
  }
  const orderData = {
    name: profile.name,
    phone: profile.phone,
    email: profile.email || '',
    address: profile.address || '',
    items: cart,
    total: getCartTotal()
  };
  const btn = document.getElementById('checkoutBtn');
  if (btn) {
    btn.disabled = true;
    btn.textContent = '...';
  }
  const ok = await sendOrderToTelegram(orderData);
  if (ok) {
    // Save order to local history
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.unshift({ ...orderData, date: new Date().toISOString(), id: Date.now() });
    localStorage.setItem('orders', JSON.stringify(orders));
    saveCart([]);
    showToast(t('orderSuccess'));
    setTimeout(() => location.href = 'profile.html', 2000);
  } else {
    showToast('Ошибка отправки. Попробуйте позже.');
    if (btn) {
      btn.disabled = false;
      btn.textContent = t('checkout');
    }
  }
}

// ===== APPLY TRANSLATIONS =====
function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    el.title = t(el.getAttribute('data-i18n-title'));
  });
  // Update lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === getLang());
  });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  setTheme(getTheme());
  applyTranslations();
  updateCartBadge();
  updateFavBadge();

  // Theme toggle
  const themeBtn = document.getElementById('themeToggle');
  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

  // Lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });

  // Mobile menu
  const menuBtn = document.getElementById('menuToggle');
  const nav = document.querySelector('.nav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
  }
});
