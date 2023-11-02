const submitButton = document.querySelector('.btn');

const addComment = async (event) => {
    event.preventDefault();
    
    // collect input from the comment form
    const text = document.querySelector('#text').value.trim();
    const blogpost_id = document.querySelector('#text').getAttribute('data-post-id');

    if (text && blogpost_id) {
        //Send the POST request to the API
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({text, blogpost_id}),
            headers: { 'Content-Type': 'application/json'},
        });
        // if successful redirect to blogpost page.
        if (response.ok) {
            document.location.replace(`/blogpost/${blogpost_id}`);
        } else {
            alert(response.statusText);
        }
    }
};

// Event Handler
submitButton.addEventListener('click', addComment);