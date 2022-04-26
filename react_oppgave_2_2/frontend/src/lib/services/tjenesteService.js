


function getTjenester() {
    fetch("https://zngf27x6.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22service%22%5D").then(res => res.json()).then(data => console.log(data))

}

export{getTjenester}