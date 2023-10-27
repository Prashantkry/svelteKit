export function match(param) {
	return /^\d+$/.test(param);
}


/* Idea is match the integer and then file name then passes as digit in regex then 
    return true or false 
    function name Must be match as of svelte kit convention

    for this on DynamicRouting -> [productId=integer] had
        to be renamed then only it will work 
    It help to get rid of un necessary routing error
*/


