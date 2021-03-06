//Document Object Model (the DOM)
//term for elements in an HTML file

// SELECTING A HTML ELEMENT //
//select an HTML element w/ JavaScript by selecting the class attribute:
  var header = document.getElementsByClassName('example-class-name');
// that would find an element like this in the HTML
  <div class='example-class-name'> ... </div>

// if HTML code looks like this:
  <div class='skillset'>

//then the js code will look like this:
  var skillset = document.getElementsByClassName('skillset');
//That's called selecting an [onject HTMLCollection]

// INTRODUCING jQUERY //
// jQuery is a JavaScript library used to select multiple HTML elements

/* To use jQuery
1. Since jQuery is a library of code, we need to include a link to it in our index.html file before we can use it. Before the closing </body> tag, right above your current <script> tag, include this code:
*/
<script src='https://code.jquery.com/jquery-3.1.0.min.js'></script>
// The link to jQuery needs to be above the link to the js/main.js file, which will give main.js access to the jQuery library.

/*
2. Once we link it in our HTML file, we can use its functions and syntax in our js/main.js file.
Once linked, we'll need to make sure our HTML is loaded before we run our jQuery and JavaScript code.

This will prevent our jQuery and JavaScript code from running before the elements they select are rendered.

3. jQuery has a built in function to check if the page is ready before it will run our code. After the main function, write this code: */
function main(){}
$(document).ready(main);
/* Notice that we put main inside the parentheses of ready. main here is a callback, which means that our code will wait until the document (in other words, the DOM) is loaded, or ready. When it is, then it will execute the main function. jQuery calls back to the main function, therefore it's a callback. */

//With plain JavaScript we selected an HTML element with this code:
document.getElementsByClassName('skillset');

//With jQuery we can select the same element with:
$('.skillset');
/* We can wrap any CSS selector, like class, id, or tag, with $('.example-class') to select it with jQuery.
The selectors jQuery uses are the exact same as CSS selectors. For instance, if there's an element with a class of supporting-text, you could select it with $('.supporting-text'). Another example, if an element had an id of 'header', you could select it with $('#header') */

//if HTML tag looks like this:
<div class='skillset'>
//then jQuery will look like this:
function main(){
  var $skillset = $('.skillset');
  alert($skillset);
}
$(document).ready(main);

// MODIFYING WITH jQuery //


// FADE IN //
function main(){
  $('.skillset').hide();
  $('.skillset').fadeIn(1000);
}

// ON-CLICK //
$('.example-class').on('click', function() {
  // execute the code here when .example-class is clicked.
});

//some cool jQuery for hiding a section, showing upon click, changing color after click, changing text after click, and sliding in info upon click
function main() {
  $('.skillset').hide();
  $('.skillset').fadeIn(1000);

  $('.projects').hide();

  $('.projects-button').on('click', function() {
    $(this).next().slideToggle(400);
    $(this).toggleClass('active');
    $(this).text('Projects Viewed');

	});
}

$(document).ready(main);
