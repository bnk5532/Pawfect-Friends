async function imageCommentFormHandler(event) {
    event.preventDefault();
    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
  
    const image_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    if (comment_text) {
        console.log("this is comment_text if", comment_text);
        const response = await fetch('/api/imagecomments', {
          method: 'POST',
          body: JSON.stringify({
            image_id,
            comment_text
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
      
        if (response.ok) {
          document.location.reload();
        } else {
          alert(response.statusText);
        }
      }
  }
  
  document.querySelector('.image-comment-form').addEventListener('submit', imageCommentFormHandler);