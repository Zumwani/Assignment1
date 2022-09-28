loadHeader();
async function loadHeader() {
    const element = await fetchElement("header.html", "header");
    document.querySelector("#header").appendChild(element);
}

//https://stackoverflow.com/a/70483187
async function fetchElement(url, selector) {
    const data = await fetch(url).then(res => res.text());
    const parsed = new DOMParser().parseFromString(data, 'text/html');
    return parsed.querySelector(selector);
}