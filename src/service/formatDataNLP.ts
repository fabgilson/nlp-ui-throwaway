export async function nlpFormatData(data: any) {
    let acs = extractACs(data);
    let us = JSON.stringify(data.us);
    let us_number = data.us_number
    const results = {
        "acs": await checkACs(acs, us_number),
        "us": await checkUS(us, us_number)
    }
    return results
}

function extractACs(data: any) {
    return [data.ac1, data.ac2, data.ac3];
}

const checkACs = async (acs: any, us_number: any) => {
    const response = await fetch(import.meta.env.VITE_NLP_API_URL + "/ac", {
        method: "POST",
        headers: {
            'Content-Type' : 'application/json'
            },
        body: JSON.stringify({
            "us_number": us_number,
            "acceptance_criteria": acs
        })
    })
    const responseData = await response.json();
    return responseData
}

const checkUS = async (us: any, us_number: any) => {
    const response = await fetch(import.meta.env.VITE_NLP_API_URL + "/story", {
        method: "POST",
        headers: {
            'Content-Type' : 'application/json'
            },
        body: JSON.stringify({
            "us_number": us_number,
            "story_text": us
        })
    })
    const responseData = await response.json();
    return responseData
}
