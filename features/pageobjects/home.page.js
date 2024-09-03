import { $, expect } from '@wdio/globals'
import Page from './page.js';

class HomePage extends Page{

    get cartIcon (){
        return $("#shopping_cart_container")  
    }
    get addToCartButton(){
        return $("#add-to-cart-sauce-labs-backpack")  
    }
    get productImage(){
        return $("#item_0_img_link")  
    }
    async validateOnHomePage(){
        await expect(this.productImage).toBeExisting();
        await expect(this.cartIcon).toBeExisting();
        await expect(this.addToCartButton).toBeExisting(); 
    }

    open (path) {
        return super.open("inventory.html")
    }

}

export default new HomePage();