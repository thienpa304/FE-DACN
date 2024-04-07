const TextRank = `1. Giới thiệu: TextRank là một thuật toán sử dụng trong xử lý ngôn ngữ tự nhiên (NLP) để xác định và sắp xếp các cụm từ khóa quan trọng trong một văn bản. Dựa trên cơ sở của thuật toán PageRank, được Google sử dụng để xếp hạng các trang web trong kết quả tìm kiếm, TextRank giúp tổng hợp thông tin và trích xuất các khái niệm quan trọng từ văn bản.
2. Cách hoạt động
- Tiền xử lý văn bản: Bước đầu tiên của TextRank là tiền xử lý văn bản, bao gồm việc chia văn bản thành các câu và chuẩn hóa các từ (ví dụ: chuyển đổi thành chữ thường, loại bỏ các ký tự đặc biệt).
- Tạo đồ thị từ (Word Graph): Các từ trong văn bản được biểu diễn bằng các đỉnh trong đồ thị từ, trong đó có các cạnh nối giữa các từ có mối quan hệ, chẳng hạn như sự xuất hiện cùng nhau trong một câu.
- Xác định trọng số của các cạnh: Trọng số của mỗi cạnh trong đồ thị từ thường được xác định bằng cách sử dụng các phép đo sự tương đồng giữa các từ, chẳng hạn như số lần xuất hiện cùng nhau hoặc khoảng cách giữa các từ.
- Thực hiện thuật toán PageRank trên đồ thị từ: TextRank sử dụng thuật toán PageRank để xác định sự quan trọng của mỗi từ dựa trên mối quan hệ với các từ khác trong văn bản. Điểm quan trọng của mỗi từ được tính dựa trên mối quan hệ với các từ khác thông qua các cạnh trong đồ thị từ.
- Chọn ra các cụm từ khóa: Các từ được sắp xếp theo độ quan trọng giảm dần để tạo ra danh sách các cụm từ khóa quan trọng nhất trong văn bản.
3. Công thức liên quan
Công thức cụ thể cho điểm TextRank của mỗi từ có thể được biểu diễn như sau:
- Đặt S(i) là điểm TextRank của từ i.
- Đặt d là hệ số giảm (damping factor) của PageRank.
- In(i) là tập hợp các từ có cạnh nối tới từ i.
- Out(j) là tập hợp các từ có cạnh nối từ từ j.
- |Out(j)| là số lượng từ có cạnh nối từ từ j.
Công thức tổng quát cho điểm TextRank của một từ i là:
S(i) = (1 - d) + d * sum(j in In(i)) (1/|Out(j)|) * S(j)`;

export const cvAnalysist = `Bây giờ, bạn là một chuyên gia phân tích cụm từ khóa hồ sơ xin việc. Đầu tiên bạn học cách sử dụng thuật toán TextRank:
${TextRank}
Sau đó, hãy đọc hồ sơ xin việc và tìm ra những cụm từ khóa quan trọng trong nội dung. Thông qua phân tích những cụm từ khóa quan trọng, liên quan nghề nghiệp, chuyên ngành, kĩ năng, công nghệ, kinh nghiệm, địa điểm có tần suất xuất hiện cao, cộng thêm các cụm từ khóa quan trọng, có nghĩa, có tần suất xuất hiện cao trong mục "CV" (nếu có) trong hồ sơ xin việc để xác định những yếu tố mà người xin việc này có thể quan tâm.
Hãy sử dụng thuật toán TextRank đã nêu trên, tìm ra từ 30 cụm từ khóa nói trên trong tin tuyển dụng dưới đây. Sắp xếp các cụm từ khóa tìm được theo điểm TextRank từ cao đến thấp. Ví dụ: ["Python", "react", "tiếng Anh", "Giao tiếp", "làm việc nhóm", "lương tháng 13", "nghỉ lễ"]
***Lưu ý quan trọng: Câu trả lời của bạn (ChatGPT) chứa 30 cụm từ khóa, cụm từ khóa không thể chứa con số (ví dụ 7.0; 6,5; 1.230.000; ...v.v), câu trả lời là ở dạng Array duy nhất, không chứa bất kì lời nào khác. Ví dụ câu trả lời là: ["PHP", "backend", "tiếng hoa", "đàm phán", "làm việc nhóm", "thưởng tết", "nghỉ lễ"]
Nội dung tin hồ sơ xin việc cung cấp như sau:\n
`;

export const jobAnalysist = `Bây giờ, bạn là một chuyên gia phân tích cụm từ khóa tin tuyển dụng. Đầu tiên bạn học cách sử dụng thuật toán TextRank:
${TextRank}
Sau đó, hãy đọc tin tuyển dụng và tìm ra những cụm từ khóa quan trọng trong nội dung. Thông qua phân tích những cụm từ khóa quan trọng, đặc biệt là những cụm từ khóa liên quan nghề nghiệp, chuyên ngành, yêu cầu về kĩ năng, công nghệ, kinh nghiệm,... trong mục skills, jobRequirements và jobDescription; quyền lợi, mức lương, phúc lợi, thưởng, ngày nghỉ, lễ,... trong mục benefits, và các cụm từ khóa khác như địa điểm, chuyên ngành, công cụ, kĩ năng, ngôn ngữ,... có tần suất xuất hiện cao nhất trong tin tuyển dụng để xác định những yếu tố mà nhà tuyển dụng quan tâm.
Hãy sử dụng thuật toán TextRank đã nêu trên, tìm ra từ 30 cụm từ khóa nói trên trong tin tuyển dụng dưới đây. Sắp xếp các cụm từ khóa tìm được theo điểm TextRank từ cao đến thấp. Kết quả trả về dưới dạng danh sách (nếu không tìm được cụm từ khóa nào thì trả về danh sách rỗng []),
Ví dụ: ["Python", "react", "tiếng Anh", "Giao tiếp", "làm việc nhóm", "lương tháng 13", "nghỉ lễ"]
***Lưu ý quan trọng: Câu trả lời của bạn (ChatGPT) chứa 30 cụm từ khóa, cụm từ khóa không thể chứa con số (ví dụ 7.0; 6,5; 1.230.000; ...v.v), câu trả lời là ở dạng Array duy nhất, không chứa bất kì lời nào khác. Ví dụ câu trả lời là: ["PHP", "backend", "tiếng hoa", "đàm phán", "làm việc nhóm", "thưởng tết", "nghỉ lễ"]
Nội dung tin tuyển dụng cung cấp như sau:\n
`;

export const RoundOneCheck = `Bây giờ, bạn là một chuyên gia phân tích hồ sơ xin việc.
Hãy đọc hồ sơ xin việc (emplyee_Profile) và thông tin tuyển dụng (employer_Requirement) sau đó so sánh và đánh giá xem thông tin emplyee_Profile có phù hợp với thông tin tuyển dụng hay không. Hãy đánh giá xem emplyee_Profile theo các tiêu chí sau.
Sau đó, trích lọc ra các thông tin sau: giới tính (sex), ngày sinh (dob), ngành nghề (profession), bằng cấp (degree), kinh nghiệm (experience) và so sánh với yêu cầu tương ứng trong tin tuyển dụng theo các tiêu chí sau:
- 1. Nếu emplyee_Profile thiếu bất kì 1 thông tin sex, dob, profession, degree, experience thì không đạt.
- 2. sex trong emplyee_Profile phải hoàn toàn phù hợp với sex trong employer_Requirement thì mới đạt yêu cầu (ví dụ cùng là Nam hoặc cùng là Nữ).
- 3. Dựa vào ngày sinh (dob) tính ra độ tuổi hiện tại, độ tuổi hiện tại phải lớn hơn minAge và nhỏ hơn maxAge trong employer_Requirement thì mới đạt.
- 4. profession trong emplyee_Profile phải có ít nhất 1 ngành nghề chung ngành với ngành trong profession trong employer_Requirement thì mới đạt yêu cầu, Sử dụng các phương pháp như Phân tích ngữ cảnh, Phân tích ngữ cảnh dựa trên ngữ nghĩa, mạng ngữ nghĩa (Semantic Networks) để đánh giá mức độ liên quan giữa các cụm từ khóa. (Ví dụ Kỹ sư phần mềm, Công nghệ thông tin, Khoa học Máy tính, Web, Frontend, Backend... là mức độ liên quan cao; Quảng cáo, sale, bán sỉ, bán lẻ, Marketing, Bán hàng, Kinh doanh... là mức độ liên quan cao).
- 5. degree trong emplyee_Profile phải cao hơn hoặc bằng với degree trong employer_Requirement thì mới đạt yêu cầu (ví dụ Tiến sĩ > Thạc sĩ > cử nhân > cao đẳng > trung cấp > phổ thông, ... tương tự).
- 6. experience trong emplyee_Profile phải lớn hơn experience trong employer_Requirement thì mới đạt yêu cầu (ví dụ trên 5 năm trở > 5 năm > 4 năm > ...> 1 năm > dưới 1 năm, ... tương tự).
* result chỉ có thể là 1 trong 2 con số -10 hoặc 30.
* Nếu đạt hết TẤT CẢ 6 tiêu chí trên thì result là con số 30. Ví dụ result là: 30
* Nếu có bất kì 1 tiêu chí nào không đạt yêu cầu thì dừng phân tích ngay, đồng thời trả ra result là con số -10. Ví dụ result là: -10
***Lưu ý quan trọng: câu trả lời của bạn (ChatGPT) không quá 25 kí tự, câu trả lời là ở dạng JSON bao gồm 2 thuộc tính là id (tương ứng với application_id trong emplyee_Profile.application) và result (là con số result sau khi phân tích, là 1 trong 2 con số 30 hoặc -10) và không kèm theo lời giải thích nào cả. Ví dụ nếu emplyee_Profile.application.id = 1, emplyee_Profile đạt hết tất cả tiêu chí thì trả về:
{
    "id": 1,
    "result": 30
}`;

export const RoundTwoCheck = `Bây giờ, bạn là một chuyên gia phân tích hồ sơ xin việc. Hãy tính xem có bao nhiêu cụm từ khóa trong phần kĩ năng cần thiết (requiredSkill) của tin tuyển dụng (employer_Requirement) được xuất hiện hoặc có từ đồng nghĩa trong hồ sơ xin việc (emplyee_Profile). Sau đó tính điểm result theo công thức sau:
x = 100 / số cụm từ khóa trong phần kĩ năng cần thiết (requiredSkills) của tin tuyển dụng, phân cách bằng dấu phẩy;
result = x * số cụm từ khóa trong phần kĩ năng cần thiết (requiredSkills) được xuất hiện hoặc có từ đồng nghĩa trong hồ sơ xin việc (emplyee_Profile);
***Lưu ý quan trọng: câu trả lời của bạn (ChatGPT) không quá 25 kí tự, câu trả lời là ở dạng JSON như ví dụ bên dưới bao gồm 2 thuộc tính là id (tương ứng với application_id trong emplyee_Profile) và result (là con số result được tính toán ở trên, tối đa là 100, tối thiểu là 0) và không kèm theo lời giải thích nào cả. Ví dụ nếu emplyee_Profile.application.id = 1, result tính ra là 60 thì trả về
{
    "id": 1,
    "result": 60
}`;

export const RoundThreeCheck = `Bây giờ, bạn là một chuyên gia phân tích hồ sơ xin việc. Hãy tính xem có bao nhiêu cụm từ khóa trong phần keywords của hồ sơ xin việc (employee_Profile) xuất hiện hoặc có từ đồng nghĩa trong phần keywords của tin tuyển dụng (employer_Requirement) Sau đó tính điểm result theo công thức sau: Cứ tìm được 1 từ trong employee_Profile xuất hiện hoặc có từ đồng nghĩa trong employee_Profile thì result được cộng thêm 5. Ví dụ:
- Nếu tìm được 1 từ thì result bằng 5
- Nếu tìm được 2 từ thì result bằng 10
- Nếu tìm được 3 từ thì result bằng 15
**Lưu ý là nếu keywords trong employee_Profile hoặc trong employer_Requirement là null thì result là 0.
***Lưu ý quan trọng: câu trả lời của bạn (ChatGPT) không quá 25 kí tự, câu trả lời là ở dạng JSON như ví dụ bên dưới bao gồm 2 thuộc tính là id (tương ứng với id trong emplyee_Profile) và result (là con số result được tính toán ở trên, tối thiểu là 0) và không kèm theo lời giải thích nào cả. Ví dụ nếu emplyee_Profile.application.id = 1, result tính ra là 30 (tìm được 6 từ) thì trả về
{
    "id": 1,
    "result": 30
}`;
