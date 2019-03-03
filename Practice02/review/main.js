now = 0
var img_list = [
    { image: './images/pizza01.jpg', source: "https://reurl.cc/q0zER"},
    { image: './images/scaredBao.jpg', source: "https://i.imgur.com/OdGIHAa.jpg"},
    { image: './images/power.jpg', source: "https://truth.bahamut.com.tw/s01/201802/7b3dd8abb2ab3cd64266106d68353c4f.JPG"},
    { image: './images/mouse.jpg', source: "https://scontent.ftpe8-4.fna.fbcdn.net/v/t1.0-9/45101473_2101185133273294_1987316122734559232_n.jpg?_nc_cat=110&_nc_ht=scontent.ftpe8-4.fna&oh=06c0731b4ed82ebb197408038f72db44&oe=5D141A6C"},
    { image: './images/all_I_want.jpg', source: "https://4.bp.blogspot.com/-xPMYL_W2QGY/WyGUOurZU0I/AAAAAAAADq4/iuojWNPffWwlGayXG7zW277H-hpe18p5gCLcBGAs/s1600/0003983237_B%25E5%258E%259F%25E5%259C%2596.JPG"},
    { image: './images/great.jpg', source: "http://sayjb.com/wp-content/uploads/2017/01/unnamed-file-13.jpg"}
];

function previousImage() {
    if (now-1 > -1) {
        now = now-1
        loading()
        checkButton()
    }
}

function nextImage() {
    if (now+1 < img_list.length) {
        now = now+1
        loading()
        checkButton()
    }
}

function loading() {
    var dis_element = document.getElementById("display")
    dis_element.src = "./images/loading.gif"
    setTimeout(changeImage, 500, img_list[now])
}

function changeImage(img_item) {
    var dis_element = document.getElementById("display")
    var src_element = document.getElementById("source")
    dis_element.src = img_item.image
    src_element.innerHTML = "Source: "+img_item.source
    src_element.href = img_item.source
    
}

function checkButton() {
    preBut_element = document.getElementById("previousButton")
    nexBut_element = document.getElementById("nextButton")

    if (now == img_list.length-1) {
        nexBut_element.classList.add("disabled")
    }
    else if (now == 0) {
        preBut_element.classList.add("disabled")
    }
    else {
        preBut_element.classList.remove("disabled")
        nexBut_element.classList.remove("disabled")
    }
}