// C:\Users\KN\Desktop\PDF Merger

let pdfArray = [];
let count = document.getElementById('count')
let mergeButton = document.getElementById('mergeButton')
$(document).ready(function () {
  $('input[type="file"]').change(function (e) {
    var fileName = e.target.files[0].name;
    console.log(e.target.files[0].mozFullPath);
    pdfArray.push(fileName);
    arrayLength = pdfArray.length
    count.innerText = arrayLength
    console.log(pdfArray);

  });
});

mergeButton.addEventListener('click', function () {
  eel.pdfMaker(pdfArray)
})

eel.expose(success)
function success() {
  document.getElementById('msg').innerHTML = `<div class="alert alert-success" role="alert">
    PDF Merged Successfully!
  </div>`

  setTimeout(function () {
    document.getElementById('msg').innerHTML = ``
  }, 3000)

}

eel.expose(error)
function error(n) {
  document.getElementById('msg').innerHTML = `<div class="alert alert-danger" role="alert">
    Choose PDF Only, removing selected file...
  </div>`
  count.innerText = n

  setTimeout(function () {
    document.getElementById('msg').innerHTML = ``
  }, 3000)
}

eel.expose(selectPDF)
function selectPDF() {
  document.getElementById('msg').innerHTML = `<div class="alert alert-warning" role="alert">
    Ohho! Please select at least two PDF's to perform merging.
  </div>`

  setTimeout(function () {
    document.getElementById('msg').innerHTML = ``
  }, 3000)
}

eel.expose(selectTwoPDF)
function selectTwoPDF() {
  document.getElementById('msg').innerHTML = `<div class="alert alert-info" role="alert">
    Select at one more PDF to perform merging.
  </div>`

  setTimeout(function () {
    document.getElementById('msg').innerHTML = ``
  }, 3000)
}


eel.expose(otherFile)
function otherFile(pdfList) {

  mergeButton.addEventListener('click', function () {
    eel.pdfMaker(pdfList)
  })


}




