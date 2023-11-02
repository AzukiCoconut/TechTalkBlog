const submit = document.querySelector('#submit');
const cancel = document.querySelector('#cancel');
const deleteBtn = document.querySelector('#delete');

// Handle the blog post update
const updateBlogPost = async (event) => {
    event.preventDefault();

    // Collect the information from the form
    const title = document.querySelector('#title').value.trim();
    const text = document.querySelector('#text').value.trim();
    const id = document.querySelector('#title').getAttribute('data-post-id');

    if (title && text && id) {
        //Send the PUT to the API
        const response = await fetch(`/api/blogposts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({id, title, text}),
            headers: { 'Content-Type': 'application/json'},
        });

        // if response is successful, redirect back to the dashboard
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert (response.statusText);
        }
    }
};

//Handle the blog post delete
const deletePost = async (event) => {
    event.preventDefault();

    // Collect the post id
    const id = document.querySelector('#title').getAttribute('data-post-id');

    // Send the DELETE request to the API
    const response = await fetch(`/api/blogposts/${id}`, {
        method: 'DELETE',
    });

    // if successful, redirect back to the dashboard
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
};

// Handles the cancel button event
const cancelUpdate = async (event) => {
    event.preventDefault();

    // redirect back to dashboard
    document.location.replace('/dashboard');
}

//Event handlers
deleteBtn.addEventListener('click', deletePost);
submit.addEventListener('click', updateBlogPost);
cancel.addEventListener('click', cancelUpdate);