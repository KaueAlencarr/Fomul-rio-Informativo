const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

function emailValidate(event) {
    const input = document.querySelector('.required');
    const span = document.querySelector('.newsletter-form .span-required');
    const link = document.querySelector('.link');

    if (!emailRegex.test(input.value)) {
        input.style.border = '2px solid #e63636';
        input.style.color = '#e63636';
        input.style.background = '#FFE8E6';
        span.style.display = 'block';
        event.preventDefault();
        return false;
    } else {
        input.style.border = '2px solid rgba(128, 128, 128, 0.322)';
        input.style.color = 'black';
        input.style.background = 'white';
        span.style.display = 'none';
        return true;
    }
}
