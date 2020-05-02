var request = new XMLHttpRequest();
request.open('GET', "https://hplussport.com/api/products?qty=2&order=name");

request.onload = function () {
    var response = request.response;
    var parsedData = JSON.parse(response);

    for(item in parsedData) {
        var name = parsedData[item].name;
        var products = document.createElement("p");
        products.innerHTML = name;
        document.getElementById("product-list").appendChild(products);

        var imageUrl = parsedData[item].image;
        var images = document.createElement("img");
        images.setAttribute("src", imageUrl);
        document.getElementById("product-list").appendChild(images);
    }
}

request.send();

var request2 = new XMLHttpRequest();
request2.open('GET', "https://api.giphy.com/v1/gifs/random?api_key=byRnyWa9ruVyauj0Wh3PtCJsG5YH0mV7");

request2.onload = function () {
    var response = request2.response;
    var parsedData = JSON.parse(response);
    var originalUrl = parsedData.data.images.original.url;

    var gif = document.createElement("img");
    gif.setAttribute("src", originalUrl);
    document.getElementById("main-image").appendChild(gif);
}

request2.send();