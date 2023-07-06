// Get the modal
var modal = document.getElementById("myModal");


// Get the image and insert it inside the modal - use its "alt" text as a caption
var modelImages = document.getElementsByClassName("modelImages");

// Make an image
// Add modelImages ID
// Add alt text as the text at the bottom
// Image will be the src or data-image will be the image.
for(var i = 0; i < modelImages.length; ++i)
{
    var img = modelImages[i];
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        if (typeof this.dataset.image !== 'undefined')
        {
            modalImg.src = this.dataset.image;
        }
        captionText.innerHTML = this.alt;
    }
}


// Get the image and insert it inside the modal - use its "alt" text as a caption
var modelImagesParent = document.getElementsByClassName("modelImagesFromParent");

for(var i = 0; i < modelImagesParent.length; ++i)
{
    var img = modelImagesParent[i];
    var imgParent = img.parentNode.parentNode;
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    imgParent.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.dataset.image;
        captionText.innerHTML = this.dataset.context;
    }
}


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("modal")[0];

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
    modal.style.display = "none";
}