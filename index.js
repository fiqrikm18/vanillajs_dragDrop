window.onload = function () {
    var draggable = document.getElementById("draggable");
    var dropzone = this.document.getElementsByClassName("dropzone");

    // drag start 
    draggable.addEventListener("dragstart", function() {
        for(let i = 0; i < dropzone.length; i++) {
            dropzone[i].classList.add("active");
        }
    });

    // drag end
    draggable.addEventListener("dragend", function() {
        for(let i = 0; i< dropzone.length; i++) {
            dropzone[i].classList.remove("active");
            dropzone[i].classList.add("over");
        }
    });

    // drag
    draggable.addEventListener("drag", function() {

    });

    for(let i = 0; i < dropzone.length; i++) {
        // drag enter
        dropzone[i].addEventListener("dragenter", function() {
            dropzone[i].classList.add("over");
        });

        // drag leave
        dropzone[i].addEventListener("dragleave", function() {
            dropzone[i].classList.remove("over");
        });

        // drag over
        dropzone[i].addEventListener("dragover", function(event) {
            event.preventDefault();
        });

        // on drop 
        dropzone[i].addEventListener("drop", function(event) {
            event.preventDefault();

            // will move dragable element only if dropped into different box
            if(event.target !=  draggable.parentNode && event.target != draggable) {
                draggable.parentNode.removeChild(draggable);
                event.target.appendChild(draggable);
            }
        });
    }
}