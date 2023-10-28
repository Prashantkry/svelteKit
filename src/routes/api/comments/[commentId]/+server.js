import { json } from '@sveltejs/kit';
import { comments } from '$lib/comments.js';

export function GET(requestEvent) {
	const { params } = requestEvent;
	const { commentId } = params;
	const comment = comments.find((comment) => comment.id === parseInt(commentId));
	return json(comment);
}

/*
 ! Dynamic API Routes creation
 * To get data steps to be followed
    1 destructure params 
    2 destructure commentId which is a folder name 
    3 then find the individual comment 
    4 then respond with JSON format 
*/

// ! PATCH request
export async function PATCH(requestEvent) {
	const { params, request } = requestEvent;
	const { commentId } = params;
	const { text } = await request.json();
	const comment = comments.find((comment) => comment.id === parseInt(commentId));
	comment.text = text;
	return json(comment);
}




// ! DELETE request
export async function DELETE(requestEvent) {
	const { params } = requestEvent;
	const { commentId } = params;
	const deletedComment = comments.find((comment) => comment.id === parseInt(commentId));
    const index = comments.findIndex((comment) => comment.id === parseInt(commentId));
    comments.splice(index,1)
	return json(deletedComment);
}



