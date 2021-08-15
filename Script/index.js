$('.iconmenu').click(function () {
    $('.menu_container').toggleClass('menu_items')
})
$('.carousel').carousel()

document.addEventListener('DOMContentLoaded', function () {
    var img = [
        "https://i.pinimg.com/originals/f2/75/1c/f2751c25fe1f3e95dec1e68ab005ef89.jpg",
        "https://cdn.wallpapersafari.com/72/88/VrHBJd.jpg",
        "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
        "https://img3.thuthuatphanmem.vn/uploads/2019/06/10/hinh-nen-lamborghini-do_125043197.jpg",
        "https://i.ytimg.com/vi/1AWUqgZ_gJY/maxresdefault.jpg",
        "https://images8.alphacoders.com/685/685679.jpg",
        "https://anhdepblog.com/wp-content/uploads/2018/01/lamborghini-4k-dep-6.jpg",
        "https://media1.nguoiduatin.vn/thumb_x600x600/media/cao-thu-hang/2019/04/24/mercedes-maybach-s650.jpg",
        "https://muabanxesang.vn/uploads/2020/12/03/2020_12_03______b7c8bf2bd7572cd0d7d657a2884df021.jpg",
        "https://images.hdqwalls.com/wallpapers/mercedes-maybach-s-650-4k-nn.jpg",
    ]
    var content = [
        "For the first time in the World, a DJI drone performed a track race at the famous Modena racetrack with one of the fastest supercars currently on the market, the Lamborghini Huracan EVO",
        "The maximum speed is 325 km/h. These characteristics make the Huracan EVO one of the most competitive on the track.",
        "It is the only FPV drone in the world to have flight modes that make it easy to use by both beginners and experienced pilots thanks to the extreme flight configurations.",
        "The challenger is the new DJI FPV COMBO drone, with a weight of just 795 grams and an acceleration from 0 to 100 km/h in 2 seconds and a maximum speed of 140 Km/h.",
        "The DJI FPV Combo features a two-axis stabilized camera with a rocksteady system and a maximum resolution of 4K at 60 fps. Flight time is about 20 minutes.",
        "Compared to the first car that returned to Vietnam in 2020 in Hanoi, the second one that just returned to Saigon in early 2021 has a black and silver exterior. In addition, the car's wheels also have a different design than the familiar style of Maybach Pullman.",
        "Right from the launch, Mercedes said the target market for Pullman was the government, politicians and the royal family. Therefore, the 3-pointed star brand produces very few versions of this version",
        "The glass splints on both sides are made of shiny chrome plated metal. The class and difference of the Mercedes-Maybach S650 Pullman lies in the interior compartment of the car.",
        "Mercedes arranged up to 4 seats facing each other, bringing the total number of seats of the car to 6. 2 seats with the cabin compartment can be collapsed when not in use to increase space for the 2 main seats.",
        "When in the folded state, the underside of the chair will appear an electronic screen to help users adjust systems such as air conditioning, sound, relaxation, ...",
    ]

    var months = [
        "01-11-2020",
        "01-12-2020",
        "01-01-2021",
        "01-02-2021",
        "01-03-2021",
        "01-04-2021",
        "01-05-2021",
        "01-06-2021",
        "01-07-2021",
        "01-08-2021",
        "01-09-2021",
    ]


    var comments = [
        `<div id="comment_0" class="fb-comments d-none" data-href="http://andy-autos.herokuapp.com/index.html" data-width="" data-numposts="5"></div>`,
        `<div id="comment_1" class="fb-comments d-none" data-href="http://andy-autos.herokuapp.com/1" data-width="" data-numposts="5"></div>`,
        `<div id="comment_2" class="fb-comments d-none" data-href="http://andy-autos.herokuapp.com/2" data-width="" data-numposts="5"></div>`,
        `<div id="comment_3" class="fb-comments d-none" data-href="http://andy-autos.herokuapp.com/3" data-width="" data-numposts="5"></div>`,
        `<div id="comment_4" class="fb-comments d-none" data-href="http://andy-autos.herokuapp.com/4" data-width="" data-numposts="5"></div>`,
        `<div id="comment_5" class="fb-comments d-none" data-href="http://andy-autos.herokuapp.com/5" data-width="" data-numposts="5"></div>`,
        `<div id="comment_6" class="fb-comments d-none" data-href="http://andy-autos.herokuapp.com/6" data-width="" data-numposts="5"></div>`,
        `<div id="comment_7" class="fb-comments d-none" data-href="http://andy-autos.herokuapp.com/7" data-width="" data-numposts="5"></div>`,
        `<div id="comment_8" class="fb-comments d-none" data-href="http://andy-autos.herokuapp.com/8" data-width="" data-numposts="5"></div>`,
        `<div id="comment_9" class="fb-comments d-none" data-href="http://andy-autos.herokuapp.com/9" data-width="" data-numposts="5"></div>`,
    ]



    for (let i = img.length - 1; i >= 0; i--) {
        $('.content').append(`<div style="min-height: 420px; overflow: hidden; margin-top: 20px" class="col-12 col-md-6">
            <div style="height: 300px;margin-bottom: 10px" class="col-12"><img onclick="show_image(this.src)" style="cursor: pointer;border-radius: 8px;width: 100%; height: 100%; object-fit: cover" src="${img[i]}"></div>
            <p>${months[i]}</p>
            <div class="col-12"><p>${content[i]}</p></div>
            <div class="col-12">
            <i style="font-size: 25px; color: #727171" class="fas fa-share-square"></i>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <i slot="${i}" onclick="comment(this.slot)" style="font-size: 25px; color: #727171" class="fas fa-comments"></i>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <i style="font-size: 25px; color: #5d88ff" class="far fa-heart"></i>
            ${comments[i]}
</div>
</div>`)
    }
})

function comment(id) {
    $(`#comment_${id}`).toggleClass('d-none')
}








// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}







function show_image(src){
    modal.style.display = "block";
    modalImg.src = src;
    modalImg.alt = hello;
}
