let imgdiv = document.querySelector(".page-img");
let fileInput = document.querySelector("#fileInput");
let  uploadedImage = document.querySelector("#uploadedImage")
fileInput.addEventListener("change", function () {
    const file = fileInput.files[0];
    if (file) {
        uploadedImage.src = URL.createObjectURL(file);
    }
});
