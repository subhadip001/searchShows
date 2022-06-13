const form = document.querySelector("#searchForm")
const box = document.querySelector(".image-box")



form.addEventListener('submit' , async function (e){
    e.preventDefault()
    box.innerHTML = "";
    const query = form.elements.search.value;
    try{
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`)
    makeImages(res.data)
    }
    catch(e){
        box.innerHTML = "NO INTERNET CONNECTION :(" ;
    }
    form.elements.search.value =""
    
})

const makeImages = (shows) => {

    for(let result of shows){
        console.log(result)
        if(result.show.image){
            const imageLink = result.show.image.medium;
            const img = document.createElement("img")
            img.setAttribute("src" , imageLink)
            box.append(img)
        }
    }
    
}


