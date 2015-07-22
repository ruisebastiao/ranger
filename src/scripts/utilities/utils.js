'use strict';

export function getMin (node, minAttr) {
    return parseInt(node.getAttribute(minAttr), 10);
}

export function getMax (node, maxAttr) {
    return parseInt(node.getAttribute(maxAttr), 10);
}

export function getSteps (node, stepAttr) {
    return parseInt(node.getAttribute(stepAttr), 10);
}

export function getValue (node, valAttr) {
    return parseInt(node.getAttribute(valAttr), 10);
}

//-- Prevent text selection while dragging
export function pauseEvent (e) {
    if (e.stopPropagation) {
         e.stopPropagation();
    }
    if (e.preventDefault) {
         e.preventDefault();
    }

    e.cancelBubble = true;
    e.returnValue = false;

    return false;
}

export function stopPropagation (e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    e.cancelBubble = true;
}

//-- Returns a function, that, as long as it continues to be invoked, will not
//-- be triggered. The function will be called after it stops being called for
//-- N milliseconds. If `immediate` is passed, trigger the function on the
//-- leading edge, instead of the trailing.
//-- http://davidwalsh.name/essential-javascript-functions?utm_source=javascriptweekly&utm_medium=email

export function debounce (func, wait, immediate) {
	let timeout;
	return function () {

		let context = this;
        let args = arguments;

		let later = function() {
			timeout = null;
			if (!immediate) {
                func.apply(context, args);
            }
		};

		let callNow = immediate && !timeout;
		clearTimeout(timeout);

		timeout = setTimeout(later, wait);

		if (callNow) {
            func.apply(context, args);
        }
	};
};
