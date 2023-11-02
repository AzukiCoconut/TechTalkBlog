const addNewBtn = document.querySelector('#addNew');
const addPostArea = document.querySelector('.new-post');
const listPostArea = document.querySelector('.post-list');
const saveBtn = document.querySelector('#submit');

const addNewClick = () => {
    // manage the display of the dashboard when the 'add new' button is clicked
    addPostArea.style.display = 'block';
    listPostArea.style.display = 'none';
    addNewBtn.style.display = 'none';
};

const addNewBlog = async () => {
    // collect data from the form
    const title = document.querySelector('#title').value.trim();
    const text = document.querySelector('#text').value.trim();
    
    // Send the POST request to the API
    if (title && text) {
        const response = await fetch('/api/blogposts', {
            method: 'POST',
            body: JSON.stringify({ title, text }),
            headers: { 'Content-Type':'application/json'},
        });

        // If successful redirect back to the dashboard
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

// Event handlers
addNewBtn.addEventListener('click', addNewClick);
saveBtn.addEventListener('click', addNewBlog);



