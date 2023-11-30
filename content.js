//checking if mic or camera in use
function checkMicCameraUsage() {
    const mediaDevices = navigator.mediaDevices || {};
  
    mediaDevices.enumerateDevices().then((devices) => {
      const hasMicOrCamera = devices.some(
        (device) => device.kind === "audioinput" || device.kind === "videoinput"
      );
  
      if (hasMicOrCamera) {
        chrome.runtime.sendMessage({ action: "micCameraInUse" });
      }
    });
  }

  checkMicCameraUsage();

  