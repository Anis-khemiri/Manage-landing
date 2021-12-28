// Get Slider Item | Array.from [ES6 Feature]
var sliderImages = Array.from(document.querySelectorAll('.testimonial-slide section.testimonial'));

// Get Number of Slides
var slidesCount = sliderImages.length;

// set current slide
var currentSlide = 1;

// slide Number Element 
var slideNumberElement = document.getElementById('slide-number');

// Previous and Next Nuttons
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');

// Handle Click on Previous and Next Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// create the main Ul element
var paginationElement = document.createElement('ul');
// set id On Created Ul Element 
paginationElement.setAttribute('id', 'pagination-ul');
// create List Items Based On Slides Count
for (var i = 1; i <= slidesCount; i++) {
    // Create The LI
    var paginationItem = document.createElement('li');
    // set Custom Attribute
    paginationItem.setAttribute('data-index', i);
    // Set Item Content
    paginationItem.appendChild(document.createTextNode(i));
    // Append Items to the Main UI List
    paginationElement.appendChild(paginationItem);

}
// Add the Created UL Element to the page
document.getElementById('indicators').appendChild(paginationElement);


// Get the New Created UL
var paginationCreatedUl = document.getElementById('pagination-ul');

// Get pagination items | Array.from [ES6 Feature]
var paginationsBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

// loop through All bullets Items
for (var i = 0; i < paginationsBullets.length; i++) {
    paginationsBullets[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute('data-index'));
        theCheker();
    }
}






// Trigger the Cheker Function
theCheker();




// Next Slide Function
function nextSlide() {
    if (nextButton.classList.contains('disabled')) {
        // do nothing
        return false;
    } else {
        currentSlide++;
        theCheker();
    }
}


// Next Slide Function
function prevSlide() {
    if (prevButton.classList.contains('disabled')) {
        // do nothing
        return false;
    } else {
        currentSlide--;
        theCheker();
    }
}

// create the cheker function
function theCheker() {
    // set the slide number

    slideNumberElement.textContent = 'Slide #' + (currentSlide) + 'of' + (slidesCount);
    
    removeAllActive();
    

// set Active Class On Current Slide
sliderImages[currentSlide - 1].classList.add('active');
// Set Active Class on Current Pagination Item
paginationCreatedUl.children[currentSlide - 1].classList.add('active');
showSlide();


// check if Current Slide is The First
if (currentSlide == 1) {
    // Add Disabled Class on Previous Button
    prevButton.classList.add('disabled');

}else {
    // remove disabled class from previous button

    prevButton.classList.remove('disabled'); 
}
if (currentSlide == slidesCount) {
    // Add Disabled Class on next Button
    nextButton.classList.add('disabled');

}else {
    // remove disabled class from next button

    nextButton.classList.remove('disabled'); 
}
}



function showSlide() {


    
        // loop through Images
        sliderImages.forEach(function(img) {
            if(img.classList.contains('active') ) {
                img.classList.remove('disabled');
            } else {
                
                img.classList.add('disabled');

            }

            
    
        });


       


    }









// Remove All Active Class From Images and Pagination bullets
function removeAllActive() {
    // loop through Images
    sliderImages.forEach(function(img) {
        img.classList.remove('active');

    });
    // loop through Paginations
    paginationsBullets.forEach(function(bullet) {
       bullet.classList.remove('active');
    });

}


console.log(sliderImages[i]);

// function moveToNext() {
//     if (currentSlide == slidesCount) {
//         return currentSlide == 0;
//     } else {
//         currentSlide++;
//     }
//     setTimeout("moveToNext()", 2000);
// }


let toggleIcon = document.querySelector(".toggle-menu");

let tlinks = document.querySelector(".links");
let overlayShow = document.querySelector(".overlay");


toggleIcon.onclick = function () {
    this.classList.toggle("menu-active");
    tlinks.classList.toggle("menu-active");
    overlayShow.classList.toggle("menu-active");
}
