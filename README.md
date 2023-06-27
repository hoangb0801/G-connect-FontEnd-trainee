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

# DAY 2: CSS

1. Backgroud-color:

- opacity: dùng để chỉnh độ mờ cho background

* NOTE: khi sử dụng opacity: các thẻ con của nó cũng sẽ có cùng độ mờ

- để khắc phụ điều trên ta sử dụng màu RGBA. chỉnh chỉnh độ mờ của màu backgroud

2. Backgroud-image: dùng hình ảnh làm backgroud ( mặc định hình ảnh sẽ bị lặp lại để phủ kín backgroud)

- backgroud-image:url("");
- background-position: right top //Đặt vị trí bắt đầu của hình nền
- background-repeat: no-repeat; //Đặt cách hình nền sẽ được lặp lại ( repeat-x , repeat-y)
- background-attachment : scroll // hình nền sẽ cuộn theo trang hay nằm cố định ( sroll, fixed)

3. inherit: giá trị này có nghĩa. sẽ được kế thừa từ phần tử cha
4. Margins: dùng để tạo khoảng cách từ boder của element đến các elemnet xung quanh

- margin= auto; // có thể dùng để căn giữa chiều ngang
- Sự hợp nhất lề:( chỉ xẩy ra với lề trên và lề dưới) đôi khi giữ 2 elment có lề trên và lè dười có thể bị hợp nhất. Độ rộng tổng 2 lê bằng độ rộng lề lớn hơn

5. Padding: là khoảng cách từ boder đến phần nội dung của element

- khi thêm padding: ta sẽ làm tăng chiều rộng của cả element
- để khắc phục điều này ta sử dụng thuộc tính:
  box-sizing: border-box;

6. height/width

- height: chiều cao
- width: chiều rộng
- min-widht: chiều rộng tối thiểu
- max-widht: chiều rộng tối đa

7. một số đơn vị đo

- auto: mặc định. Trình duyệt tự tính toán
- lenght: px, cm, etc
- %: bằng % khối chứa nó
- initial: đặt làm giá trinh mặc định
- inherit: kết thừa từ thẻ cha của nó

8. OutLine: là 1 đường viền nằm bên ngoài boder:

- làm cho phần tử nổi bật hơn
- outline không làm thay đổi độ dày elemnt và layout của trang
- outline có các thuộc thính giống boder
- outline-offset= 2px // chỉnh khoảng cách của outline với boder

9. TEXT

- text-align: left/ right/ center/ justifed // căn chữ theo hướng nang
- text-align-last: left/ right/ center/ justifed // chỉnh hướng dòng cuối văn bản
- direction: rtl; // viết ngược lại chữ
  unicode-bidi: bidi-override;
- vertical-align: baseline; // căn chỉnh chữ them hướng dọc

10. text-decoration:

- dùng để tạo ra các chữ có gạch chân, gạch ngang, gạch trên
- hoặc dùng để bỏ chữ có gạch chân cho thẻ a

11. text-transform: uppercase/lowercase/ capitalize

- sử dụng để chuyển chữ hoa, chữ thường, viết hoa chữ cái đầu của twungf twuf

12. Spacing

- text-indent:50px // thụt đầu dòng của đônạ văn
- letter-spacing: 5px; // khoảng cách giữa các chữ cái
- line-height: 0.8; // khoảng cách giữa các dòng
- word-spacing: 10px; // khoảng cách giữa các từ
- white-space: nowrap; // cách sử lý khoảng trắng bên trong 1 phần tử
  13 Fonts: font chữ
- font-family: Arial, Helvetica, sans-serif; // sử dụng font chữ. font chính, font dự phòng
- font-style: normal/italic; // kiểu chữ thường/ chữ in nghiêng
- font-weight: 400; // độ dày chữ
- font-size: 10px // kích thước chữ

* một vài kích thước chữ

- px
- em (1em=16px)
- vh (1vh=1% chiều cao khung hình)
- vw (1vw =1% chiều rộng khung hình)

14. Link

- 4 kiểu trạng thài của link

* a:link - link bình thường, chưa được truy cập
* a:visited - link đã được truy câp
* a:hover - link khi được hover vào
* a:active - link khi đang được click

15. cuộn
    overflow-x: auto // cuộn theo hướng ngang
16. display:

- visibility: hidden // phần tử sẽ bị ẩn đi nhưng vẫn chiếm chỗ

17. sử dụng max-width kết hợp với magin: auto
18. Position:
19. z-index: chỉ sự nổi lên, nằm đè lên trên các phần tử khác

- z-index: càng cao thì càng nổi lên trên
- z-index: chỉ sử dụng được khi element có thuộc tính position, hoặc là các thẻ con trực tiếp của thẻ cha có display flex

20. Overflow: chỉ định khi nội dung bị tràn khỏi khối. khi đó quyết định cắt bỏ hay gắn thêm thanh cuộn

- visibale - Mặc định. Phần tràn không bị cắt bớt. Nội dung hiển thị bên ngoài hộp của phần tử
- hidden - Phần tràn bị cắt bớt và phần còn lại của nội dung sẽ ẩn đi
- scroll - Phần tràn được cắt bớt và một thanh cuộn được thêm vào để xem phần còn lại của nội dung
- auto - Tương tự như cuộn, nhưng nó chỉ thêm thanh cuộn khi cần thiết

21. Các cách căn giữa

- theo chiều ngang
- theo chiều dọc:
  - sử dụng line-height bằng với chiều cao của khối
  - nếu chiều cao không được tùy chọn thì sử dụng{
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    }
- sử dụng flex-box

22. Combinator: các cách chọn elemt
    -Descendant Selector:
    div p: chọn tất cả thẻ p nằm trong thẻ div
    div>p: chọn tất cả thẻ p có thẻ cha là thẻ div
    div+p: chọn thẻ p đứng ngay sau thẻ div
    div~p: chọn tất cả thẻ p đứng sau thẻ div

23. Pseudo-classes: các lớp giả
    ::first-line: css vào dòng đầu tiên của văn bản.
    ::first-letter: css chữ cái đầu tiên của văn bản
    ::before : chèn một số nội dung trước nội dung của một phần tử.
    ::after:chèn một số nội dung sau nội dung của một phần tử.
    ::marker: css các điểm đánh dấu của các mục danh sách.
    ::selection: css phần được người dùng chọn ( người dùng bôi đen)
24. CSS Sprite: sử dụng 1 hình ảnh gồm nhiều ảnh khác nhằm giảm băng thông khi load trang
25. Attribute selector:
    là các chọn attibute trong element

- [attribute] được sử dụng để chọn các phần tử có thuộc tính được chỉ định.
- [attribute = “value”] được sử dụng để chọn các phần tử có thuộc tính và giá trị được chỉ định.
- [attribute ~ = “value”] được sử dụng để chọn các phần tử có giá trị thuộc tính chứa một từ được chỉ định.
- [attribute | = “value”] được sử dụng để chọn các phần tử có thuộc tính được chỉ định bắt đầu hoặc theo sau dấu- bằng giá trị được chỉ định.
- [attribute ^ = “value”] được sử dụng để chọn các phần tử có giá trị thuộc tính bắt đầu bằng một giá trị được chỉ định.
- [attribute$ = “value”] được sử dụng để chọn các phần tử có giá trị thuộc tính kết thúc bằng một giá trị được chỉ định.
- [attribute * = “value”] được sử dụng để chọn các phần tử có giá trị thuộc tính chứa một giá trị được chỉ định.

25. CSS Math Functions

- calc() Cho phép thực hiện các phép tính để xác định giá trị thuộc tính CSS
- max() Sử dụng giá trị lớn nhất, từ danh sách các giá trị được phân tách bằng dấu phẩy, làm giá trị thuộc tính
- min() Sử dụng giá trị nhỏ nhất, từ danh sách các giá trị được phân tách bằng dấu phẩy, làm giá trị thuộc tính

# Day 3: JS

1. Variables( biến)

- có 4 cách để khai báo biến trong JS
  - var: sử dụng và gán lại giá trị. có thể được gọi bên ngoài block chứa nó. có thể khai báo lại biến
  - let: sử dụng và gán lại giá trị. không thể khai báo lại biến
  - const: sử dụng như và không gán lại giá trị. không thể khai báo lại biến, không gọi được bên ngoài block của nó
  - không dùng gì cả: không nên dùng cách này
- khi khai báo mà không gán giá trị cho biến. biến sẽ có giá trị = unfefined
- thông thường sẽ khai báo đối tượng với const

2. từ khóa this

- Trong phương thức của object. this trỏ đến object
- đứng độc lập 1 mình, this trỏ đến object toàn cục
- trong function, this trỏ đến object toàn cục
- trong function, ở chế độ nghiêm ngặt, this không xác định
- trong sự kiện, this trỏ đến element nhận sự kiện
- các phương thức như call(), apply(), bind() , this trỏ đến any object
- this không phải biến. this là 1 từ khóa. không thể thay đổi giá trị trong this

3. events

- events là bất cứ điều gì trình duyệt làm hoặc người dùng tác động dến

* web page hoàn thành việc tải trang
* một input field đã bị thay đổi
* một button được click
  => js sẽ thực thi 1 mã code khi phát hiện có sự kiện

3. Object

- 2 object khi so sánh bằng luôn luôn bằng false

4.  String

- let text="ABCSXS" // khai báo
- text.length // độ dài

5. các phương thức với string

- kiểm tra độ dài
  text.length;
- Trích xuất nội dung chuỗi: có 3 cách
  - slice(start, end) :
    . trả về phần bị cắt thành 1 chuỗi mới
    . khi thiếu tham số thứ 2. Sẽ cắt từ tham số thứ nhất đến hết
    . khi tham số là số âm. sẽ tính từ cuối lên
  - substring(start,end)
    . tương tự như slice
    . khi tham số là âm. sẽ được tính là 0
  - substr(start,length)
    . tương tự như slice
- Thay thế giá trị trong chuỗi : Ứng dụng để thay thế hoặc loại bỏ từ trong chuỗi
  - replace("txtold","txtnew")
    . không làm thay đổi chuỗi cũ mà tạo ra một chuỗi mới
    . chỉ thay đổi từ tìm thấy đầu tiên //text.replace(/MICROSOFT/g, "W3Schools"); thêm flag/g để thây thế tất cả các từ tìm thấy được
    . phân biệt chữ hoa chữ thường //text.replace(/MICROSOFT/i, "W3Schools"); thêm flag/i để không phân biệt chữ hoa chữ thường
  - replaceAll("txtold",""txtNew)
    . giống replace
    . thay đổi tất cả các từ thỏa mãn
  - toUpperCase():trả về 1 chuỗi mới Viết hoa
  - toLowerCase(): trả về 1 chuỗi mới viết thường
- Nối chuỗi : ứng dụng để nối chuỗi hoặc chuyển mảng thành string
  - text3=text1.concat("",text2) : trả về một chuỗi mới bằng cách nối 2 chuỗi với nhau
- Loại bỏ khoảng trắng: có 3 cách
  - trim(): loại bỏ khoảng trắng ở cả 2 đầu chuỗi
  - trimStart(): loại bỏ khoảng trắng ở đầu chuỗi
  - trimEnd(): loại bỏ khoảng trắng ở cuối chuỗi
- Đệm chuỗi : ứng dụng để đệm số cho đủ độ dài bằng cách chuyển số thành string rồi đệm
  - padStart(lenght,"literals") : đệm vào đầu chuỗi đến khi đạt được độ dài
    text="5";
    padd=text.padStart(4,"0") // 00005
  - padEnd: tương tự nhưng đệm vào cuối
- Trích suất các ký tự trong chuỗi: có 3 phương thức
  - text.charAt(vị trí) // trả về 1 ký tự
  - text[vị trí] // trả về 1 ký tự . Cách này khiên cho chuỗi nhìn giống vậy. Nhưng thực tế không phải vậy. Nó chỉ có thể đọc, không thể ghi đè
- Chuyển chuỗi thành mảng
  - sử dụng split()
    text="Bùi,Minh Hoàng"
    text.split(" ") //["Bùi,Minh","Hoàng"]
    text.split(",") //["Bùi","Minh Hoàng"]
    text.split("") // mảng gồm từng chữ cái
- Search:
  - tìm kiếm theo index
    indexOf("text",0) // trả về vị trí đầu tiên xuất hiện của từ. đối số thứ 2 là vị trí bắt đầu tìm kiếm
    lastIndexOf("text",5) // trả về vị trí cuối cùng xuất hiện của từ. Đối số thứ 2 tương tự
  - tìm kiếm theo search()
    search("text") // trả vè vị trí xuất hiện đầu tiên của từ. chấp nhận biểu thức chính quy
  - tìm kiếm them match():
    match("text") // trả về 1 mảng chưa 1 phần tử là text
    match(/text/g) // trả về 1 mảng chứa tất cả các text xuát hiện trong chuỗi
    matchAll("text")
  - include("text"): //trả về true nếu trong chuỗi chứa giá trị được chỉ định, tham số thứ 2 là vị trí bắt đầu tìm kiếm
  - startWith("text",0)// trả về true nếu giá trị đầu bắt đầu tìm kiếm là text, tham só thứ 2 là vị trí bắt đầu tìm kiếm
    6 back-tics ` `
- ` ` dùng để thay thế dấu "" khi sử dụng chuỗi
- chuỗi trong dấu ` ` có thể sử dụng được nội suy ${}
- Viết được nhiều dòng
- Sử dụng đc biến thay thế
  let name = "hoang"
  let text =`xin chào ${name}`;
- sử dụng được biểu thức
  let a =10;
  let b=5;
  let tong=`total: ${a+b}`
- HTML template
  let header = "Templates Literals";
  let tags = ["template literals", "javascript", "es6"];

      let html = `<h2>${header}</h2><ul>`;
      for (const x of tags) {
        html += `<li>${x}</li>`;
      }
      html += `</ul>`;

6. kiểu dữ liệu bigInt

- kiểu dữ liệu number chỉ lưu được tối đa 15 chữ số
- bigInt giải quyết vấn đề này
- khởi tạo bằng cách thêm chữ n sau số
- không thể thực hiện phép tính giữa bigInt và number
- bigInt không chứa phần thập phân

7. Phương thức Number

- toString: trả về 1 số kiểu chuỗi
- toFixed(2): trả về 1 chuỗi có giá trị bằng số được làm chòn
- toPrecision(3): trả về 1 chuối với giá trị có độ dài xác định
- valueOf(): chuyển số dưới dạng Object về dạng number
  8.Array:
- các phần tử của mảng có thể là number, string, Object
- thêm 1 phần tử cho Array:
- array.push("h") hoặc array[array.length]="h
- chỉ mục của mảng không được đặt tên. chỉ được sử dụng só

8. formatDate: su dung thu vien moment
   <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment-with-locales.min.js"</script> -->
   function formatDate(inputDate) {
   const newFormat = 'DD/MM/YYYY';
   var outputDate = moment(inputDate).format(newFormat);
   return outputDate;
   }
9. vòng lặp:( for, for in, for of)

- for in: lặp quan các thuộc tính của một đối tượng. ( nên dùng for in đối với object) - cũng có thể lặp qua các chỉ số của 1 mảng ( không nên dùng vì có thể xẩy ra lỗi)
  for (propotie in object){
  //code
  }
- for of: lặp qua các giá trị của 1 đối tượng hoặc một mảng  
   for (value in array){
  // code
  }

10. it erables: giống nhưng mảng. interables: là các các đối tượng có thể lặp

- nó đơn giản là 1 chuỗi các phần tủ liên tiếp nhau

11. set là 1 collection các giá trị duy nhất

- mỗi giá trị trong set chỉ có thể suất hiện 1 lần

12. class:

- class là khuôn mẫu để tạo ra đối tượng.
- class luôn phải có contructor
- tên class thường viết hoa chữ cái đầu
- trong class có những thuộc thính và phương thức
- Class kế thừa:
- để tạo ra 1 class mới có các phương thức từ class trước đó
- ta sử dụng từ khóa extends:
  ex: class New extends Old{
  contructor(para1, para2){
  super(para1);
  this.para2=para2
  }
  }
- phương thức super() sẽ trỏ đến class cha
- việc gọi super trong contructor. ta có thể gọi contructor của cha
- lấy dữ liệu thuộc tính và phương thức của class cha

- static class:
- phương thức static được định nghĩa trong class của chính nó- có thể
  coi static method là 1 object
- bạn sẽ không thể gọi được phương thức này thông qua đối tượng được khỏi tạo bởi class
- nếu bạn muốn sử dụng nó. bạn cần phải chuyền cho nó 1 tham số

13. bieu thức chính quy là chuỗi các ký tự tạo thành mẫu tìm kiếm
    cú pháp: /từ tìm kiếm/ công cụ tìm kiếm

# Day 7: React

-React là 1 thư viện JS để xây dựng giao diện người dùng

- React sử dụng để xây dựng single-page-applications
- React cho phép chúng ta tạo UI components có tính tái sử dụng

1.  -React.creatElement(): sử dụng react để tạo ra các elment. Việc tạo elment bằng react sẽ ngắn gọn hơn tạo bằng DOM Document
    note: bản thân React không kèm theo thành vân render ra UI. Vì vậy ta sử dụng thêm thư viện ReactDOM
    let element= React.createElement(
    "tagName",{props},child // Có thể sử dụng JSX để tạo React Element nhanh chóng và dễ dàng hơn
    )

- ReactDOM: dùng để render ra UI web từ React element
  const root = ReactDOM.creatRoot(document.getElemnetById(""root"))
  root.render(element)

2. tạo mới bằng creat-react-app

- npx create-react-app name
- cd name
- npm start

## giới thiệu về JSX

1. JSX là gì

- JSX là là cú pháp thẻ gần giống như HTML nhưng đi kèm với bộ tính anwgcar JS

2. Nhúng Biểu thức trong JSX

- sử dụng biến trong JSX bằng cách bao quanh biến bằng dấu ngoặc nhọn
  const name="hoang";
  const element=<h1>hello: {name}</h1>;
- hoặc có thể nhứng bất kỳ biển thức JS nào bên trong JSX bằng dấu ngoặc nhọn

3. JSX là 1 biểu thức trong JS

- Có thể sử dụng JSX bên trọng điều kiện if hoặc vòng lặp for

4. Xác định thuộc tính của element bên trong JSX

- dùng dấu nháy kép để khai báo thuộc tính của thẻ
  const elment=<a href="https://....">link</a>
- dùng biến biến hoặc biểu thức
  const imgUrl="https://...."
  const element= <a href={imgUrl}></a>
  warning: ReactDOM sử dụng tên quy tắc cameCase. vì vậy
  for=>HTMLFor
  class=>className, tabindex=>tabIndex

5. Thẻ con trong JSX

- JSX có thể chứa thể con. Sử dụng dấu ngoặc tròn để bao quanh jsx
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);

6. JSX chỗng tấn công injection

- ReactDOM loại bỏ những ký tự đặc biệt ở bất kỳ giá trị nào khi đc những vào JSX trước khi được render

7. JSX là 1 object

- babel biên dịc JSX thành những câu gọi hàm React.createElement();
  ví dụ:
  // JSX
  const Ele= (
  <h1 className="hihi">hello</h1>
  )
  // convert sang JS thuần với React.creacElement()
  const Ele=React.creacElement(
  "h1", //tagName
  {className:"hihi"}, // atibute
  "hihi" // children
  )
  // React.creatElemnt sẽ kiểm tra lỗi và tạo ra 1 đối tượng giống như dưới đây
  const Ele=React.creacElement(
  "h1",
  props:{
  className:"hihi",  
   "hihi"
  }
  )
- JSX không hỗ trợ câu lệnh if: thay vào đó có thể sủ dụng biểu thức bậc 3:

{a<b ? đúng : sai}

## Rendering Elememnts ( render các elemnet)

1. Việc render các elemnets

- Element là phần nhỏ nhát trong ứng dụng React
- Elemt mô tả những gì bạn muốn thấy trên màn hình
- React element khác với element DOM của trình duyệt. Nó là 1 đối tượng đơn giản.
- ReactDOM sẽ cập nhật DOM để phù hợp với từng ReactElement
  NOTE: element không phải là component. Mà Compomnents sẽ được tạo bởi nhiều elements
- type trong react Element: string(tagName), funciton/class

2. Reder một Elemnt vào trong DOM

- ứng dụng xây dựng bằng React sẽ thường có duy nhất một Node DOM gốc và thường đặt id = root
<div id="root"></div>
- mọi thứ bên trong nó sẽ được quản lý bới ReactDOM
- các elements mong muốn được hiển thị sẽ được render vào root
- truyền ReactElements vào trong root bằng cách sử dụng phương thức ReactDOM.render()

const root= ReactDOM.creatRoot( // tạo root ReactDOM
document.getElementById("root")
);
const element= <h1>hihi</h1> // tạo element với JSX
root.render(element) // truyền element vào trong root và reder ra màn hình 3. cập nhật Elemnet sau khi được render

- các React Element là bất biến. khi đã tạo ra 1 Elememnts thì sẽ không thể thay đổi được Atribiute và children của nó.
- Các duy nhất để cập nhật giao diện là tạo ra 1 elements mới rồi render lại

4. React Chỉ Cập Nhật Những Gì Cần Thiết

- khi render 1 element mới. React sẽ kiểm tra và chỉ cập nhật những gì mới

### Components and Props

1. khái niệm

- Components cho phép chia UI thành nhiều phần độc lập. do đó có thể tái sử dụng.
- components giống như các funcition trong JS. với đầu vào là Props và trả về các ReactElements dự kiến sẽ xuất hiện trên màn hình
- tên Component phải được viết hoa chữ cái đầu

2.  Các loại components ( funcition components and class Componets)

- funcition component là 1 funcition trong JS:
  funcition Welcome(props){
  return <h1>hello : {props.name}</h1>
  }
- class component là một class kế thừa từ React.Components . render() ra elements cần hiển thị

  class Welcome extends React.Compomnents {
  reder(){
  return <h1>hihi:{this.props.name}</h1>
  }
  }

3. Rendering một Component

- React elements không chỉ biểu diễn các DOM tags ( div, h1, a,p,..)
  const element = <div></div>
- Mà còn có thể biểu diễn các components do người dùng tự định nghĩa
  const element = <Welcome name="hoàng"/>

4. Prors: khi gặp một element biểu diễn component do người dùng tự định nghĩa. Nó sẽ truyền atribute và child dưới dạng 1 object. Object này gọi là props

function Welcome(props) { // components do người dùng tự định nghĩa
return <h1>Hello, {props.name}</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <Welcome name="Sara" />; // component Welcome, tham số đầu vào props: { name:"Sara"}
root.render(element);

# NOTE: luôn đặt trên Components bắt đầu bằng chữ in hoa

4. Tạo Components

- các component có thể sử dụng lồng nhau. bằng cách gọi component khác ở phần return của component
  function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
  }

  function App() {
  return (
  <div>
  <Welcome name="Sara" />
  <Welcome name="Cahal" />
  <Welcome name="Edite" />
  </div>
  );
  }

4. tách Componets

- Nên tách các componet thành có componets nhỏ hơn
- Nên đặt tên props dựa trên góc nhìn tổng quan nhiều trường hợp hơn là trên góc nhìn trong bài toán

5. props chỉ dùng để get dữ liệu

- khi định nghĩa 1 component thì không được phép thay đổi props của chính nó (pure)
  5.1 props trong JSX

* 2 các cách truyền props
  <component  
   props1="chuỗi"
  props2={biểu thức} // biến, cộng trừ, toán tử 3 ngôi,..  
   />
* Rest/ Spread
  Rest: lấy phần tử trong object rồi gán vào biến ...inputProps
  Spread: rải từng phần tử trong biến ra

## state và lifecycle

NOTE:

1. State

- state là trạng thái của 1 cái gì đó( một biến, một đối tượng) trong một thời gian cụ thể
- state là 1 đối tượng. nó cho phép reder lại component khi dữ liệu thay đổi

2.

# REACT Event

- Giống như HTML DOM events: click,change,..

1. thêm sự kiện vào React không đối số

- sử dụng camelCase để viết tên sự kiện
- tên sự kiện được đặt trong dấu ngoặc nhọn{}
  funcition suLy(){
  return 1;
  }
  <button onClick={suLy}>nhấn để sử lý</button>

2. thêm sự kiên có truyền đối số
   const shoot = (a) => {
   alert(a);
   }
   return (
   <button onClick={() => shoot("Goal!")}>Take the shot!</button>
   );
3. đối tượng event viết tắt là e

- e trả về đối tượng event được kích hoạt sự kiện
- e.type // kiểu sự kiện
- e.target // đối tượng được bật sự kiện
  function Football() {
  const shoot = (a, b) => { // b= event . ở đây là đối tượng có sự kiện
  alert(b.type);
  }

  return (
  <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
  );
  }

# FROM:

- trong thực tế chúng ta tách form thành component. mỗi form lại sử dụng các phần tử input, checkox, radio khác nhau. do dó cũng có thế tách từ input, checkbox thành components
- cách làm: khai báo 1 đối tượng form với các phương thức ( components) là các input,checkbox
  const From={
  function Input(){
  return <input />
  }
  funciton CheckBox(){
  return <input type="checkbox"/>
  }
  }
  funciton App(){
  return(
  <>
  <form.Input />
  </>
  )
  }
- cách tạo component linh động
  funciton App(){
  const type="input";
  const Component= form[type]
  return(
  <>
  <Component />
  </>
  )
  }
- Tạo Component button dùng cho 2 trường hợp

# sử dụng toán tử logic

- các toán tử logic như booleans, null, underfined sẽ không được render ra giao diện
- kết hợp với boolen để render giao diện theo điều kiện

funciton App(){
let check=true;
return
(
<>
{check && <h1>hiển thị</h1>} // nếu check bằng false sẽ không render ra thẻ h1
</>
)
}

# HOOK (móc): là các medthod được viết sẵn bằng JS

- gắn các menthod này vào các component=> nên gọi là hook

1. chỉ dùng cho funcition components
2. lifecycle:

- từ khi components đc thêm vào dom. cho đến khi nó hoạt động, thay đổi dữ liệu, đến khi component bị gỡ khỏi dom
  => nó đánh dấu các thời điểm
  vd: khi componet đc thêm vào dom thì sẽ thường gọi Api tại thời điểm đó. khi component rời khỏi đom. thường clear interval, clear timeOut , removeEvenLittener để tránh rò rỉ bộ nhớ
  . Trong class Componets. Cung cấp nhiều menthod trong hành trình lifecycal của nó.
  - trong React gồm 3 giai đoạn chính của 1 Components:
  * Mounting: là việc reder hoặc đặt Componnet vào trong DOM
  * Updating
  * Unmounting

1. useState

- state: là trạng thái của dữ liệu.
- dữ liệu thay đổi=> giao diện thay đổi
- Sử dụng khi. Dữ liệu đang được hiển thị trên màn hình. Khi dữ liệu được thay đổi thì giao diện tự động cập nhật

b1: Import
import {useState} from 'react';

funcition Component(){
const [state, getState]=useState(initState)
}

- sate: là biến sẽ thay đổi
- setState(): set lại giá trị cho biến state
- initState: giá trị khởi tạo của sate

NOTE:

- component sẽ được render lại sau khi setState
- initState chỉ được sử dụng cho lần đầu
- Set state với callBack:

* Thực tê: SetState sẽ không set luôn giá trị cua state sau khi được gọi. Dẫn đến setState chỉ set lần set cuối. sau đó mới Render component
* Sử dụng call back làm đối số cho setState:
  setSate(state=>state+1)
  => lúc này setState sẽ set luôn giá trị trả về của hàm callback cho setState

- innitState với callback:

* nguyên nhân: vì Khi sử dụng useState: mỗi khi giá trị thay đổi thì component đó sẽ được reder lại . Dẫn đến những giá trị state được khởi tạo chỉ được sử dụng lần đầu sẽ luôn được gọi lại. gây nặng hệ thống.
  => Sử lý: viết hàm sử lý thành callback trong useState để chỉ chạy 1 lần

- One-way binding: rằng buộc 1 chiều ( mặc định trong React):
  vd: trong Form:
  có 1 input ứng với 1 State . khi nhập vào input thì State tự động thay đổi
- tow-way binding:rằng buộc 2 chiều. khi dữ liệu thay đổi ứng dụng cũng thay đổi theo

2. useEffect
   -sử dụng khi thực hiện các side effects: khi có tác động sảy ra dẫn dến dữ liệu bị thay đổi( call api, updateDOM, setState, sử lý DOM event, Removo event)

- gồm 2 đối số, 3 trường hợp:
  ->> Cả 3 trường hợp. callback luôn được gọi sau khi component mount

* 1 useEffect(callback):

- gọi call back mỗi khi component re-render
- gọi callback sau khi component thêm elmemnt vào DOM.

* 2 useEffect(callback,[])

- chỉ gọi callback 1 lần sau khi component mount
- thường được áp dụng khi gọi aip để hiển thị giao diện

* 3 useEffect(callback,[des])

- des là 1 biến
- callback sẽ được gọi lại mỗi khi des thay đổi

3. useEffect with DOM event

- cách dùng:
  useEffect(function(){
  element.addEventListenner("click",myFunction)

  return ()=>{ // clear up Function
  element.removeEventListenner("click",myFuncition);
  }
  },[])

- vấn đề: khi componet bi Unmount thi addEventListener vẫn sẽ lắng nghe component bị Unmount. khi copomnet được mount lại thì nó sẽ mount component mới. Event sẽ không lắng nghe cái mới mà vẫn lắng nghe cái cũ. gây ra tình trạng không rò rit bộ nhớ.
- cách khách phục: remove event kho copmnet được mout ( clearup function)

* clear up function sẽ luôn được gọi trước khi copmonent bị unmount
* clear up function luôn được goi trước khi callback được gọi ( trừ lần gọi call back đầu tiên) (des thay đổi)

4. useEffect with Set Time
5. userEffect chat thơi gian thực
6. useLayoutEffect:

- dùng để khắc phục vấn đề của useEffect khi cập nhật lại state bên trong callback của useEffect
- thứ tự thực hiện của useEffect:

* 1. cập nhật lại State
* 2. cập nhật lại DOM
* 3. Render lại UI
* 4. gọi cleanup nếu deps thay đổi
* 5. gọi userEffect callback

- thứ tự thực hiện của useLayOutEffect:

* 1: cập nhật lại State
* 2. cập nhật lại DOM
* 3. ClearUp nếu Des thay đổi
* 4. gọi callback
* 5. render lại UI

7. useRef()hook:

- lưu các giá trị qua 1 tham chiếu(biến) bên ngoài
- lý do sử dụng: khi 1 hàm được gọi lại. nó sẽ tạo ra 1 phạm vị mới hoàn toàn. Vì vậy các biến lưu giá trị ở phạm vi cũ sẽ không sử dụng dượcd
- const ref= useRef(giá trị khoi tạo)
- ref trả về một đối tượng có thuộc tính current bằng giá trị khởi tạo

- ref còn hỗ trợ để lấy element bằng cách:
const ref=useRef();

  <h1 ref={ref}>
8 phương thức memo(): đây là phương thức không phải hook

* hook: chỉ dùng cho Function Component
* HOC : dùng cho cả 2. Component bậc cao hơn
* Render Prors: truyền 1 function quan props. trên thực tế truyền qua props child
  => dùng để kế thừa logic. tránh lặp logic ở các component. thiết kế ra những hook. HOC, Render props. Viết mỗi cái chứa 1 tính năng cụ thủ. chứa cách dùng và ưng nhược điểm khác nhau

- ghi nhớ: là một Higher order Component(HOC): ghi lại những Props của 1 component để quyết định xem có render lại component hay không. tránh render lại không cần thiết
- cách dùng.: bao bên ngoài component con cần kiểm tra

export defaul memo(component);

- Trường hợp sủ dụng: sử dụng trong trường hợp. componet cha sử dụng nhiều component con. và độ phức tạp UI lớn thì nên dùng memo( ) cho tất cả các component con. để tránh render lại không cần thiết

9. useCallBack(): sử dụng khi sử dụng cùng function memo(). để chuyền props với kiểu dữ liệu fun, obj, array. để tránh bị render không cần thiết

- truyền tham trị: sao chép truyền giá trị vào vùng nhớ mới
- chuyền tham chiếu: truyền địa chỉ ô nhớ

- cách hoạt động. useCallback sẽ nhận được hàm . nhận được tham chiếu và lưu kết quả trả về ra bên ngoài phạm vi của hàm app. sau đó return lại tham chiếu cho hàm biến. vì vậy khi chuyền biến qua prop, chính là ta đang chuyền tham chiếu. Memo sẽ so sánh. thấy địa chỉ ô nhớ không thay đổi nên không re-Render lại
  const handle= useCallback(()=>{

},[des]) 10. useMemo(): hook

- sử dụng để tránh lặp lại những đoạn code logic thừa
- sử dụng tương tự useCallBack và useEffect

10. useReducer: hook. Là 1 cách khác để giải quyết bài toán giống như Sate

- Hau hết trường hợp dùng useSate : dùng cho các trường hợp state đơn giản như các kiểu dữ liệu đơn giản, các oject, array, không bị lồng nhau, số lượng state ở trong 1 component ít.
- useReducer(): sử dụng cho các trường hợp state phức tạp hơn
- có thể tách useReducer ra 1 file

* 4 bước dùng( phân tích bài toán) :
  1 init state : khởi tạo giá trị
  2 action: up(stae+1) / down (state-1)
  3 reducer:
  4 dispatch: thuật ngữ kích hoạt 1 action

11. useContex: dung de tao state golbal

- giai quyet van de chuyen prop qua cac component trung gian
- compA=>CompB=>CompC
  1 tao context : ( tạo 1 phạm vị)
  2 provider: truyền dữ liệu
  3 Consumer: con nhận dư liệu từ cha

#### learn VueJs

1. # 01

- 1.1 Vue instance

* tạo app
  const app=Vue.createApp({}) // {}: khai báo các option:vd:template,data()..
* mount app vào mơi muốn hiển thị app
  app.mount(#content) // <div id=""content><div>
* Template: là mẫu các dữ liệu muốn hiển thị kiểu chuỗi
  ex: template:"<h1>hello: {{name}}</h1>"

1. data(): hàm để trả ra dữ liệu dữ liệu mà mình muốn mount ra ứng dụng. khi dữ liệu thay đổi. View sẽ render lại. Chỉ có dữ liệu được khai báo trong data bị thay đổi thì view mới render lại
   data(){
   return{
   name:"hoang",
   date:""
   };
   };
2. methods:{} : đối tượng methods chứa những hàm để sử lý sự kiện khi được kích hoạt. từ khóa This trỏ đến đối tượng chứa được kích hoạt sự kiện.
   methods:{
   onClick(){
   this.name="mến"
   this.date="2000-01-01"
   }
   }
3. filter:{}: dùng để format lại giá trị trước ki hiển thị. Vd như format lại ngày tháng, giá tiền
   filter:{
   currency: (value){
   var formater=....
   return formter.format(value)
   }
   }

khi dùng {{date|currency}} 4.

4. sử dụng toán tử {{}} để truyền dữ liệu vào trong html

- click event: vue cung cấp các drirectip
  <button v-on:click=" name='men' " >changeName<button>
  <button @click="name=onClick">changeName<button> // @=v-on:

5. Sử dụng biểu thức JS:

- sử dụng các toán tử + - /:
  {{number+1}}
- toán tử so sánh bậc 3:
  {{ ok ? "yes" : "no" }}
- string aliter
  <input :id=`list-${id}`>
- sử dụng biểu thức
  {{if(ok){return message}}}

22. diretives ( chỉ thị):

- Một diretives trong vue được bắt đầu bằng v-. Là thuộc tính do vue cung cấp. áp dụng một hàng vi đặc biệt lên kết quả Dom được render ra

1. v-text: truyền 1 đoạn text vào thẻ
   # <div v-text="Xin chao ban"></div>
   <div>
       Xin chao ban
   </div>
2. v-html: truyền 1 đoạn HTML vào thẻ:

- áp dụng. khi cúng ta lưu 1 biến với giá trị là các thẻ. sau đó muốn truyền biến để hiện ra các thẻ
- {{}}: sẽ không thể in giá trị của biến ra được. vì các ký tự <>&"' sẽ được mã hóa
  -> vì vậy chúng ta sử dụng v-html.
- việc render Html động có thể dẫn đến các lỗ hổng XSS. vì vậy chỉ dụng với các trường đáng tin cậy. Không sử dụng cho các trường được người dùng cung cấp ( input )
<div v-html="<p>Xin chao ban</p>"></div>
sau khi được render ra 
<div>
    <p>Xin chao ban</p>
</div>

3. v-model: thường trong thẻ input để toway-binding.

- khi chúng ta nhập vào ô input. thì tự động giá trị của ô input sẽ được gán cho biến
  <input v-model="name">
- 1 vài option của v-model

* v-model.lazy: sẽ tự đồng bộ giá trị input với dữ liệu sau sự kiện kiện change của input
* v-model.number: cast giá trị từ input nhập vào từ kiểu string sang kiểu số
* v-model.tim: Tự động loại bỏ khoảng trắng trước và sau giá trị của input

- Các thuộc tính như value, checked, selected trong các input của form sẽ bị bỏ qua. Vue coi các dữ liệu trong data là nguồn dữ liệu đáng tin cậy hơn

4. v-bind: truyền giá trị cho thuộc tính của các element
v-bind:<tên thuộc tính>="giá trị"
viết tắt: v-bind:Style = :Style
<h1 v-bind:Style="style">hello</h1>

- tự động rằng buộc nhiều thuộc tính:
data(){
return{
obObAtri:{
id:"1",
class:"wrap"
}
}
}
<div v-bind="obObAtri"><div>
- boolean Atrribute: disabled
- Calling functions: callfuncition. sẽ được gọi mỗi khi components cập nhật. vì vậy chúng k có side effects
  <time :title="toTitleDate(date)":datetime="date">
  {{ formatDate(date) }}
  </time>

5. v-on: kích hoạt các sự kiện( click, input,mousemove )
   v-on:click="onClick" // onclick: hàm sử lý
   viết tắt: v-on:Click = @click
   function onclick(e){
   consol.log(e.target)
   }  
   <btn @click="onclick">click</btn>
   -Truyền tham số cho hàm sử lý sự kiện
   function say(mess){
   conslo.log(mess)
   }
   <btn @click="onclick("hihi")>click</btn>

- truyền tham số event và tham số khác
  function say(mess,event){
  event.preventDefault()
  conslo.log(mess)
  }
  <btn @click="onclick("hihi",$event)>click</btn>

- Mốt số tùy chọn thay đổi sự kiện gốc(modifire). Các modifire cũng có thể lồng nhau (click.prevent.self. năng hàng vi mặc định của cả phần tử cha và chon của nó. click.self.prevent: ngăng hành vị mặc định của chính no)

* v-on:click.once="click" // sự kiện
  click chỉ sử dụng được 1 lần sau khi tải trang
* v-prevent: hủy bỏ sự kiện mặc định tải lại trang
* v-self: chỉ kích hoạt khi phần tử không phải là phần tử con

6. Conditinal: là những điều kiện để render elemnet

- v-if, v-else-if, v-else: điều kiện để elment đc hiển thị

7. v-show: giống với v-if. khác ở chỗ. Tất cả các element đều được render ra. việc hiển thị hay không phụ thuộc và thuộc tính css display=none
8. v-for: là derective dùng để lặp qua các phần tử của mảng. từ đó render ra các elemt

- khi dùng nên bind thêm thuộc tính key
<ul v-for="i in 10" :key="n">
<li>{{n}}</li>
</ul>

9. v-cloak: dùng để hiển thị element trong 1 khoảng thời gian cố định. Ví dụ như khi vào trang web elment sẽ không hiển thị ngay mà sau 1 khoảng thời gian mới hiển thị. Nên sử dụng với css

10. Event

- v-on:
  -short hand: @

4. list
   -v-for
5. truyền atribute
   -v-bind

- truyền class: v-bind:class=""
- truyền src : v-bind:src""

6. dynamic class:

- truyền dữ liệu vào trong các thuộc tính
- vd: : class="{cart:isCarrt}" // nếu isCart == true thì class ==cart

7. Computted proprety:

- Tự động được gọi mỗi khi dữ liệu thay đổi
- là 1 object, trả về dữ liệu
- chỉnh sửa, tính toán dữ liệu trước khi hiển thị dữ liệu
  vd: lọc ra dữ liệu các sản phẩm có giá nhỏ hơn 1000

computed:{
productsComputed(){
return this.products.filter(pr=>pr<1000);
}
}

- Computed cũng có thể set dữ liêu
  computed: {
  fullName: {
  // getter
  get() {
  return this.firstName + ' ' + this.lastName
  },
  // setter
  set(newValue) {
  // Note: we are using destructuring assignment syntax here.
  [this.firstName, this.lastName] = newValue.split(' ')
  }
  }
  }

8. vue file

- file view:
- template: chứa những HTML được mount ra
- script: những hàm và phương thức sử lý js
- style: viết css cho chính nó, cho componet con mà nó chứa, hoặc cho cả dự án
- template ref: dùng để định ranh component hoặc các menthod của componet ở 1 nơi bên ngoài.

9. template Ref: khi chung ta cos nhieu coponent. vì vậy cần định danh component để gọi component và các menthod của nó wor 1 nơi bên ngoài
<h1 ref="hello">haha</h1>
để truy cập vào ref:
this.$ref.hello
10. Refs: 
- khi bạn sử dụng refs là sẽ quan sát giá trị. Nếu giá trị bị thay đổi thì sẽ tự động cập nhật lại DOM
- refs nhận vào 1 đối số và trả về 1 object.
- .value: để lấy giá trị object

import {ref } from "vue"
 const name= ref("hoang")
 consolog(name.value)             // hoang

10. Reactive: cũng giống như Refs: 
- Reactive: chỉ nhận vào 1 đối tượng, khi muốn thay đổi đối tượng thì chỉ có thể thay dooird từng thuộc tính của nó
10. setup(){ }: là 1 hook đặc biệt của Vue. nó chứa các biến và các funcition. cần phải return để sử dụng các biến và funciddos
11. sủ dụng <script setup> để thay thế hàm setup()
10. lifecycle hook: là vòng đời của đối tượng Vue

- hàm lifecycle hook cung cấp 1 số hàm gọi. giúp người dùng thêm code của mình vào các giai đoạn cụ thể (stage) trong vòng đời của đối tượng
  vd: hook created:(){} dùng để thực thi code sau khi đối tượng được tạo
  new Vue({
  data: {
  a: 1
  },
  created: function () {
  // `this` trỏ đến đối tượng Vue hiện hành
  console.log('giá trị của a là ' + this.a)
  }
  })
  // => "giá trị của a là 1"

Các hook khác như mounted, updated, và destroyed cũng được gọi vào các giai đoạn khác nhau trong vòng đời của đối tượng. Tất cả các hook này đều được thực thi với ngữ cảnh this trỏ đến đối tượng Vue hiện hành.
Warning: không sử dụng arrow funcition cho các tùy chọn call back vì như vậy this sẽ không trỏ tới đối tượng Vue mà trỏ tới đối tượng con gây lỗi

# 1 Cú pháp Template

1.(hạn chế truy cập toàn cục) Restricted Globals Access 2. dynamic agruments: đối số động
data(){
return{
namAtribute="click"
nameUrl="src"
}
}
<a v-bind:[nameUrl]="url">hihi</a>
<a @[nameAtribute]="onclick">hihi</a>
// bên dưới không hợp lệ
<a :['foo' + bar]="value"> ... </a>

# 3: class and style bindings

1 bindings class

- truyền 1 object vào vào v-bind:class để bật tắt class 1 cách linh hoạt
<div v-bind:class="{ active: isActive }"></div>
giải thích: class active sẽ được áp dụng nếu isActive là true
- v-bind:class và atribuite class thông thường có thể dùng gộp với nhau
- ta có thể bật tắt nhiều class bằng cách dùng nhiều trường trong object

<div class="static"
     v-bind:class="{ active: isActive, 'text-danger': hasError }">
</div>

data() {
return{
isActive: true,
hasError: false
}
}

nếu biến hasError có giá trị là true thì sẽ render thành

<div  class="static active text-danger">

- ta cũng có thể khai object rồi truyền object vào attribute
  <div class="static"
       v-bind:class="{ classNew }">
  </div>
  data() {
  return{
    classNews:{
      active: true,
      'text-danger':: false
  }
}
}
-Chúng ta cũng có thể bind vào một computed property (thuộc tính được tính toán) trả về một object. Dưới đây là một ví dụ điển hình cho kĩ thuật này:
<div :class="classObject"></div>
data() {
  return {
    isActive: true,
    error: null
  }
},
computed: {
  classObject() {
    return {
      active: this.isActive && !this.error,
      'text-danger': this.error && this.error.type === 'fatal'
    }
  }
}

2. bindings Style
:style: hỗ trợ chèn trực tiếp css vào trong Html
<div v-bind:style="styleObject"></div>
data() {
  return {
    styleObject: {
      color: 'red',
      fontSize: '13px'
    }
  }
}
#4 conditinal reder: render theo đk
-v-if, v-if-else, v-else,

- v-if on <template>: ta sử dụng v-if trong thẻ template khi muốn bật tắt 1 khối HTML
<template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</template>
#5. list Rendering
- v-for để render mảng phần tử hoặc duyệt qua các phần tử của object

1. v-for with array: duyệt qua các phần tử của mảng
   data() {
   return {
   parentMessage: 'Parent',
   items: [{ message: 'Foo' }, { message: 'Bar' }]
   }
   }

<li v-for="(item, index) in items">
  {{ parentMessage }} - {{ index }} - {{ item.message }}
</li>
2. v-for with object ( luôn phải thêm key) : duyệt qua đối tượng 
<div v-for="item in items" :key="item.id">
  <!-- content -->
</div>

<template v-for="todo in todos" :key="todo.name">
  <li>{{ todo.name }}</li>
</template>
3 phát hiện thay đổi trong mảng
- khi gọi các phương thức này thì View cũng sẽ tự động được cập nhật
- push()
- pop()
- shift()
- unshift()
- splice()
- sort()
- reverse()
4. thay thế mảng: filter(), concat() and slice()
this.items = this.items.filter((item) => item.message.match(/Foo/))
5. lọc và sắp xếp mảng
- mảng đơn
data() {
  return {
    numbers: [1, 2, 3, 4, 5]
  }
},
computed: {
  evenNumbers() {
    return this.numbers.filter(n => n % 2 === 0)
  }
}
<li v-for="n in evenNumbers">{{ n }}</li>
- mảng lồng nhau
data() {
  return {
    sets: [[ 1, 2, 3, 4, 5 ], [6, 7, 8, 9, 10]]
  }
},
methods: {
  even(numbers) {
    return numbers.filter(number => number % 2 === 0)
  }
}
<ul v-for="numbers in sets">
  <li v-for="n in even(numbers)">{{ n }}</li>
</ul>

- chú ý khi dùng reverse() và sort(). 2 hàm này có thể làm thay đổi mảng gốc . vì vậy nên coppy sang mảng khác

* return [...numbers].reverse()

# 9 Form input Binding

1. Text
<p>Message is: {{ message }}</p>
<input v-model="message" placeholder="edit me" />

2. Text arier
<span>Multiline message is:</span>
<p style="white-space: pre-line;">{{ message }}</p>
<textarea v-model="message" placeholder="add multiple lines"></textarea>

3. check box:

- một check box
  <input type="checkbox" id="checkbox" v-model="checked" />
  <label for="checkbox">{{ checked }}</label>
- nhiều check box: thay vì dùng 1 biến, ta sẽ dùng 1 mảng
// mảng checkedNames để lưu mảng
export default {
data() {
return {
checkedNames: []
}
}
}
<div>Checked names: {{ checkedNames }}</div>

<input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
<label for="jack">Jack</label>

<input type="checkbox" id="john" value="John" v-model="checkedNames">
<label for="john">John</label>

<input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
<label for="mike">Mike</label>
4. radio
<div>Picked: {{ picked }}</div>

<input type="radio" id="one" value="One" v-model="picked" />
<label for="one">One</label>

<input type="radio" id="two" value="Two" v-model="picked" />
<label for="two">Two</label>
5. select
- chọn 1
<div>Picked: {{ picked }}</div>

<input type="radio" id="one" value="One" v-model="picked" />
<label for="one">One</label>

<input type="radio" id="two" value="Two" v-model="picked" />
<label for="two">Two</label>

- chọn nhiều
<div>Selected: {{ selected }}</div>

<select v-model="selected" multiple>
  <option>A</option>
  <option>B</option>
  <option>C</option>
</select>

# Watch(): giống như effect trong react
- watch(des,callback()): khi des thay đổi thì sẽ thực hiện hàm callback

Component

1 components
import ChildComp from './ChildComp.vue'
<ChildComp/>


2 props: truyền dữ liệu từ cha sang con
parent------------------------------------------------------
<script setup>
import { ref } from 'vue'
import ChildComp from './ChildComp.vue'

const greeting = ref('Hello from parent')
</script>

<template>
  <ChildComp :msg="greeting" />
</template>
childComp------------------------------------------------------
<script setup>
const props = defineProps({
  msg: String
})
</script>

<template>
  <h2>{{ msg || 'No props passed yet' }}</h2>
</template>


3 emit: truyền dữ liệu từ con sang cha
children-----------------------------------------
<script setup>
const emit = defineEmits(['response'])

emit('response', 'hello from child')
</script>

<template>
  <h2>Child component</h2>
</template>


parent-----------------------------------------------
<script setup>
import { ref } from 'vue'
import ChildComp from './ChildComp.vue'

const childMsg = ref('No child msg yet')
</script>

<template>
  <ChildComp @response="(msg) => childMsg = msg" />
  <p>{{ childMsg }}</p>
</template>
4 Slot: Giống như props chilren trong react
- ngoài truyền dữ liệu qua prop
- thì thẻ cha có thể truyền các template fragments cho thẻ con:
parent---------------------------------------------
<ChildComp>nội dung truyền xuống</ChildComp>
children--------------------------------------------------
<slot/>        // dùng thẻ <slot/> để nhận những gì thể cha truyền xuống
<slot>Nội dung dự phòng khi thẻ cha không truyền gì</slot>
5 provide(), injection: là truyền dữ liệu từ cha đến con cháu bất kỳ mà không phải truyền 1 cách lần lượt
-parent componets:
<script setup>
import { provide } from 'vue'

provide(/* key */ 'message', /* value */ 'hello!')
</script
- child componet:
<script setup>
import { inject } from 'vue'

const message = inject('message')
</script>

- cách truyền hàm:
<!-- inside provider component -->
<script setup>
import { provide, ref } from 'vue'

const location = ref('North Pole')

function updateLocation() {
  location.value = 'South Pole'
}

provide('location', {
  location,
  updateLocation
})
</script>
<!-- in injector component -->
<script setup>
import { inject } from 'vue'

const { location, updateLocation } = inject('location')
</script>

<template>
  <button @click="updateLocation">{{ location }}</button>
</template>

6. telepost components
- giúp render 1 tempalate ra nơi bất kỳ 
- ví dụ: khi cần hiển thị dialog: việc dịch chuyển dialog ra bên ngoài sẽ tránh được các nguy cơ  như:
+ bố cục giao diện bị thay đổi
+ thuộc tính z-index bị sai

<button @click="open = true">Open Modal</button>

<Teleport to="body">
  <div v-if="open" class="modal">
    <p>Hello from the modal!</p>
    <button @click="open = false">Close</button>
  </div>
</Teleport>