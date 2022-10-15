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
        "app_id" : "750c755a",
        "app_key" :"9bd46b46d5337fc020d778dc0dfca886" 	,
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
