const h1Text = [
    "Your New Habit Starts Today", "Track. Improve. Repeat.", "Master Your Daily Routine" ,"Stay Consistent, Stay Empowered", "Small Steps, Big Changes"
]

$(document).ready(function(){
    setInterval(function(){
        let randomNum = Math.floor(Math.random() * h1Text.length);
        $(".h1Text").fadeOut(400, function() {
            $(this).text(h1Text[randomNum]).fadeIn(400);
        });
    }, 3000); // Disarankan 3 detik agar lebih enak dibaca
});
