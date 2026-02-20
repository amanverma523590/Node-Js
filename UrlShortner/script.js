document.getElementById('form').addEventListener('submit',(e)=>{
    e.preventDefault();

    const formData = new FormData(e.target);
    const url = formData.get('url');
    const shortcode = formData.get('shortcode')

    console.log(url,shortcode)
})