const url = "https://api.cloudinary.com/v1_1/roga/image/upload";
export default function UrlCloud(imageData) {
  const imagePromises = Array.from(imageData).map((file) => {
    const fd = new FormData();
    console.log(Array.from(imageData));
    console.log(file);
    fd.append("upload_preset", "ttfi7jsb");
    fd.append("cloud_name", "roga");
    fd.append("file", file);
    return fetch(url, {
      method: "POST",
      body: fd,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return data.secure_url;
      });
  });

  return Promise.all(imagePromises);
}
