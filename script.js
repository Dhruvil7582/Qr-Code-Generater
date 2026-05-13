const qrContainer = document.getElementById('qrcode');
    const textInput = document.getElementById('text');
    const sizeInput = document.getElementById('size');
    const sizeValue = document.getElementById('sizeValue');
    const errorMessage = document.getElementById('error');
    const downloadLink = document.getElementById('download');

    function getImageDataUrl(container) {
      const image = container.querySelector('img');
      if (image) return image.src;
      const canvas = container.querySelector('canvas');
      if (canvas) return canvas.toDataURL('image/png');
      return null;
    }

    function renderQRCode() {
      const text = textInput.value.trim();
      if (!text) {
        errorMessage.textContent = 'Enter some text or a link to get started.';
        qrContainer.innerHTML = '';
        downloadLink.classList.add('hidden');
        return;
      }

      if (typeof QRCode === 'undefined') {
        errorMessage.textContent = 'QR library failed to load. Refresh the page and try again.';
        qrContainer.innerHTML = '';
        downloadLink.classList.add('hidden');
        return;
      }

      errorMessage.textContent = '';
      qrContainer.innerHTML = '';
      new QRCode(qrContainer, {
        text,
        width: Number(sizeInput.value),
        height: Number(sizeInput.value),
        colorDark: '#0f172a',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H,
      });

      requestAnimationFrame(() => {
        const dataUrl = getImageDataUrl(qrContainer);
        if (dataUrl) {
          downloadLink.href = dataUrl;
          downloadLink.classList.remove('hidden');
        }
      });
    }

    document.getElementById('generate').addEventListener('click', renderQRCode);
    sizeInput.addEventListener('input', () => {
      sizeValue.textContent = sizeInput.value;
      if (textInput.value.trim()) {
        renderQRCode();
      }
    });

    textInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        renderQRCode();
      }
    });