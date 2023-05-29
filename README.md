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
