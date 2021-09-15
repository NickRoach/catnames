const remoteURL = "https://catnames-api-j2bcdgtj5a-ts.a.run.app/";
const localURL = "http://localhost:8086/";
const hopto = "http://nicksipcam.hopto.org:83";
const url = remoteURL;

export const getNames = async () => {
    const responsePromise = fetch(url);
    const response = await responsePromise;
    const jsonResponse = await response.json();
    return jsonResponse;
};

const headerObject = {
    Accept: "application/json",
    "Content-Type": "application/json",
};

export const addName = async (name, occupation) => {
    const newcat = {
        name: name,
        occupation: occupation,
    };
    const responsePromise = fetch(url, {
        method: "POST",
        headers: headerObject,
        body: JSON.stringify(newcat),
    });
    const response = await responsePromise;
    const jsonResponse = await response.json();
    return jsonResponse;
};

export const deleteName = async (id) => {
    const toDelete = {
        id: id,
    };
    const responsePromise = fetch(url, {
        method: "DELETE",
        headers: headerObject,
        body: JSON.stringify(toDelete),
    });
    const response = await responsePromise;
    const jsonResponse = await response.json();
    return jsonResponse;
};
