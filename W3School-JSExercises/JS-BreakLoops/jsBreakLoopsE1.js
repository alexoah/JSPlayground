/**
 *	from JavaScript Break Loops: Exercise 1 ( https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_break1 )
 *
 *	question:
 *	Make the loop stop when i is 5.
 *
 *	for (i = 0; i < 10; i++) {
 *		console.log(i);
 *		if (i == 5) {
 *			_____;
 *		}
 *	}
 *
 */
for (i = 0; i < 10; i++) {
	console.log(i);
	if (i == 5) {
		break;
	}
}