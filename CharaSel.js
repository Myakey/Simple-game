var charaArr = [
    "LidiaSprite.png",
    "Kazuya.png",
    "XiaoYu.png"

]

var charaName = [
    "Lidia",
    "Kazuya",
    "Xiao Yu"
]

function next(){
    var charaSel = document.getElementById("charaSprite")
    var currentImage = charaSel.src.split('/').pop()
    var currentIndex = charaArr.indexOf(currentImage)
    var nextIndex = (currentIndex + 1) % charaArr.length
    charaSel.src = "assets/" + charaArr[nextIndex]

    var charaSel = document.getElementById("Lidia")
    var currentImage = charaSel.src.split('/').pop()
    var currentIndex = charaArr.indexOf(currentImage)
    var nextIndex = (currentIndex + 1) % charaArr.length
    charaSel.src = "assets/" + charaArr[nextIndex]
}

function prev(){
    var charaSel = document.getElementById("charaSprite")
    var currentImage = charaSel.src.split('/').pop()
    var currentIndex = charaArr.indexOf(currentImage)
    var nextIndex = (currentIndex - 1) % charaArr.length
    if(nextIndex == -1){
        nextIndex = 2
    }
    charaSel.src = "assets/" + charaArr[nextIndex]
}
