const statusPage = document.getElementById('statusPage');
const uploadStatusBtn = document.getElementById('uploadbtn');
const statusFileInput = document.getElementById('status-file');
const statusPlayerCircle = document.getElementById('statusPlayer');
const statusTimer = document.getElementById('statusTimer');
const statusPlayerImage = document.getElementById('status-player-image');
const statusPlayerVideo = document.getElementById('status-player-video');
let hideTimer;

// Function to handle file upload and display status
function handleFileUpload() {
  const file = statusFileInput.files[0];
  if (!file) return;

  const fileType = file.type.split('/')[0];
  const fileUrl = URL.createObjectURL(file);

  const timestamp = new Date().toLocaleString(); // Get the current timestamp

  const statusItem = document.createElement('div');
  statusItem.classList.add('status-item');

  // Use a container to position the image and timestamp side by side
  const statusContent = document.createElement('div');
  statusContent.classList.add('status-content');
  statusContent.innerHTML = `
    <img src="${fileUrl}" alt="${fileType}">
    <div class="status-timestamp">${timestamp}</div>
  `;

  statusItem.appendChild(statusContent);
  statusItem.addEventListener('click', () => showStatus(fileType, fileUrl));
  statusPage.appendChild(statusItem);

  statusFileInput.value = ''; // Clear the input after uploading
}

// Function to show status in the player
function showStatus(fileType, fileUrl) {
  statusPlayerCircle.style.display = 'block';

  if (fileType === 'image') {
    statusPlayerImage.style.display = 'block';
    statusPlayerVideo.style.display = 'none';
    statusPlayerImage.src = fileUrl;
  } else if (fileType === 'video') {
    statusPlayerImage.style.display = 'block';
    statusPlayerVideo.style.display = 'block';
    statusPlayerVideo.src = fileUrl;

    // Get the first frame of the video as the cover picture
    const video = document.createElement('video');
    video.crossOrigin = 'anonymous';
    video.src = fileUrl;

    video.onloadedmetadata = function () {
      const canvas = document.createElement('canvas');
      canvas.width = this.videoWidth;
      canvas.height = this.videoHeight;
      canvas.getContext('2d').drawImage(this, 0, 0, canvas.width, canvas.height);

      statusPlayerImage.src = canvas.toDataURL();
    };
  }

  let remainingTime = 10;
  statusTimer.textContent = '00:10';
  const timerInterval = setInterval(() => {
    remainingTime--;
    if (remainingTime >= 0) {
      displayTime(remainingTime);
    } else {
      clearInterval(timerInterval);
      hideStatus();
    }
  }, 1000);

  if (hideTimer) clearTimeout(hideTimer);
  hideTimer = setTimeout(() => hideStatus(), 10000);
}

function displayTime(remainingTime) {
  const seconds = remainingTime % 60;
  const minutes = Math.floor(remainingTime / 60);
  statusTimer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function hideStatus() {
  statusPlayerCircle.style.display = 'none';
  statusPlayerImage.style.display = 'none';
  statusPlayerVideo.style.display = 'none';
}

uploadStatusBtn.addEventListener('click', () => {
  statusFileInput.click();
});

statusFileInput.addEventListener('change', handleFileUpload);
