<h2>1. Vuex là gì?</h2>
<p>
  Vuex là state management pattern + library – thư viện giúp quản lý trạng thái các component trong VueJS, 
  đây là nơi lưu trữ tập trung dữ liệu cho tất cả các component trong một ứng dụng.
</p>
<h2>2. Các thành phần kiến trúc trong vuex</h2>
<h3>Sơ đồ kiến trúc</h3>

<h3>State</h3>
<p>State là nơi lưu trữ data trong từng component</p>
<p>Chỉ nên gắn các thành phần là singleton - ít thay đổi hoặc không thay đổi trong suốt vòng đời của app</p>
<h3>Store</h3>
<p>Store là phần quản lí State,gồm các phương thức cho phép thay đổi state một cách gián tiếp thông qua dispatch hoặc commit. Store là duy nhất bên trong một app và được khởi tạo cùng với root</p>
<h3>Getters</h3>
Có thể hiểu Getters là một computed dùng để tính toán data, xử lí một logic chung nào đó mà nhiều component dùng.
<h3>Actions</h3>
<p>
Actions thường chứa logic liên quan đến nghiệp vụ business: gọi API, save vào database, thực hiện các commit (gọi mutation) để thay đổi state...
</p>
<h3>Mutations</h3>
<p>Mutations là nơi duy nhất cho phép thay đổi state, chạy đồng bộ, một hàm trong mutations được gọi là một commit.</p>
<h3>Modules</h3>
<p>Modules được xem như store thu nhỏ. Khi store quá lớn chia nhỏ thành các module để quản lý dễ hơn.</p>

