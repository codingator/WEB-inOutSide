# web_inOutSide
트렌디성 테스트 페이지

## 적용 기술
FE: Jinja2
BE: Flask

퍼블리싱, 순수 JS만 사용(외부 API, 빙고판 세팅) 되어 특별한 기능 없음.

### 메인화면
![화면 캡처 2023-04-17 225349](https://user-images.githubusercontent.com/52080124/232505255-cf5b825f-d2e2-4314-ac47-879290d8294f.png)

### 빙고판
![화면 캡처 2023-04-17 225421](https://user-images.githubusercontent.com/52080124/232505263-e70ddc48-b94c-4f44-8c32-1dcc51dc6af4.png)



## Pythonanywhere 배포

1. Pythonanywhere $Bash 접근
2. $ git clone {GIT URL}
3. $ cd {project}
4. $ virtualenv --python=python3.6 venv
5. $ source venv/bin/activate
6. $ pip install
7. $ python app.py
8. pythonanywhere Source code setting
9. WSGI configuration file 작성
10. Virtualenv 설정
11. Static files 설정
