import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './Home_page.css'; // Import tệp CSS để định dạng giao diện
import './Basic_infor.css';
import ReactQuill from 'react-quill'; // Import ReactQuill
import 'react-quill/dist/quill.snow.css'; // Import style mặc định của ReactQuill
function App() {
    const [background, setBackground] = useState('');
    const resetBackground = () => {
        setBackground(''); // Quay về hình nền ban đầu
        setActiveContent(null);
    };

    const changeContent = (content) => {
        setBackground("none"); // Ẩn background khi bấm menu
        setActiveContent(content);
    };


    const [editorValue, setEditorValue] = useState('');
    // Hàm xử lý thay đổi nội dung
    const handleEditorChange = (content) => {
        setEditorValue(content);
    };
    // State quản lý nội dung hiển thị
    const [activeContent, setActiveContent] = useState('');
    // State quản lý trạng thái mở rộng menu
    const [expanded, setExpanded] = useState({});
    // State quản lý đợt đăng ký được chọn
    const [selectedPeriod, setSelectedPeriod] = useState('');
    // State quản lý từ khóa tìm kiếm
    const [searchQuery, setSearchQuery] = useState('');
    // State quản lý danh sách các đề tài đã đăng ký
    const [registeredProjects, setRegisteredProjects] = useState([]);

    // Danh sách các đợt đăng ký
    const periods = ['Đợt 1', 'Đợt 2', 'Đợt 3'];

    // Cấu trúc menu với các mục và nội dung con
    const menuItems = [
        {
            title: 'Đề tài nghiên cứu cấp trường',
            children: ['Đề tài khoa học và công nghệ', 'Thông tin cơ bản', 'Tính cấp thiết', 'Nội dung chính', 'Sản phẩm và kết quả', 'Kinh phí và thời gian', 'Năng lực nghiên cứu']
        },
        {
            title: 'Đề tài nghiên cứu cấp khoa',
            children: ['Đề tài khoa học và công nghệ', 'Thông tin cơ bản', 'Tính cấp thiết', 'Nội dung chính', 'Sản phẩm và kết quả', 'Kinh phí và thời gian', 'Năng lực nghiên cứu']
        }
    ];

    // Hàm bật/tắt trạng thái mở rộng của menu
    const toggleExpand = (index) => {
        setExpanded((prev) => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    // Hàm xử lý khi nhấn vào một mục con trong menu
    const handleItemClick = (content) => {
        setActiveContent(content);
    };

    // Hàm xử lý thay đổi đợt đăng ký
    const handlePeriodChange = (e) => {
        setSelectedPeriod(e.target.value);
    };

    // Hàm xử lý thay đổi từ khóa tìm kiếm
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Hàm thêm một đề tài mới vào danh sách đã đăng ký
    const handleRegisterProject = () => {
        setRegisteredProjects([
            ...registeredProjects,
            {
                id: registeredProjects.length + 1, // Tự động tăng mã đề tài
                title: 'Tên đề tài mới',
                leader: 'Chủ nhiệm đề tài',
                unit: 'Đơn vị chủ trì',
                field: 'Lĩnh vực nghiên cứu',
                cost: 100, // Kinh phí đề tài
                time: 12, // Thời gian thực hiện
                date: '2025-01-01', // Ngày đăng ký
                status: 'Chưa xác nhận',
                actions: 'Thêm sửa xóa'
            }
        ]);
    };

    return (
        <div className="app">
            {/* Tiêu đề chính của ứng dụng */}
            <header className="header">
            <div 
                className="logo"
                onClick={resetBackground} /* Khi nhấn logo sẽ reset background */
                style={{ cursor: "pointer" }} 
            ></div>
            <h1>Hệ Thống Quản Lý Hoạt Động Khoa Học và Công Nghệ</h1>
            </header>
            <div className="main">
                {/* Thanh menu bên trái */}
                <aside className="sidebar">
                    {menuItems.map((item, index) => (
                        <div key={index} className="menu-item">
                            {/* Tiêu đề mục menu */}
                            <div
                                className="menu-title"
                                onClick={() => toggleExpand(index)}
                            >
                                {item.title}
                            </div>
                            {/* Các mục con trong menu */}
                            {expanded[index] && (
                                <div className="submenu">
                                    {item.children.map((child, childIndex) => (
                                        <div
                                            key={childIndex}
                                            className="submenu-item"
                                            onClick={() => handleItemClick(child)}
                                        >
                                            {child}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </aside>
                {/* Nội dung chính */}
                <main className="content">
                    {/* Hiển thị khi nội dung là "Đề tài khoa học và công nghệ" */}
                    {activeContent === 'Đề tài khoa học và công nghệ' && (
                        <div>
                            <h2>Đề xuất đề tài khoa học và nghiên cứu</h2>
                            {/* Biểu mẫu đăng ký đề tài */}
                            <div className="registration-form">
                                <div>
                                    <label>Đợt đăng ký:</label>
                                    {/* Combo box chọn đợt đăng ký */}
                                    <select value={selectedPeriod} onChange={handlePeriodChange}>
                                        <option value="">Chọn đợt</option>
                                        {periods.map((period, index) => (
                                            <option key={index} value={period}>{period}</option>
                                        ))}
                                    </select>
                                </div>
                                {/* Nút thêm đề tài */}
                                <button onClick={handleRegisterProject}>Đăng ký đề tài</button>
                                {/* Thanh tìm kiếm */}
                                <div className="search-bar">
                                    <input
                                        type="text"
                                        placeholder="Tìm kiếm"
                                        value={searchQuery}
                                        onChange={handleSearchChange}
                                    />
                                </div>
                            </div>

                            {/* Bảng hiển thị danh sách đề tài đã đăng ký */}
                            <table>
                                <thead>
                                    <tr>
                                        <th>Mã đề tài</th>
                                        <th>Tên đề tài</th>
                                        <th>Chủ nhiệm đề tài</th>
                                        <th>Đơn vị chủ trì</th>
                                        <th>Lĩnh vực nghiên cứu</th>
                                        <th>Kinh phí</th>
                                        <th>Thời gian</th>
                                        <th>Ngày đăng ký</th>
                                        <th>Xác nhận hoàn tất đăng ký</th>
                                        <th>File thuyết minh</th>
                                        <th>Trạng thái</th>
                                        <th>Đề cương (bổ sung)</th>
                                        <th>Báo cáo giữa kỳ</th>
                                        <th>Báo cáo cuối kỳ</th>
                                        <th>Hồ sơ nghiệm</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {registeredProjects.map((project, index) => (
                                        <tr key={index}>
                                            <td>{project.id}</td>
                                            <td>{project.title}</td>
                                            <td>{project.leader}</td>
                                            <td>{project.unit}</td>
                                            <td>{project.field}</td>
                                            <td>{project.cost}</td>
                                            <td>{project.time}</td>
                                            <td>{project.date}</td>
                                            <td>{project.status}</td>
                                            <td>File</td>
                                            <td>{project.status}</td>
                                            <td>Đề cương</td>
                                            <td>Báo cáo giữa kỳ</td>
                                            <td>Báo cáo cuối kỳ</td>
                                            <td>Hồ sơ nghiệm</td>
                                            {/* Nút sửa và xóa đề tài */}
                                            <td>
                                                <div class="action-buttons">
                                                    <button class="edit-btn">Sửa</button>
                                                    <button class="delete-btn">Xóa</button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                    {/* Hiển thị nội dung khác được chọn */}
                    {activeContent && activeContent !== 'Đề tài khoa học và công nghệ' && (
                        <h2>{activeContent}</h2>
                    )}
                    {activeContent === 'Thông tin cơ bản' && (
                        <div>
                            <div className="info-form">
                                {/* Label cho tên đề tài và Textbox có thể co dãn */}
                                <div className="form-group">
                                    <label>Tên đề tài:</label>
                                    <textarea
                                        placeholder="Nhập tên đề tài"
                                        rows="3"
                                        style={{ resize: 'both', width: '100%' }} // Cho phép người dùng kéo để thay đổi kích thước
                                    />
                                </div>

                                {/* Label cho lĩnh vực nghiên cứu với các checkbox */}
                                <div className="form-group">
                                    <label>Lĩnh vực nghiên cứu:</label>
                                    <div className="checkbox-group">
                                        {['Khoa học xã hội', 'Khoa học nhân văn', 'Khoa học tự nhiên', 'Khoa học kỹ thuật và công nghệ', 'Khoa học y, dược', 'Khoa học công nghiệp'].map((field, index) => (
                                            <label key={index}>
                                                <input type="checkbox" value={field} /> {field}
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Label cho đơn vị chủ trì với Combo box */}
                                <div className="form-group">
                                    <label>Đơn vị chủ trì:</label>
                                    <select>
                                        {/* Các đơn vị chủ trì sẽ được đẩy từ dữ liệu lên */}
                                        <option value="unit1">Đơn vị 1</option>
                                        <option value="unit2">Đơn vị 2</option>
                                        <option value="unit3">Đơn vị 3</option>
                                        {/* Thêm các đơn vị chủ trì khác */}
                                    </select>
                                </div>

                                {/* Label cho nhóm nghiên cứu với Combo box */}
                                <div className="form-group">
                                    <label>Đề tài thuộc nhóm nghiên cứu:</label>
                                    <select>
                                        {/* Các nhóm nghiên cứu sẽ được đẩy từ dữ liệu lên */}
                                        <option value="group1">Nhóm nghiên cứu 1</option>
                                        <option value="group2">Nhóm nghiên cứu 2</option>
                                        <option value="group3">Nhóm nghiên cứu 3</option>
                                        {/* Thêm các nhóm nghiên cứu khác */}
                                    </select>
                                </div>

                                {/* Các nút tải lên và lưu */}
                                <div className="form-actions">
                                    <button className="upload-button">Tải lên</button>
                                    <button className="save-button">Lưu</button>
                                </div>
                            </div>
                        </div>
                    )}
                    {activeContent === 'Tính cấp thiết' && (
                        <div>
                            <div className="editor-container">
                                {/* Trình soạn thảo văn bản ReactQuill */}
                                <ReactQuill 
                                    value={editorValue} 
                                    onChange={handleEditorChange} 
                                    theme="snow" 
                                    placeholder="Viết nội dung về tính cấp thiết ở đây..." 
                                />
                            </div>
                            <div className="editor-actions">
                                <button className="upload-button">Tải lên</button>
                                <button className="save-button">Lưu </button>
                                {/* Bạn có thể thêm các nút khác như tải lên file, xóa nội dung, v.v. */}
                            </div>
                        </div>
                    )}
                    
                    {activeContent === 'Nội dung chính' && (
                        <div>
                            <div className="editor-container">
                                {/* Trình soạn thảo văn bản ReactQuill */}
                                <ReactQuill 
                                    value={editorValue} 
                                    onChange={handleEditorChange} 
                                    theme="snow" 
                                    placeholder="Viết nội dung về tính cấp thiết ở đây..." 
                                />
                            </div>
                            <div className="editor-actions">
                                <button className="upload-button">Tải lên</button>
                                <button className="save-button">Lưu </button>
                                {/* Bạn có thể thêm các nút khác như tải lên file, xóa nội dung, v.v. */}
                            </div>
                        </div>
                    )}
                    {activeContent === 'Sản phẩm và kết quả' && (
                        <div>
                            <div className="editor-container">
                                {/* Trình soạn thảo văn bản ReactQuill */}
                                <ReactQuill 
                                    value={editorValue} 
                                    onChange={handleEditorChange} 
                                    theme="snow" 
                                    placeholder="Viết nội dung về tính cấp thiết ở đây..." 
                                />
                            </div>
                            <div className="editor-actions">
                                <button className="upload-button">Tải lên</button>
                                <button className="save-button">Lưu </button>
                                {/* Bạn có thể thêm các nút khác như tải lên file, xóa nội dung, v.v. */}
                            </div>
                        </div>
                    )}
                    {activeContent === 'Năng lực nghiên cứu' && (
                        <div>
                            <div className="editor-container">
                                {/* Trình soạn thảo văn bản ReactQuill */}
                                <ReactQuill 
                                    value={editorValue} 
                                    onChange={handleEditorChange} 
                                    theme="snow" 
                                    placeholder="Viết nội dung về tính cấp thiết ở đây..." 
                                />
                            </div>
                            <div className="editor-actions">
                                <button className="upload-button">Tải lên</button>
                                <button className="save-button">Lưu </button>
                                {/* Bạn có thể thêm các nút khác như tải lên file, xóa nội dung, v.v. */}
                            </div>
                        </div>
                    )}
                    {activeContent === 'Kinh phí và thời gian' && (
                        <div className="budget-form">
                            <div className="form-group">
                                <label htmlFor="budget">Nhu cầu kinh phí dự kiến (triệu đồng):</label>
                                <input type="number" id="budget" name="budget" placeholder="Nhập kinh phí" min="0" step="1" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="research-time">Thời gian nghiên cứu dự kiến (tháng):</label>
                                <input type="number" id="research-time" name="research-time" placeholder="Nhập thời gian nghiên cứu" min="1" step="1" />
                            </div>

                            <div className="form-actions">
                                <button id="upload-button" className="upload-button">Tải lên</button>
                                <button id="save-button" className="save-button">Lưu</button>
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}

// Kết xuất ứng dụng React vào phần tử gốc trên trang
ReactDOM.render(<App />, document.getElementById('root'));
