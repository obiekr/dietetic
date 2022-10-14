import qs from 'qs';    

/** 
 * @param {string} path path of URL
 * @param {string} paramsObj Object of params 
 * @param {string} options Object of options
 */

 async function fetchAPI(path, paramsObj={}, options={}){
    const {headers, ...option} = options
    const mergedOption = {
        headers: {
            "Content-Type": "application/json",
            ...headers 
        },
        ...option
    }

    const queryStr = qs.stringify(paramsObj)
    const reqURL = ` https://api.edamam.com/api${path}${queryStr? `?${queryStr}` : ""}`

    const res = await fetch(reqURL, mergedOption)

    if(res.status == 200){
        const resJSON = await res.json();
        return resJSON;
    }

    console.log(`${res.status} :Fetching Error`)
    return;
}