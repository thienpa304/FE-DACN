import React from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { Button } from '@mui/material';

export function DownloadPage({ rootElementId, downloadFileName }) {
  const downloadFileDocument = () => {
    const input = document.getElementById(rootElementId);
    const elementWidth = input.offsetWidth; // Lấy chiều rộng của phần tử gốc
    const elementHeight = input.offsetHeight; // Lấy chiều cao của phần tử gốc

    const pdf = new jsPDF('p', 'pt', [elementWidth, elementHeight]); // Tạo một tệp PDF với kích thước dựa trên kích thước của phần tử gốc

    // Tính toán số lần cần phải chia nhỏ nội dung để vừa vào các trang
    const totalPages = Math.ceil(
      elementHeight / pdf.internal.pageSize.getHeight()
    );

    // Duyệt qua từng trang và thêm vào tệp PDF
    for (let i = 0; i <= totalPages; i++) {
      const topOffset = -pdf.internal.pageSize.getHeight() * i;
      html2canvas(input, {
        scrollY: topOffset,
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight + topOffset,
        useCORS: true // Bật CORS để sử dụng các hiệu ứng CSS
      }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png', 1.0);
        pdf.addImage(
          imgData,
          'JPG',
          50,
          topOffset + 50,
          elementWidth,
          elementHeight
        );
        // Nếu đây không phải là trang cuối cùng, thêm một trang mới
        if (i < totalPages) {
          pdf.addPage();
        } else {
          // Nếu là trang cuối cùng, lưu tệp PDF và mở nó trong một cửa sổ mới
          pdf.save(downloadFileName);
          window.open(pdf.output('bloburl'), '_blank');
        }
      });
    }
  };

  return <Button onClick={downloadFileDocument}>Download Page</Button>;
}
