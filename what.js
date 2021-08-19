async function startCapture(displayMediaOptions) {
  let captureStream = null;

  try {
    // captureStream = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
    captureStream = await navigator.mediaDevices.getDisplayMedia({audio:true, video:true});
  } catch(err) {
    console.error("Error: " + err);
  }
  return captureStream;
}
