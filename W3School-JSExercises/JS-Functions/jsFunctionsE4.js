/**
 *	from JavaScript Functions: Exercise 4 ( https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_functions4 )
 *
 *	question:
 *	Make the function display "Hello" in the inner HTML of an element with the ID "demo".
 *
 *	function myFunction() {
 *		document.______________("demo")._________ = "Hello";
 *	}
 *
 */
function myFunction() {
	document.getElementById("demo").innerHTML = "Hello";
}