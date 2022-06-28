function changeImg() {
    var image = document.getElementById('corolla');
    if (image.src.match("https://cdn.jdpower.com/ChromeImageGallery/Expanded/Transparent/640/2018TOC040002_640/2018TOC040002_640_01.png")) {
        image.src = "https://www.mikeshawtoyota.com/2022-toyota-camry-in-corpus-christi-tx.htm";
    }
    else {
        image.src = "https://cdn.jdpower.com/ChromeImageGallery/Expanded/Transparent/640/2018TOC040002_640/2018TOC040002_640_01.png";
    }
}