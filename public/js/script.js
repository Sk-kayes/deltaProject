(() => {
    'use strict'
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

        form.classList.add('was-validated')
        }, false)
    })
})();

// All functions regarding search features
const countryInput = document.getElementById("countryInput");
// const searchBox = document.querySelector(".searchdata");
function capitalizeFirstLetters(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function searchCountry() {
    const capitalizedTitle = capitalizeFirstLetters(countryInput.value);
    window.location.href = `/listings/country?country=${capitalizedTitle}`;
}

function updateUrl(category) {
    if(category === "trending") {
        let url = "http://localhost:6969/listings";
        window.location.href = url;
    }else {
        const capitalizedCategory = capitalizeFirstLetters(category);
        let url = `/listings/category?category=${capitalizedCategory}`;
        window.location.href = url;
    }
}