$(document).ready(function(){
    $('#calculate').click(function() {
        let min = parseInt($('#min').val());
        let max = parseInt($('#max').val());
        
        let result = sumOfOddNumbers(min, max);
        $('#result').text("Result: " + result);
    });

    function sumOfOddNumbers(min, max) {
        let total = 0;
        for (let i = min; i <= max; i++) {
            if (i % 2 !== 0) {
                total += i;
            }
        }
        return total;
    }


    // Function to change text alignment
    let alignment = 'left';
    $('#alignButton').click(function() {
        // Mengubah alignment sesuai dengan urutan kiri -> tengah -> kanan
        if (alignment === 'left') {
            $('body').removeClass('text-left').addClass('text-center');
            alignment = 'center';
        } else if (alignment === 'center') {
            $('body').removeClass('text-center').addClass('text-left');
            alignment = 'left';
        }
    });


    // Function to change box color
    let originalColor = $('#card1').css('background-color');
    let colorBox = $('.color-box');
    $('#colorButton').click(function() {
        console.log("Original Color:", originalColor);
        console.log("Current Background Color:", colorBox.css('background-color'));
    
        // Jika warna latar belakang bukan originalColor
        if (colorBox.css('background-color') != originalColor) {
            colorBox.css('background-color', originalColor); // Ubah ke warna asli
            colorBox.css('color', 'black');
        } else {
            colorBox.css('background-color', 'red'); // Ubah ke warna biru
            colorBox.css('color', 'white');
        }
    });

    // Dapatkan tombol Calculator
    const calculatorButton = document.getElementById('calculatorButton');
    // Dapatkan kontainer Kalkulator
    const calculatorContainer = document.getElementById('calculatorContainer');

    // Tambahkan event listener ke tombol Calculator
    calculatorButton.addEventListener('click', function() {
        // Periksa apakah kontainer Kalkulator sedang ditampilkan atau tidak
        if (calculatorContainer.style.display === 'none') {
            // Jika sedang disembunyikan, tampilkan
            calculatorContainer.style.display = 'block';
        } else {
            // Jika sedang ditampilkan, sembunyikan
            calculatorContainer.style.display = 'none';
        }
    });
});
