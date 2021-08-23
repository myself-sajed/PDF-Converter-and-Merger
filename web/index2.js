let imageArray = [];
let count = document.getElementById('count')
let convertButton = document.getElementById('convertButton')
let anotherButton = document.getElementById('Button')
$(document).ready(function () {
    $('input[type="file"]').change(function (e) {
        var fileName = e.target.files[0].name;
        imageArray.push(fileName);
        arrayLength = imageArray.length
        count.innerText = arrayLength
        console.log(imageArray);
        if (arrayLength > 1) {
            document.getElementById('i-container').innerHTML = `<div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="merge"
                value="option1" checked="checked">
            <label class="form-check-label" for="inlineRadio1">Convert & Merge into one PDF</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="separate"
                value="option2">
            <label class="form-check-label" for="inlineRadio2">Convert & Create separate PDFs </label>
        </div>`

        }



    });
});

convertButton.addEventListener('click', function () {
    if (imageArray.length == 0) {
        eel.chooseImages()
    }
    else if (imageArray.length == 1) {
        eel.onepdfConverter(imageArray)

    }
    else if (document.getElementById('merge').checked) {
        value = true
    }
    else if (document.getElementById('separate')) {
        value = false
    }
    else {
        value = 'ok'
    }
    eel.pdfConverter(imageArray, value);
})

eel.expose(imagesOnly)
function imagesOnly() {
    document.getElementById('msg').innerHTML = `<div class="alert alert-danger" role="alert">
    Choose Images only. Example : png, jpeg, etc.
  </div>`
    setTimeout(function () {
        document.location.reload()
    }, 2000)

    setTimeout(function () {
        document.getElementById('msg').innerHTML = ``
    }, 3000)
}

eel.expose(successfull)
function successfull() {
    document.getElementById('msg').innerHTML = `<div class="alert alert-success" role="alert">
    PDF Conversion Successfull!
  </div>`

    setTimeout(function () {
        document.getElementById('msg').innerHTML = ``
    }, 3000)

}

eel.expose(chooseImageFirst)
function chooseImageFirst() {
    document.getElementById('msg').innerHTML = `<div class="alert alert-warning" role="alert">
    Choose Images before Converting. Example : png, jpeg, etc.
  </div>`

    setTimeout(function () {
        document.getElementById('msg').innerHTML = ``
    }, 3000)

}