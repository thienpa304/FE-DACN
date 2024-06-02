export const cvAnalysist = `Bây giờ, bạn là một chuyên gia lâu năm trong lĩnh vực Nhân sự. Bạn có khả năng phân tích từ khóa quan trọng trong hồ sơ xin việc. Tôi cần xác định những yếu tố quan trọng trong hồ sơ xin việc sau. Hãy liệt kê 10 từ khóa quan trọng liên quan đến công việc của trong nội dung hồ sơ tôi cung cấp. Các từ khóa này bao gồm cả kỹ năng cứng và mềm, cũng như kinh nghiệm và trình độ chuyên môn. Sắp xếp chúng theo mức độ quan trọng dựa trên tần số xuất hiện trong phần mô tả công việc và yêu cầu công việc. Hãy chú ý những kỹ năng chuyên môn thường theo sau các cụm từ như 'có hiểu biết', 'thành thạo', 'có kinh nghiệm', 'có kiến thức về' để xác định từ khóa kĩ năng cứng (kĩ năng chuyên môn). Đồng thời, cũng phải chú ý tới tên các chứng chỉ, chuyên ngành để xác định từ khóa về trình độ chuyên môn. Ngoài ra, tìm các mô tả về tính cách, cách hành xử, thái độ và sức khỏe của con người để xác định từ khóa về kỹ năng mềm. Kết quả trả về dưới dạng mảng các chuỗi từ khóa (nếu không tìm được từ khóa nào thì trả về danh sách rỗng []). Lưu ý rằng: Mỗi từ khóa tìm được không được quá 20 kí tự.
***Quan trọng: Câu trả lời của bạn (ChatGPT) chứa 10 từ khóa và câu trả lời là ở dạng Array duy nhất, không chứa bất kì lời nào khác. Ví dụ về câu trả lời minh họa là: ["PHP", "Backend", "Tiếng hoa", "Đàm phán", "Làm việc nhóm", "Giao tiếp", "Thuyết trình"]
Nội dung hồ sơ xin việc cung cấp như sau:
`;

export const jobAnalysist = `Bây giờ, bạn là một chuyên gia lâu năm trong lĩnh vực Nhân sự. Bạn có khả năng phân tích từ khóa quan trọng trong tin tuyển dụng. Tôi cần xác định những yếu tố mà nhà tuyển dụng quan tâm trong tin tuyển dụng sau. Hãy liệt kê 10 từ khóa quan trọng liên quan đến công việc của trong nội dung tin tuyển dụng tôi cung cấp. Các từ khóa này bao gồm cả kỹ năng cứng và mềm, cũng như kinh nghiệm chuyên môn. Sắp xếp chúng theo mức độ quan trọng dựa trên tần số xuất hiện trong phần mô tả công việc và yêu cầu công việc. Hãy chú ý những kỹ năng chuyên môn thường theo sau các cụm từ như 'có hiểu biết', 'thành thạo', 'có kinh nghiệm', 'có kiến thức về' để tìm ra từ khóa kĩ năng cứng (kĩ năng chuyên môn). Ngoài ra, tìm các mô tả về tính cách, cách hành xử, thái độ và sức khỏe của con người để tìm ra từ khóa về kỹ năng mềm. Kết quả trả về dưới dạng mảng các chuỗi từ khóa, viết hoa chữ cái đầu tiên của mỗi cụm từ khóa (nếu không tìm được từ khóa nào thì trả về danh sách rỗng []). Lưu ý rằng: Mỗi từ khóa tìm được không được quá 20 kí tự.
***Quan trọng: Câu trả lời của bạn (ChatGPT) là có duy nhất 1 danh sách các từ khóa sau khi dịch sang tiếng Việt và câu trả lời là ở dạng Array duy nhất, không chứa bất kì lời nào khác. Ví dụ về câu trả lời minh họa là: ["PHP", "Backend", "Tiếng hoa", "Đàm phán", "Làm việc nhóm", "Giao tiếp", "Thuyết trình"]
Nội dung tin tuyển dụng cung cấp như sau:
`;

export const RoundOneCheck = `Bây giờ, bạn là một chuyên gia phân tích hồ sơ xin việc.
Hãy đọc hồ sơ xin việc và yêu cầu tuyển dụng sau đó so sánh và đánh giá xem thông tin emplyee_Profile có phù hợp với thông tin tuyển dụng hay không. Hãy đánh giá xem hồ sơ xin việc theo các tiêu chí sau.
- 1. Ngành nghề trong hồ sơ xin việc phải có ít nhất 1 ngành nghề liên quan tới ngành nghề trong danh sách các ngành nghề trong yêu cầu tuyển dụng thì mới đạt yêu cầu. (Ví dụ Kỹ sư phần mềm, Công nghệ thông tin, Khoa học Máy tính, Web, Frontend, Backend... là mức độ liên quan cao; Quảng cáo, sale, bán sỉ, bán lẻ, Marketing, Bán hàng, Kinh doanh... là mức độ liên quan cao).
- 2. Trình độ trong hồ sơ xin việc phải cao hơn hoặc bằng với trình độ trong yêu cầu tuyển dụng thì mới đạt yêu cầu.
- 3. kinh nghiệm trong hồ sơ xin việc phải cao hơn kinh nghiệm trong yêu cầu tuyển dụng thì mới đạt yêu cầu.
* result chỉ có thể là 1 trong 2 con số -10 hoặc 30.
* Nếu đạt hết TẤT CẢ 3 tiêu chí trên thì result là con số 30. Ví dụ result là: 30
* Nếu có bất kì 1 tiêu chí nào không đạt yêu cầu thì dừng phân tích ngay, đồng thời trả ra result là con số -10. Ví dụ result là: -10
***Lưu ý quan trọng: câu trả lời của bạn (ChatGPT) không quá 25 kí tự, câu trả lời là ở dạng Object bao gồm 2 thuộc tính là id (tương ứng với application_id) và result (là con số result sau khi phân tích, là 1 trong 2 con số 30 hoặc -10). Ngoài ra không kèm theo lời giải thích nào cả. Ví dụ nếu application.id = 1, hồ sơ xin việc đạt hết tất cả tiêu chí thì trả về:
{
    "id": 1,
    "result": 30
}`;

export const checkContent = `Bây giờ bạn là 1 chuyên gia kiểm duyệt văn bản. Hãy kiểm tra xem trong văn bản có chứa những từ ngữ nhạy cảm, thô tục, vi phạm pháp luật hay không (Ví dụ về từ khóa vi phạm: Chết, giết người, hiếp dâm, biến thái,... và các từ nhạy cảm khóa khác). Kết quả lưu trong thuộc tính result. Nếu có vi phạm thì result = true, nếu không vi phạm thì result = false. 
***Lưu ý quan trọng: câu trả lời của bạn (ChatGPT) không quá 25 kí tự, câu trả lời là ở dạng Object như ví dụ bên dưới bao gồm 2 thuộc tính là id (tương ứng với postId) và result (là true nếu vi phạm, false nếu không vi phạm). Ví dụ nếu văn bản có chứa từ ngữ nhạy cảm, thô tục, vi phạm pháp luật thì trả về:
{
    "id": 1,
    "result": true
}
`;

export const extractSkill = `Trích ra danh sách các kĩ năng (bao gồm kĩ năng cứng và kĩ năng mềm, kinh nghiệm chuyên môn) trong hồ sơ xin việc sau. 
***Lưu ý quan trọng: Câu trả lời của bạn (ChatGPT) là ở dạng Array duy nhất, không chứa bất kì lời nào khác. Ví dụ câu trả lời là: ["PHP", "Backend", "Tiếng hoa", "Đàm phán", "Làm việc nhóm", "Giao tiếp", "Thuyết trình"]. Hãy dịch các kĩ năng sang tiếng Việt, và viết lại từng kĩ năng đã dịch ở dạng từ khóa, viết hoa chữ cái đầu.`;

export const translate = `Hãy dịch các từ khóa sau sang tiếng Việt, và viết hoa chữ cái đầu. 
***Lưu ý quan trọng: Câu trả lời của bạn (ChatGPT) là ở dạng Array duy nhất, không chứa bất kì lời nào khác. Ví dụ câu trả lời là: ["PHP", "Backend", "Tiếng hoa", "Đàm phán", "Làm việc nhóm", "Giao tiếp", "Thuyết trình"]. `;

export const extractCommonInfo = `Trích ra thông tin về ngành nghề (profession), trình độ học vấn (degree), số năm kinh nghiệm làm việc trong ngành (experience) trong hồ sơ xin việc. Kết quả các thông tin có định dạng sau:
- profession: tên ngành nghề,
- degree: (Tiến sĩ, Thạc sĩ, cử nhân, cao đẳng, trung cấp, phổ thông, ...),
- experience: (số) năm. (nếu không có kinh nghiệp làm việc thì trả về 0 năm)
***Lưu ý quan trọng: Câu trả lời của bạn (ChatGPT) là ở dạng Object, không chứa bất kì lời nào khác. Ví dụ câu trả lời là:
{ 
    "profession": "Công nghệ thông tin",
    "degree": "Thạc sĩ",
    "experience": "3 năm", 
}
`;
