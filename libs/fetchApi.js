import qs from 'qs';    

export async function fetchAPI(path, paramsObj={}, options={}){
    const {headers, ...option} = options
    const mergedOption = {
        headers: {
            "Content-Type": "application/json",
            ...headers 
        },
        ...option
    }

    const params = {
        "app_id" : "189e6750",
        "app_key" :"b52dae2d0dc1b7db57b13dfd7e1b5ae2" ,
        "diet" : ['high-fiber', 'high-protein', 'low-carb', 'low-fat', 'low-sodium'],
        "health" : ['gluten-free', 'low-sugar', 'sugar-conscious', 'alcohol-free'],
        ...paramsObj
    }

    const queryStr = qs.stringify(params)
    const reqURL = `https://api.edamam.com/api${path}${queryStr? `?${queryStr}` : ""}`

    const res = await fetch(reqURL, mergedOption)

    if(res.status == 200){
        const resJSON = await res.json();
        return resJSON;
    }

    console.log(`${res.status} :Fetching Error`)
    return;
}

export async function getRandomRecipe(query){

    const res = await fetchAPI('/v2/recipe', )
}
