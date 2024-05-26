let leftarrow = document.querySelector("#leftarrow")
let rightarrow = document.querySelector("#rightarrow")

leftarrow.addEventListener('click', e => {
    if (window.history.back()) {
        window.history.back();
    }
    else {
        leftarrow.style.cursor = "not-allowed"
    }
})
rightarrow.addEventListener('click', e => {
    if (window.history.forward()) {
        window.history.forward();
    }
    else {
        rightarrow.style.cursor = "not-allowed"
    }
})
let songsData = [
    {
        id: 0,
        name: "Dunki- O Maahi",
        image: "/Songs/img1.webp",
        audio: "/Songs/song1.m4a",
        desc: "Shah Rukh Khan _ Taapsee Pannu _ Pritam _ Arijt",
        duration: "4:06"
    },
    {
        id: 1,
        name: "Tum Hi Ho' Aashiqui 2",
        image: "/Songs/img2.webp",
        audio: "/Songs/song2.m4a",
        desc: "Aditya Roy Kapur, Shraddha Ka",
        duration: "4:27"
    },
    {
        id: 2,
        name: "Tujhe Kitna Chahne Lage",
        image: "/Songs/img3.webp",
        audio: "/Songs/song3.m4a",
        desc: "Kabir Singh _ Mithoon Feat. Arijit Sing",
        duration: "3:38"
    },
    {
        id: 3,
        name: "Main Tera Boyfriend Raabta",
        image: "/Songs/img4.webp",
        audio: "/Songs/song4.m4a",
        desc: "Arijit S _ Neha K Meet Bros _ Sushant Si",
        duration: "3:08"
    }
];

let Balbum = document.querySelector(".Balbum")
let Bdisc = document.querySelector(".Bdisc")
let Btime = document.querySelector(".Btime")
let Number = document.querySelector(".Number")
let Bsource = document.querySelector(".Bsource")

songsData.forEach(song => {
    let artistName = document.createElement("div");
    artistName.textContent = song.desc;
    Bdisc.appendChild(artistName);
});
songsData.forEach(song => {
    let audio = document.createElement("audio");
    audio.src = song.audio;
    Bsource.appendChild(audio);
});
songsData.forEach(song => {
    let songtime = document.createElement("div");
    songtime.textContent = song.duration;
    Btime.appendChild(songtime);
});
songsData.forEach(song => {
    let songId = document.createElement("div");
    songId.textContent = song.id + 1;
    Number.appendChild(songId);
});
songsData.forEach(song => {
    let songName = document.createElement("div");
    let songImg = document.createElement("img");
    songImg.src = song.image;
    songName.textContent = song.name;
    Balbum.appendChild(songImg);
    Balbum.appendChild(songName);
});


let Number1 = document.querySelectorAll(".Number div:not(:first-child)");
Number1.forEach(element => {
    let original = element.innerHTML
    element.addEventListener('mouseenter', function () {
        element.innerHTML = ""
        let e = document.createElement("img");
        e.src = "/Icons/play.png";
        element.appendChild(e);
    })
    element.addEventListener('mouseleave', function () {
        element.innerHTML = original
    })
});

let Balbum1 = Array.from(document.querySelectorAll(".Balbum div:not(:first-child)"))
let Bdisc1 = Array.from(document.querySelectorAll(".Bdisc div:not(:first-child)"))
let Btime1 = Array.from(document.querySelectorAll(".Btime div:not(:first-child)"))

let array = Balbum1.concat(Bdisc1, Btime1);
let Number2 = Array.from(document.querySelectorAll(".Number div:not(:first-child)"))


Bdisc1.forEach((element, index) => {

    element.addEventListener('mouseenter', function () {
        Number2[index].style.backgroundColor = '#242424';
        Number2[index].style.width = '52vw';
    }
    )

    element.addEventListener('mouseleave', function () {
        Number2[index].style.backgroundColor = '';
        Number2[index].style.width = '';
    });

});
Balbum1.forEach((element, index) => {
    element.addEventListener('mouseenter', function () {
        Number2[index].style.backgroundColor = '#242424';
        Number2[index].style.width = '52vw';
    }
    )

    element.addEventListener('mouseleave', function () {
        Number2[index].style.backgroundColor = '';
        Number2[index].style.width = '';
    });

});
Btime1.forEach((element, index) => {
    element.addEventListener('mouseenter', function () {
        Number2[index].style.backgroundColor = '#242424';
        Number2[index].style.width = '52vw';
    }
    )

    element.addEventListener('mouseleave', function () {
        Number2[index].style.backgroundColor = '';
        Number2[index].style.width = '';
    });

});






let Sphoto = document.querySelector(".playbar img")
let Sname = document.querySelector("#Sname")
let Sdesc = document.querySelector("#Sdesc")
let playbtn = document.querySelector(".Number")
let time = document.querySelector("#time")




Number1.forEach(element => {
    let original = element.innerHTML;
    let id = original - 1;
    element.addEventListener('click', e => {
        Sphoto.src = songsData[id].image
        Sname.textContent = songsData[id].name
        Sdesc.textContent = songsData[id].desc
        time.innerHTML = songsData[id].duration
    })
});

let audio = document.querySelectorAll(".Bsource audio");
let Pbtn = document.querySelector("#play");
let currentSong = null;
let timer = document.querySelector("#count")


let seekBar = document.querySelector(".seekbar");
let circle = document.querySelector(".circle");

Number2.forEach((element, index) => {
    let original = element.innerHTML;
    let song = audio[index];

    element.addEventListener('click', function () {
        document.querySelector(".playbar").style.display = "flex";

        if (currentSong) {
            currentSong.pause();
        }
        song.play();
        currentSong = song;
        startTimer();
    });
});

Pbtn.addEventListener('click', function () {
    if (currentSong) {
        if (currentSong.paused) {
            Pbtn.src = "/Icons/pause.png";
            currentSong.play();
            startTimer();
        } else {
            Pbtn.src = "/Icons/play.png";
            currentSong.pause();
            clearInterval(timerInterval);
        }
    }
});

let timerInterval;

function startTimer() {
    timerInterval = setInterval(function () {
        timer.textContent = formatTime(currentSong.currentTime);
        let progress = (currentSong.currentTime / currentSong.duration) * 100;
        circle.style.left = progress + "%";
        updateTimeDisplay();
    }, 1000);
}
function formatTime(time) {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    return `${minutes}:${(seconds < 10 ? '0' : '')}${seconds}`;
}
function updateTimeDisplay() {

    let remainingTime = currentSong.duration - currentSong.currentTime;
    let formattedTime = formatTime(remainingTime);
    document.querySelector("#time").textContent = "-" + formattedTime;
}
seekBar.addEventListener('click', function (e) {
    let rect = seekBar.getBoundingClientRect();
    let offsetX = e.clientX - rect.left
    let percentage = (offsetX / seekBar.offsetWidth) * 100;
    circle.style.left = percentage + "%";
    let newTime = (percentage / 100) * currentSong.duration;
    currentSong.currentTime = newTime;
});


let isDragging = false;
circle.addEventListener('mousedown', function (e) {
    isDragging = true;
});

document.addEventListener('mousemove', function (e) {
    if (isDragging) {
        let rect = seekBar.getBoundingClientRect();
        let offsetX = e.clientX - rect.left;
        let percentage = (offsetX / seekBar.offsetWidth) * 100;
        percentage = Math.max(0, Math.min(100, percentage));
        circle.style.left = percentage + "%";
        let newTime = (percentage / 100) * currentSong.duration;
        currentSong.currentTime = newTime;
    }
});

document.addEventListener('mouseup', function () {
    isDragging = false;
});
