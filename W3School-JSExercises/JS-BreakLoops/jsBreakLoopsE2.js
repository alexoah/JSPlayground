/**
 *	from JavaScript Break Loops: Exercise 2 ( https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_break2 )
 *
 *	question:
 *	Make the loop jump to the next iteration when i is 5.
 *
 *	for (i = 0; i < 10; i++) {
 *		if (i == 5) {
 *			________;
 *		}
 *		console.log(i);
 *	}
 *
 */
for (i = 0; i < 10; i++) {
	if (i == 5) {
		continue;
	}
	console.log(i);
}