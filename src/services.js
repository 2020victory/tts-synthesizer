export const fetchAudio = (url, callback) => {
    callback();
    fetch(url)
        .then((res) => {
            if (res.status !== 200) {
                callback(null);
                console.log(res);
                return;
            }
            const contentType = res.headers.get("Content-Type");
            if (contentType === "audio/wav") {
                res
                    .blob()
                    .then((blob) => URL.createObjectURL(blob))
                    .then((res) => callback(res));
            } else {
                console.log(res);
                callback(null);
            }
        })
        .catch(() => callback(null));
};