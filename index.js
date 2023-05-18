function render() {
    const productsStore = localStorageUtils.getProducts();

    headerPage.render(productsStore.length)
    productsPage.render();
}

spinnerPage.render()

let CATALOG = []


fetch('server/catalog.json')
    .then(res => res.json())
    .then(body => {
        CATALOG = body;
            spinnerPage.handelClear()
            render()
    })
    .catch(error => {
        spinnerPage.handelClear()
        errorPage.render()
    })

