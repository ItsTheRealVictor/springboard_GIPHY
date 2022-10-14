const $searchTerm = $('.searchText')

$('#search').on('submit', async function(evt){
    evt.preventDefault()
    

        evt.preventDefault();
      
        let term = $searchTerm.val();
      
        const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
          params: {
            q: term,
            api_key: "qHUL6XPx3AgHw7Rh0Ivj6sGK8lOq6fCX"
          }
        });
        for (let dataPoint of response.data.data){
            console.log(dataPoint.title)
        };
      });

