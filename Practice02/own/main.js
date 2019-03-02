var images = ["https://s.yimg.com/uu/api/res/1.2/._vwGjKrP0YdzL_RTqmgAg--~B/aD0xMDcyO3c9MTYwMDtzbT0xO2FwcGlkPXl0YWNoeW9u/http://media.zenfs.com/zh-Hant-TW/homerun/youthdailynews_517/b3b58dd32da5e94a35666b30e264f717",
    "https://obs.line-scdn.net/0hUaMe3ZpgCk5wHCYWBbF1GUpKCSFDcBlNFCpbTTNyVHoNLhoeRS0VIFMeUSxaeU0QHnJCKlweEX9bKh4QGy4V/w644",
    "https://c1.staticflickr.com/5/4771/40686350291_b7b5b388e1_b.jpg",
    "https://cdn2.ettoday.net/images/2743/d2743589.jpg"
]

var targetElement = document.getElementById("display");
var prev_button = document.getElementById("prev");
var next_button = document.getElementById("next");
prev_button.onclick = previousImage;
next_button.onclick = nextImage;
var i = 0;

function previousImage() {
    if( i == 0 ){
        prev_button.className = "disabled";
    }
    else if(i == (images.length-1)) {
        next_button.className = "image-viewer__button";
        i = i - 1;
    }
    else {
        i = i - 1;
        targetElement.setAttribute ('src', 'images/loading.gif');
        targetElement.setAttribute ('src', images[i]);
    }
}

function nextImage() {
    i = i + 1;
    if (i >= 0 && i < images.length) {
        prev_button.className = "image-viewer__button";
        targetElement.setAttribute ('src', images[i]);
    }
    else if(i == images.length) {
        i = i - 1;
        next_button.className = "disabled";
    }
}