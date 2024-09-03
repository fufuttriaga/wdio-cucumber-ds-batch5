import { $, expect } from '@wdio/globals'
import Page from './page.js';

class CartPage extends Page {

    get checkoutButton() {
        return $("#username")
    }
    get continueShoppingButton() {
        return $("#shopping_cart_container")
    }

    open(path) {
        return super.open("cart.html")
    }
}

it('Add item to cart', () => {
    // Pilih item pertama dan klik tombol add-to-cart
    get('.inventory_item:first .btn_inventory').click();
});

it('Validate item sukses ditambahkan ke cart', () => {
    // Klik ikon cart untuk membuka cart
    get('.shopping_cart_link').click();
    // Validasi bahwa item ada di cart
    get('.cart_item').should('have.length', 1);
});

const firstItemAddButton = $('.inventory_item:first-child .btn_inventory');
firstItemAddButton.click();

// Validate item added to cart
const cartIcon = $('.shopping_cart_badge');
expect(cartIcon.getText()).toBe('1');

export default new CartPage();