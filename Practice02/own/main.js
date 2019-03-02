var images = ["http://tvl.ctvba.org.tw/wp-content/uploads/2018/10/-1023-%E5%B9%B3%E9%9D%A2%E5%8C%96-616X290-1-e1540953826903.png",
    "https://s.yimg.com/uu/api/res/1.2/._vwGjKrP0YdzL_RTqmgAg--~B/aD0xMDcyO3c9MTYwMDtzbT0xO2FwcGlkPXl0YWNoeW9u/http://media.zenfs.com/zh-Hant-TW/homerun/youthdailynews_517/b3b58dd32da5e94a35666b30e264f717",
    "https://obs.line-scdn.net/0hUaMe3ZpgCk5wHCYWBbF1GUpKCSFDcBlNFCpbTTNyVHoNLhoeRS0VIFMeUSxaeU0QHnJCKlweEX9bKh4QGy4V/w644",
    "https://c1.staticflickr.com/5/4771/40686350291_b7b5b388e1_b.jpg",
    "http://media.pbplus.me/wp-content/uploads/2017/09/21082897_1638478296172035_1713942032626361786_o.jpg",
    "https://volsports.co/wp-content/uploads/2018/12/DSC09756.jpg",
    "https://volsports.co/wp-content/uploads/2018/12/cdbca54d7bcda8c2583393d08523f72fb_14906360_181201_0004.jpg"
]

var targetElement = document.getElementById("display");
var prev_button = document.getElementById("prev");
var next_button = document.getElementById("next");
prev_button.onclick = previousImage;
next_button.onclick = nextImage;
var i = 0;

function previousImage() {
    i = i - 1;
    if( i < 0 ){
        i = 0;
    }
    else {
        if(i == 0){
            prev_button.className = "disabled";
        }
        if(i == (images.length-2)) {
            next_button.className = "image-viewer__button";
        }
        targetElement.setAttribute ('src', 'images/loading.gif');
        targetElement.setAttribute ('src', images[i]);
    }
}

function nextImage() {
    i = i + 1;
    if (i > (images.length - 1)) {
        i = images.length - 1
    }
    else {
        if(i == (images.length - 1)){
            next_button.className = "disabled";
        }
        if(i == 1) {
            prev_button.className = "image-viewer__button";
        }
        targetElement.setAttribute ('src', 'images/loading.gif');
        targetElement.setAttribute ('src', images[i]);
    }
}