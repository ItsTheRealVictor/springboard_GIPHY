const $term = $('.searchText')

$('#search').on('submit', function(evt){
    evt.preventDefault()
    
    let term = $term.val()
    
    
    $("form").on("submit", async function(evt) {
        evt.preventDefault();
      
        let term = $searchInput.val();
        $searchInput.val("");
      
        const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
          params: {
            q: term,
            api_key: "qHUL6XPx3AgHw7Rh0Ivj6sGK8lOq6fCX"
          }
        });
        addGif(response.data);
      });
})


async function showStuff(query){
    const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=qHUL6XPx3AgHw7Rh0Ivj6sGK8lOq6fCX&q=${query}&limit=25&offset=0&rating=g&lang=en`)

    for (dataPoint of response.data.data){
        console.log(dataPoint.title)
    }
}