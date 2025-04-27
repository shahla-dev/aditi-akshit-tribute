const images = [
    { src: "images/66.jpg", caption: "@iaditipandit  @akshitsukhija 🌸" },
    { src: "images/6.jpg", caption: "@iaditipandit  @akshitsukhija 🌸" },
    { src: "images/19.jpg", caption: "@iaditipandit  @akshitsukhija 🌸" },
    { src: "images/10.jpg", caption: "@iaditipandit  @akshitsukhija 🌸" },
    { src: "images/O.jpg", caption: "@iaditipandit  @akshitsukhija 🌸" },
    { src: "images/2.jpg", caption: "@iaditipandit  @akshitsukhija 🌸" },
    { src: "images/65.jpg", caption: "@iaditipandit  @akshitsukhija 🌸" },
    { src: "images/1.jpg", caption: "@iaditipandit  @akshitsukhija 🌸" },
    { src: "images/W.jpg", caption: "@iaditipandit  @akshitsukhija 🌸" },
    { src: "images/68.jpg", caption: "@iaditipandit  @akshitsukhija 🌸" },
    { src: "images/21.jpg", caption: "@iaditipandit  @akshitsukhija 🌸" },

    { src: "images/59.jpg", caption: "@iaditipandit  @akshitsukhija 🌸" },
    { src: "images/81.jpg", caption: "@iaditipandit  @akshitsukhija 🌸" },
    { src: "images/73.jpg", caption: "@iaditipandit  @akshitsukhija 🌸" },
    { src: "images/54.jpg", caption: "@iaditipandit  @akshitsukhija 🌸" },
    { src: "images/96.jpg", caption: "@iaditipandit  @akshitsukhija 🌸" },

    { src: "images/69.jpg", caption: "@iaditipandit  @akshitsukhija 🌸" },
    { src: "images/98.jpg", caption: "@iaditipandit  @akshitsukhija 🌸" },
    { src: "images/25.jpg", caption: "@iaditipandit  @akshitsukhija 🌸" },
    { src: "images/41.jpg", caption: "@iaditipandit  @akshitsukhija 🌸" },
    { src: "images/36.jpg", caption: "@iaditipandit  @akshitsukhija 🌸" },
    { src: "images/50.jpg", caption: "@iaditipandit  @akshitsukhija 🌸" },
    { src: "images/71.jpg", caption: "@iaditipandit  @akshitsukhija 🌸" },
    { src: "images/87.jpg", caption: "@iaditipandit  @akshitsukhija 🌸" },
    { src: "images/90.jpg", caption: "@iaditipandit  @akshitsukhija 🌸" },
    { src: "images/53.jpg", caption: "@iaditipandit  @akshitsukhija 🌸" },
    { src: "images/57.jpg", caption: "@iaditipandit  @akshitsukhija 🌸" },
    { src: "images/B.jpg", caption: "@iaditipandit  @akshitsukhija 🌸" },
    { src: "images/83.jpg", caption: "@iaditipandit  @akshitsukhija 🌸" },
    { src: "images/Q.jpg", caption: "@iaditipandit  @akshitsukhija 🌸" },
    { src: "images/R.jpg", caption: "@iaditipandit  @akshitsukhija 🌸" },
    { src: "images/105.jpg", caption: "@iaditipandit  @akshitsukhija 🌸" },

    { src: "images/109.jpg", caption: "@iaditipandit  @akshitsukhija 🌸" },
    { src: "images/92.jpg", caption: "@iaditipandit  @akshitsukhija 🌸" },
    { src: "images/5.jpg", caption: "@iaditipandit  @akshitsukhija 🌸" },
    { src: "images/J.jpg", caption: "@iaditipandit  @akshitsukhija 🌸" },
    { src: "images/56.jpg", caption: "@iaditipandit  @akshitsukhija 🌸" },
    { src: "images/104.jpg", caption: "@iaditipandit  @akshitsukhija 🌸" },
    { src: "images/107.jpg", caption: "@iaditipandit  @akshitsukhija 🌸" },
    { src: "images/T.jpg", caption: "@iaditipandit  @akshitsukhija 🌸" },
    { src: "images/S.jpg", caption: "@iaditipandit  @akshitsukhija 🌸" },
    { src: "images/G.jpg", caption: "@iaditipandit  @akshitsukhija 🌸" },
    { src: "images/E.jpg", caption: "@iaditipandit  @akshitsukhija 🌸" },
    { src: "images/Z.jpg", caption: "@iaditipandit  @akshitsukhija 🌸" },
    { src: "images/84.jpg", caption: "@iaditipandit  @akshitsukhija 🌸" },
    { src: "images/76.jpg", caption: "@iaditipandit  @akshitsukhija 🌸" },
    // You can keep adding more here...
];



let current = 0;
let interval;



const thumbnailGallery = document.getElementById("thumbnail-gallery");
const slideshow = document.getElementById("slideshow");
const slideshowImg = document.getElementById("slideshow-img");
const caption = document.getElementById("caption");
const music = document.getElementById("bg-music");



function startSlideshow() {
    const startButton = document.querySelector("button");
    const heartfeltScreen = document.getElementById("heartfelt-message-screen");
    const heartfeltText = document.getElementById("heartfelt-text");
    const heartfeltMusic = document.getElementById("heartfelt-music");


    // Hide front page
    startButton.style.display = "none";
    thumbnailGallery.style.display = "none";

    // Show heartfelt screen
    heartfeltScreen.style.display = "flex";
    heartfeltText.innerHTML = "";
    heartfeltMusic.currentTime = 0;
    heartfeltMusic.play();

    const message = "Ek taraf meri coding duniya... jahan lines of code chalte hain,<br>Aur doosri taraf aap dono — jahan har line ek ehsaas ban jaati hai. <br>Aaj dono duniya ek ho rahi hai…<br>Most Welcome, <span>Akshit Sukhija</span> & <span>Aditi Tripathi</span> — my forever favorite constants in this ever - changing code of life. 💻❤️";


    const words = message.split(" ");
    let index = 0;

    const wordInterval = setInterval(() => {
        if (index < words.length) {
            heartfeltText.innerHTML += words[index] + " ";
            index++;
        } else {
            clearInterval(wordInterval);

            // Stop music after message completes
            heartfeltMusic.pause();


            // Add fade-out class for smooth exit
            heartfeltScreen.classList.add("fade-out");

            // After fade-out ends (1s), hide the screen and start slideshow
            setTimeout(() => {
                heartfeltScreen.style.display = "none";
                heartfeltScreen.classList.remove("fade-out");
                actuallyStartSlideshow();
            }, 2000); // 1s = match with CSS fade-out duration
        }
    }, 500); // time between each word (adjustable)
}


function actuallyStartSlideshow() {
    slideshow.style.display = "block";
    music.currentTime = 0;
    music.play();
    current = 0;
    showImage(current);

    interval = setInterval(() => {
        current++;
        if (current < images.length) {
            showImage(current);
        } else {
            clearInterval(interval);
            music.pause();
            slideshow.style.display = "none";

            // Show thank you message
            const endMessage = document.getElementById("end-message");
            endMessage.style.display = "flex";

            // Wait 2.5 seconds, then go back to gallery
            setTimeout(() => {
                endMessage.style.display = "none";
                thumbnailGallery.style.display = "flex";
                // thumbnailGallery.classList.add("fade-in");
                document.querySelector("button").style.display = "inline-block";
            }, 2500);

        }
    }, 1000);
}



function showImage(index) {
    slideshowImg.src = images[index].src;
    caption.textContent = images[index].caption;
}
