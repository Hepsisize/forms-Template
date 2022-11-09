//convert bites to MB
export const fileSize = sizeInBytes => (sizeInBytes / 1e6).toFixed(2);

export const totalSize = files => {
  const size = files.reduce((a, b) => a + b.size, 0);
  return fileSize(size);
};

export const getSingleBase64 = file => {
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () =>
      resolve({
        content: reader.result.split(",")[1],
        type: "image",
        filename: file.name,
      });
  });
};

export const arrayOfAttachments = files => {
  const promisesArr = files.map(getSingleBase64);
  return Promise.all(promisesArr);
};

export const getFilesNames = filesArray => {
  if (!filesArray.length) return "-";
  let names;
  if (typeof filesArray[0] !== "string") {
    const namesArray = filesArray.map(file => file.filename);
    names = namesArray.join(", ");
  } else {
    names = filesArray.join(", ");
  }
  return names;
};
