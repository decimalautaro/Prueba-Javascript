export const http = async (url, method, data) => {

    let options = {
        method: "GET"
    }

    if (method == "POST" || method == "PUT") {
        options = {
            method: method,
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }
    }
    const petition = await fetch(url, options);
    const response = await petition.json();

    return {
        response
    }
}