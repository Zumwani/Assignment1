function login(e) {
    e.preventDefault();
    onError("Email or password was incorrect.");
    return false;
}

function register(e) {
    e.preventDefault();
    onError("Email address already exists.");
    return false;
}

function sso_facebook(e) {
    e.preventDefault();
}

function sso_google(e) {
    e.preventDefault();
}

function onError(text, type) {
    //Doesn't work since page reloads when submitting form.
    //Only solution seems to be to place button outside, but
    //then we lose 'required' and 'pattern' functionality...
    document.querySelector(".form-error ." + text).innerText = text;
}