function soundPlay(sound){
    var audio = new Audio('./sounds/' +sound+'.mp3');
    audio.play();
}

document.querySelectorAll(".w")[0].setAttribute("onclick", 'soundPlay("tom-1")');
document.querySelectorAll(".a")[0].setAttribute("onclick", 'soundPlay("tom-2")');
document.querySelectorAll(".s")[0].setAttribute("onclick", 'soundPlay("tom-3")');
document.querySelectorAll(".d")[0].setAttribute("onclick", 'soundPlay("tom-4")');
document.querySelectorAll(".j")[0].setAttribute("onclick", 'soundPlay("crash")');
document.querySelectorAll(".k")[0].setAttribute("onclick", 'soundPlay("kick-bass")');
document.querySelectorAll(".l")[0].setAttribute("onclick", 'soundPlay("snare")');