class Spinner{

    handelClear() {
        ROOT_SPINNER.innerHTML = ''
    }

    render() {
        const html = `
        <div class="spinner-container">
        <img class="spinner__img" 
        src="components/Spinner/image/spinner.svg" alt="spinner">
        </div>
        `;

        ROOT_SPINNER.innerHTML = html;
    }
}

const spinnerPage = new Spinner();