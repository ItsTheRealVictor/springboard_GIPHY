const $searchTerm = $('.searchText')
const $remove = $('.removeButt')


$('#search').on('submit', async function(evt){
    evt.preventDefault()
    
    
    
    let term = $searchTerm.val();
    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
        q: term,
        api_key: "qHUL6XPx3AgHw7Rh0Ivj6sGK8lOq6fCX"
        }
    });

    //for debugging purposes
    // console.log('# of gifs: ' + response.data.data.length)
    // for (let dataPoint of response.data.data){
        //     console.log(dataPoint)
        // };
        
        
        addGif()
        function addGif() {
            
            // the response gives you 50 gifs, we'll take a random index between 0 and 50
            let randomIndex = Math.floor(Math.random() * 50)
            
            // for debugging
            console.log(randomIndex) 
            
            // grab a random gif
            const gifURL = response.data.data[randomIndex].images.original.url
            
            // wrap it in a div, add a gifElement class in case we want to mess with its CSS later on
            const imgDiv = document.createElement('div')
            imgDiv.classList.add('gifElm')
            
            // append it to the larger gifHolder container 
            $('.gifHolder').append(imgDiv)
            $(imgDiv).append($('<img/>', {src:gifURL})) //
        }
    });
    
    $remove.on('click', function(){
        // clears all gifs out of the gifHolder container div
        $('.gifHolder').empty()
    })
    