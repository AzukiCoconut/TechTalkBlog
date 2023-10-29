const submitButton = document.querySelector('.btn');

const addComment = async (event) => {
    event.preventDefault();
    console.log("button Clicked");
    const text = document.querySelector('#text').value.trim();
    console.log(text);
    const blogpost_id = document.querySelector('#text').getAttribute('data-post-id');
    console.log(blogpost_id);

    if (text && blogpost_id) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({text, blogpost_id}),
            headers: { 'Content-Type': 'application/json'},
        });

        if (response.ok) {
            document.location.replace(`/blogpost/${blogpost_id}`);
        } else {
            alert(response.statusText);
        }
    }
};

submitButton.addEventListener('click', addComment);