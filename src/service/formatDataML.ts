

export async function mlFormatData(data: any) {
    let acs = extractACs(data);
    let us = JSON.stringify(data.us);
    let us_number = data.us_number
    let res = await checkRequirements(us, acs, us_number);
    return res;
}

function extractACs(data: any) {
    return [data.ac1, data.ac2, data.ac3];
}

const checkRequirements = async (us: any, acs: any, us_number: any) => {
    // Send requests in parallel if they are independent
    const [acResponse, usResponse] = await Promise.all([
        fetch(import.meta.env.VITE_ML_API_URL + "/predict", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "us_number": us_number,
                "description": acs,
                "category": "AC"
            })
        }),
        fetch(import.meta.env.VITE_ML_API_URL + "/predict", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "us_number": us_number,
                "description": [us],
                "category": "US"
            })
        })
    ]);

    // Check for response status
    if (!acResponse.ok || !usResponse.ok) {
        throw new Error('Network response was not ok');
    }
    const [acResp, usResp] = await Promise.all([
        acResponse.json(),
        usResponse.json()
    ]);

    return {
        "acs": acResp,
        "us": usResp
    };

}
