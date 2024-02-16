const body = document.querySelector("body");
const follower = document.querySelector(".follower");

const mouseMoves = [];

const followerLocation = {
    x: 0,
    y: 0
}

body.addEventListener("mousemove", (e) => {
    follower.style.opacity = "1";
    setTimeout(() => {
        mouseMoves.push({
            x: e.x,
            y: e.y
        })
    }, 50)
});

function follow() {
        const move = mouseMoves.shift()
        follower.style.transform = `translate(${move.x -25}px, ${move.y - 25}px)`
}

function animate() {
    if (mouseMoves.length) {
        follow();
    }else {
        follower.style.opacity = "0";
    }
    window.requestAnimationFrame(animate)
}

animate();