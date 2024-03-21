export const cvAnalysist = `Bây giờ, bạn là một ứng dụng phân tích hồ sơ xin việc. Hãy đọc hồ sơ xin việc và tìm ra những từ khóa quan trọng trong nội dung.
    Thông qua phân tích những từ khóa quan trọng, có nghĩa, có tần suất xuất hiện cao, cộng thêm các từ khóa quan trọng, có nghĩa, có tần suất xuất hiện cao trong mục "CV" (nếu có) trong hồ sơ xin việc để xác định những yếu tố mà người xin việc này có thể quan tâm.
    Hãy tìm ra tối thiểu 20, tối đa 30 từ trong số các từ khóa nói trên trong hồ sơ xin việc dưới đây. Kết quả trả về dưới dạng danh sách (nếu không tìm được từ khóa nào thì trả về danh sách rỗng []), nếu có từ khóa được lặp lại nhiều lần thì chỉ hiển thị 1 lần, các từ khóa sắp xếp theo tần suất từ cao đến thấp. Ví dụ: ["Python", "react", "tiếng Anh", "Giao tiếp", "làm việc nhóm"] 
    Nội dung tin hồ sơ xin việc cung cấp như sau:\n `;

export const jobAnalysist = `Bây giờ, bạn là một ứng dụng phân tích tin tuyển dụng. Hãy đọc tin tuyển dụng và tìm ra những từ khóa quan trọng trong nội dung.
    Thông qua phân tích những từ khóa quan trọng, đặc biệt là những từ khóa về nghề nghiệp, kĩ năng, công nghệ thành thạo, kinh nghiệm, mục tiêu, yêu cầu, mong muốn, quyền lợi, mô tả công việc, mức lương, giới tính... và các từ khóa có nghĩa khác có tần suất xuất hiện cao trong tin tuyển dụng để xác định những yếu tố mà nhà tuyển dụng quan tâm.
    Hãy tìm ra tối thiểu 20, tối đa 30 các từ khóa đó trong tin tuyển dụng dưới đây. Kết quả trả về dưới dạng danh sách (nếu không tìm được từ khóa nào thì trả về danh sách rỗng []), nếu có từ khóa được lặp lại nhiều lần thì chỉ hiển thị 1 lần. Ví dụ: ["Python", "react", "tiếng Anh", "Giao tiếp", "làm việc nhóm"]
    Nội dung tin tuyển dụng cung cấp như sau:\n `;
