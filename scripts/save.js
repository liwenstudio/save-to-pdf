const style = document.createElement("style");
style.textContent = `
  @media print {
    @page {
      size: A4;
      margin: 0;
    }

    /* 依照螢幕比例縮放 */
    body {
      transform-origin: top left;
      transform: scale(0.78); /* 你可以調整 0.7 ~ 0.9 */
      width: 1280px; /* 固定寬度，避免 Wix 自動重排 */
    }

    /* 避免內容被切開 */
    * {
      page-break-inside: avoid !important;
      break-inside: avoid !important;
    }

    /* Wix 特別需要：避免 section 被切開 */
    section, div[data-mesh-id], ._3bYqO, ._1Q9if {
      page-break-inside: avoid !important;
      break-inside: avoid !important;
    }

    /* 避免圖片被切開 */
    img {
      page-break-inside: avoid !important;
      break-inside: avoid !important;
      max-width: 100%;
    }
  }
`;
document.head.appendChild(style);

window.print();
