// $(document).on("click", ".action-buttons .dropdown-menu", function (e) {
//   e.stopPropagation();
// });

// $(document).ready(function () {
//   $(".filter-button").click(function () {

//     var value = $(this).attr("data-filter");

//     if (value == "semua") {
//       $(".filter").removeClass("hidden");
//       $(".filter").show("1000");
//     } else {
//       $('.filter[filter-item="' + value + '"]').removeClass("hidden");
//       $(".filter")
//         .not('.filter[filter-item="' + value + '"]')
//         .addClass("hidden");
//       $(".filter")
//         .not("." + value)
//         .hide("1000");
//       $(".filter")
//         .filter("." + value)
//         .show("1000");
//     }
//   });
// });

const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

const img = document.querySelectorAll('#imgs img')

let idx = 0

let interval = setInterval(run, 2000)

function run() {
    idx++
    changeImage()
}

function changeImage() {
    if(idx > img.length - 1) {
        idx = 0
    } else if(idx < 0) {
        idx = img.length - 1
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

rightBtn.addEventListener('click', () => {
    idx++
    changeImage()
    resetInterval()
})

leftBtn.addEventListener('click', () => {
    idx--
    changeImage()
    resetInterval()
})