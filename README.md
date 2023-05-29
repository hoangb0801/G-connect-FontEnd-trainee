# G-connect-FontEnd-trainee

Lean FrontEnd

# Day 1: Web development overview.

Docs: https://www.w3schools.com/whatis/whatis_github.asp

1. GIT

- Creat repository: ( tạo mới)
  $ git init
- Clone project từ Local repossitory ( nếu đã có sẵn hoặc đã tạo mới trên web)
  git clone https://githup..........
- Tạo 1 nhánh mới: ( nên tạo 1 nhánh mới cho mỗi 1 chức năng)
  $ git branch <name_branch>
- Chuyển và tạo 1 nhánh mới
  $ git checkout -b <name_branch>
- Kiểm tra nhánh hiện tại
  $ git branch
- Chuyển nhánh:
  $ git checkout <name_branch>
- Add: xác nhận sự thay đổi
  $ git add .
- cập nhật sự thay đổi local
  $ git commit -m "Message"
- Cập nhật lên server
  $ git push origin <name_branch>
- Ngoài ra, nếu chưa tồn tại remote trên server thì bạn cần phải add mới một remote trước rồi mới push:
  $ git remote add origin <remote_url>
  $ git push origin <name_branch>

- Gộp nhánh: Sau một thời gian cập nhật các file và push lên git trên branch mới, bây giờ mình cần ghép (merge) code lại vào nhánh gốc (master). Trước tiên, cần phải checkout ra khỏi branch hiện tại cần gộp để vào branch master, sau đó thì dùng lệnh merge để ghép branch mới vào master:
  $ git checkout master
  $ git merge <new_branch>
- Xem lại lịch sử commit
  $ git log
- Xem thay đổi trước khi push
  $ git log
  -Gộp commit :
  $ git rebase -i HEAD~
- Pull từ remote repository: Lệnh trên sẽ gộp những thay đổi mới kéo về từ máy chủ từ xa với nhánh hiện tại trên máy local.
  $ git pull origin master

2. NPM ( node pagket manager)

- npm là thư viện software lớn nhất thế giới
- npm cũng có thể quản lý và cài đặt gói
- npm được cài đặt với Node.js
- Tất cả các gói npm được định nghĩa trong file package.json
  3 JQuery:
- jQuery là 1 thư viện JS
- jQuery đơn giản hóa việc lập trình JS
- jQuery rất dễ học
- Để sử dụng được JQuery ta thêm thư viện
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

* Hine và show: sử dụng phương thức hide() và show
  () để ẩn hoặc hiện elements
  $("#hide").click(function(){
  $("p").hide();
  });

      $("#show").click(function(){
          $("p").show();
          });

* jQuery tạo hiệu ứng trượt các HTML elements:
  slideDown()
  slideUp()
  slideToggle()

  $("#flip").click(function(){
  $("#panel").slideDown();
  });

* jQuery Animation
  $("button").click(function(){
  $("div").animate({
  left: '250px',
  height: '+=150px',
  width: '+=150px'
  });
  });
* jQuery Manipulating CSS:
  $("button").click(function(){
  $("h1, h2, p").toggleClass("blue");
  });

# Day 2: HTML TUTORIAL

- các thẻ thường dùng

* các thẻ heading: h1,h2,h3,h4,h5
* thẻ đoạn văn: p
* thẻ xuống dòng: br
* thẻ ảnh img

- thuộc tính style:

* Sử dụng thuộc tính để tạo kiểu cho các phần tử HTMLstyle
* Sử dụng cho màu nềnbackground-color
* Sử dụng cho màu văn bảncolor
* Sử dụng cho phông chữ văn bảnfont-family
* Sử dụng cho kích cỡ văn bảnfont-size
* Sử dụng để căn chỉnh văn bảntext-align

- Các yếu tố định dạng HTML
  Các yếu tố định dạng được thiết kế để hiển thị các loại văn bản đặc biệt:

* <b> - Văn bản in đậm
* <strong> - Văn bản quan trọng
* <i> - Văn bản in nghiêng
* <em> - Văn bản nhấn mạnh
* <mark> - Văn bản được đánh dấu
* <small> - Văn bản nhỏ hơn
* <del> - Văn bản đã xóa
* <ins> - Chèn văn bản
* <sub> - Văn bản chỉ số dưới
* <sup> - Văn bản chỉ số trên

- Các yếu tố trích dẫn và trích dẫn HTML

* <abbr> Định nghĩa từ viết tắt hoặc từ viết tắt
* <address> Xác định thông tin liên hệ cho tác giả/chủ sở hữu tài liệu
* <bdo> Xác định hướng văn bản
* <blockquote> Xác định một phần được trích dẫn từ một nguồn khác
* <cite> Xác định nhận đề của tác phẩm
* <q> Xác định một trích dẫn nội tuyến ngắn

- Liên kết trong html

* Sử dụng phần tử để xác định một liên kết<a>
* Sử dụng thuộc tính để xác định địa chỉ liên kết href
* Sử dụng thuộc tính để xác định nơi mở tài liệu được liên kết target
  target="\_self"- Mặc định. Mở tài liệu trong cùng một cửa sổ/tab khi nó được nhấp vào
  target="\_blank"- Mở tài liệu trong một cửa sổ hoặc tab mới
  target="\_parent"- Mở tài liệu trong khung chính
  target="\_top"- Mở tài liệu trong toàn bộ cửa sổ
* Sử dụng phần tử (bên trong ) để sử dụng hình ảnh làm liên kết <a><img></a>
* Sử dụng lược đồ bên trong thuộc tính để tạo liên kết mở chương trình email của người dùng mailto: href
  <a href="mailto:someone@example.com">Send email</a>

- Cach tao dấu trang

* Sử dụng idthuộc tính (id=" value ") để xác định dấu trang trong một trang
* Sử dụng hrefthuộc tính (href="# value ") để liên kết tới dấu trang
  <a href="#C4">Jump to Chapter 4</a>
  <a href="html_demo.html#C4">Jump to Chapter 4</a>

- cách thêm favicon : (favicon là 1 hình ảnh nhỏ cạnh tiêu đề trên tab trình duyệt): sử dụng thẻ link để làm điều này
    <link rel="icon" type="image/x-icon" href="/images/favicon.ico">
- table: bảng trong html:
  <table>
  <tr>
  <th></th>
  <th></th>
  </tr>
  <tr>
  <td></td>
  <td></td>
  </tr>
  </table>
- sử dụng thuộc tính boder để tùy chỉnh các đường kẻ trong bảng:
  một số nét đường kẻ
  solid: nét liên đơn
  double: nét liền đôi
  dotted: nét chấm
  dashed: nét gạch
- tùy chỉnh kích thước các hàng và cột trong table

* để tùy chỉnh kích thước hàng ta chỉnh kích thước tại hàng mà ta muốn chỉnh thẻ tr
* để chỉnh kích thước cột ta chỉnh kích thước <th>
* sử dụng thuộc tính colspan="2" để gộp 2 cột trong cùng 1 hàng
* sử dụng thuộc tính rowspan="2" để gộp 2 hàng trong cùng 1 cột

- lớp giả: (even:chẵn) (odd:lẻ)
  :nth-child(even){ // áp dụng cho các thẻ con là chẵn
  }
  : nth-child(odd){ // áp dụng cho các thẻ con là lẻ
  }
  :first-child{ // thẻ con đầu tiên
  }
  :last-child{ // thẻ con cuối cùng
  }
- table colgroup: tạo kiểu cho các cột cụ thể
<colgroup>: thẻ này phải nằm trong <table>, trước <th><td><tr>, sau <caption>
- HTML Iframes: là thẻ dùng để hiển thị 1 trang web khác trong trang web của mình
  <iframe src="https://www.w3schools.com"></iframe>
2 Form HTML
- Biểu mẫu HTML được sử dụng để thu thập thông tin đầu vào của người dùng. Đầu vào của người dùng là thường được gửi đến một máy chủ để xử lý.
- Các đầu vào như: input, raido, check box
- mỗi đầu vào đều phải có name. Đầu nào k có name sẽ không được gửi đi
<form action="/action_page">
    <label for="fname">First name:</label><br>
    <input type="text" id="fname" name="fname"><br>
    <input type="radio" id="html" name="fav_language" value="HTML">
    <label for="html">HTML</label><br>
    <input type="radio" id="css" name="fav_language" value="CSS">
    <label for="css">CSS</label><br>
    <input type="radio" id="javascript" name="fav_language" value="JavaScript">
    <label for="javascript">JavaScript</label>
    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
    <label for="vehicle1"> I have a bike</label><br>
    <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
    <label for="vehicle2"> I have a car</label><br>
    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
    <label for="vehicle3"> I have a boat</label>
    <input type="submit" value="Submit">           // gửi đi
</form>
- action: thuộc tính để thiết lập URL sẽ nhận dữ liệu, là địa chỉ mà dữ liệu của form gửi đến (submit đến, post đến)
  ( nếu action bị bỏ qua thì hành động sẽ được sử lý tại trang hiện tại)
- method( mặc định là get): cách chúng ta gửi dữ liệu đi theo dạng nào
  Sử dụng method="get" thì khi submit dữ liệu được biểu diễn (encoding) thông qua URL (người dùng thấy rõ dữ liệu trên thanh địa chỉ trình duyệt khi nó gửi đi). Sử dụng method="post" thì khi submit biểu diễn trong nội dung của Http Request gửi đến Server và là ẩn với người dùng. Sử dụng post an toàn hơn.
- taget: sau khi submit form kết quả sẽ được hiển thị ở tab trình duyệt nào
  \_blank Phản hồi được hiển thị trong một cửa sổ hoặc tab mới
  \_self Phản hồi được hiển thị trong cửa sổ hiện tại
  \_parent Phản hồi được hiển thị trong khung chính
  \_top Phản hồi được hiển thị trong toàn bộ cửa sổ
  framename Phản hồi được hiển thị trong iframe được đặt tên
- The Autocomplete Attribute: tự động điền những giá trị người dùng đã nhập truocs đó
  autocomplete="on" //off

- 1 vài form elements:
<input>: nhập dự liệu
<input type="text" id="fname" name="fname">
<label>: nhãn
<label for="fname">First name:</label>
<select>: chọn dữ liệu từ drop-down list
<select id="cars" name="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select>

<textarea>: vùng nhập văn bản
<textarea name="message" style="width:200px; height:600px;">
The cat was playing in the garden.
</textarea>

<button>: nút bấm

<fieldset>: nhóm các dữ liệu có liên quan thành 1 nhóm
<legend>: tiêu đề, chú thích cho fieldset
<form action="/action_page.php">
  <fieldset>
    <legend>Personalia:</legend>
    <label for="fname">First name:</label><br>
    <input type="text" id="fname" name="fname" value="John"><br>
    <label for="lname">Last name:</label><br>
    <input type="text" id="lname" name="lname" value="Doe"><br><br>
    <input type="submit" value="Submit">
  </fieldset>
</form>

<datalist>
<output>
<option>
<optgroup>
