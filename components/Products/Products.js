class Products {
    constructor() {
        this.classNameActive = 'products-element__btn_active'
        this.labelAdd = 'Добавить в корзину'
        this.labelRemove = 'Удалить из корзины'
    }

    handelSetLocationStorage(element, id) {
        const {
            pushProduct,
            products
        } = localStorageUtils.putProducts(id)

        if (pushProduct) {
            element.classList.add(this.classNameActive)
            element.innerHTML = this.labelRemove
        } else {
            element.classList.remove(this.classNameActive)
            element.innerHTML = this.labelAdd
        }

        headerPage.render(products.length)
    }

    render() {
        const productsStore = localStorageUtils.getProducts()
        let htmlCatalog = ''
        CATALOG.forEach(({id, img, name, price}) => {
            let activeClass = '';
            let activeText = '';

            if (productsStore.indexOf(id) === -1) {
                activeText = this.labelAdd
            } else {
                activeClass = ` ` + this.classNameActive
                activeText = this.labelRemove
            }

            htmlCatalog += `
            <li key="id" class="products-element">
            <span class="products-element__name">${name}</span>
            <img src="${img}" class="products-element__img">
             <span class="products-element__price">
             ⚡️${price.toLocaleString()} USD
             </span>
             <button class="products-element__btn${activeClass}" onclick="productsPage.handelSetLocationStorage(this, '${id}')">${activeText}</button>
            </li>
            `;
        })

        const html = `
        <ul class="products-container">
        ${htmlCatalog}
        </ul>
        `;

        ROOT_PRODUCTS.innerHTML = html;
    }
}

const productsPage = new Products();
