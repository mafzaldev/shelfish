import html2canvas from "html2canvas";

const exportAsImage = async (element, imageFileName) => {
  const canvas = await html2canvas(element);
  const image = canvas.toDataURL("image/png", 1.0);
  downloadImage(image, imageFileName);
};

const downloadImage = (blob, fileName) => {
  const downloadLink = window.document.createElement("a");
  downloadLink.style = "display:none;";
  downloadLink.download = fileName;
  downloadLink.href = blob;

  document.body.appendChild(downloadLink);
  downloadLink.click();

  document.body.removeChild(downloadLink);
  downloadLink.remove();
};

export default exportAsImage;
