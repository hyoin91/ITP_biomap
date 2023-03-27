//스크롤복원
history.scrollRestoration = "manual" //auto 복원

//--------------////////////////jqueryWrapper
$(document).ready(function () {

    //서브메뉴,콤보,토글이벤트
    const label = document.querySelectorAll('.label');
    label.forEach(function (lb) {
        lb.addEventListener('click', e => {
            let optionList = lb.nextElementSibling;
            let optionItems = optionList.nextElementSibling;
            clickLabel(lb);
        })
    });
    const clickLabel = (lb) => {
        // 내가 아닌 다른 select 닫기           
        label.forEach(function (itemLb) {
            if (lb !== itemLb) {
                itemLb.parentNode.classList.remove('active')
            }
        })
        if (lb.parentNode.classList.contains('active')) {
            lb.parentNode.classList.remove('active');
        } else {
            lb.parentNode.classList.add('active');
        }
    }
    const handleClose = e => {
        if (!e.target.classList.contains('optionItem') && !e.target.classList.contains('label')) {
            label.forEach(function (lb) {
                lb.parentNode.classList.remove('active')
            })
        }
    }
    window.addEventListener('click', e => handleClose(e))
    //페이지잉
    $('.PGnation a').not('.PGarrow').click(function () {
        $('.PGnation a').removeClass('on');
        $(this).addClass('on');
    });

    //탭
    const tabBtn = $('.tabBtnWrap').children('button');
    const tabCon = $('.tabConWrap').children('div');
    tabCon.not('.on').hide();
    tabBtn.click(function () {
        const $tabLink = $(this).attr('data-tab');

        tabBtn.removeClass('on');
        $(this).addClass('on');

        tabCon.hide();
        $("#" + $tabLink).show();
    });
        //비공개 
        const test0 = $('td div.lock');
        const test1 = test0.parent().parent('tr');
        const test2 = test0.parent().siblings('.toLeft').children('a');

        test2.click(function (e) {
            alert('비공개입니다.');
            e.preventDefault();
        });
/////////////파일첨부////////////////
 //드래그앤드랍
    $("#fileDrop").on("dragenter", function (e) {
        e.preventDefault();
        e.stopPropagation();
    }).on("dragover", function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).css("background", "#ccc");
    }).on("dragleave", function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).css("background", "none");
    }).on("drop", function (e) {
        e.preventDefault();
        var files = e.originalEvent.dataTransfer.files;
        if (files != null && files != undefined) {
            var tag = "";
            for (i = 0; i < files.length; i++) {
                var f = files[i];
                fileList.push(f);
                var fileName = f.name;
                var fileSize = f.size / 1024 / 1024;
                fileSize = fileSize < 1 ? fileSize.toFixed(3) : fileSize.toFixed(1);
                tag +=
                    "<div class='fileList ic_File'>" +
                    "<p class='fileName'>" + fileName + "</p>" +
                    "<span class='fileSize'>[" + fileSize + " MB]</span>" +
                    "<span class='clear'>x</span>" +
                    "</div>";
            }

            $(this).append(tag);

        }
        
        const xls = $('p:contains("xls")').parent().addClass("ic_excel");
        const ppt = $('p:contains("ppt")').parent().addClass("ic_ppt");
        const pdf = $('p:contains("pdf")').parent().addClass("ic_pdf");
        const doc = $('p:contains("doc")').parent().addClass("ic_word");
        const hwp = $('p:contains("hwp")').parent().addClass("ic_hangle");
        
        $(this).css("background", "none");
        $('.clear').click(function(){
            $(this).parent().remove();
        });
    });
    //저장
    $(document).on("click", "#save", function () {
        var formData = new FormData($("#fileForm")[0]);
        if (fileList.length > 0) {
            fileList.forEach(function (f) {
                formData.append("fileList", f);
            });
        }
    });
//상단 메인 배너 슬라이더
    $('.joinSlider > .page-btns > .page-btn').click(function () {
        const $clicked = $(this);
        const $slider = $(this).closest('.joinSlider');
        const index = $(this).index();
        const isLeft = index == 0;
        const $current = $slider.find('.slides > .bn.active');
        let $post;

        if (isLeft) {
            $post = $current.prev();
        }
        else {
            $post = $current.next();
        }
        if ($post.length == 0) {
            if (isLeft) {
                $post = $slider.find('.slides > .bn:last-child');
            }
            else {
                $post = $slider.find('.slides > .bn:first-child');
            }
        }

        $current.removeClass('active');
        $post.addClass('active');

        updateCurrentPageNumber();
    });

    setInterval(function () {
        $('.joinSlider > .page-btns > .next-btn').click();
    }, 3000);

    //페이지 번호 지정
    function pageNumber__Init() {
        const totalSlideNo = $('.joinSlider > .slides > .bn').length;

        $('.joinSlider').attr('data-slide-total', totalSlideNo);

        $('.joinSlider > .slides > .bn').each(function (index, node) {
            $(node).attr('data-slide-no', index + 1);
        });
    };

    pageNumber__Init();

    // 페이지 번호 변경
    function updateCurrentPageNumber() {
        const totalSlideNo = $('.joinSlider').attr('data-slide-total');
        const currentSlideNo = $('.joinSlider > .slides > .bn.active').attr('data-slide-no');

        $('.joinSlider > .page-btns > .page-no > .total-slide-no').html(totalSlideNo);
        $('.joinSlider > .page-btns > .page-no > .current-slide-no').html(currentSlideNo);
    };

    updateCurrentPageNumber();

});//--------------////////////////jqueryWrapper
// 문의하기
function inquiry() {

    const textA = document.querySelectorAll('.MustselectCon');
    if (textA[0].value == '' || textA[1].value == '') {
        alert('제목 및 내용을 입력해주세요.');
        return false;
    } if (textA[1].value.length < 10) {
        alert('내용은 10글자 이상으로 입력해주세요.');
        return false;
    } else {
        alert('글이 등록되었습니다.');
        location.href = 'Bd_inquiry.html';
    }
}
var fileList = []; //파일 정보를 담아 둘 배열

//프린트
function content_print() {
  window.onbeforeprint = function () {
       document.body.innerHTML = document.getElementById('printWrap').innerHTML;      
}
 window.onafterprint = function () {
     location.reload();
 }
 window.print();
}
//셀렉트박스 



function statusChange(statusItem) {
    const strText = $(statusItem).text();
    $("#TextVal").text(strText);
    const $Mustselect = $(statusItem).hasClass("Mustselect");

    if( $Mustselect === true){
        $(".MustselectCon").css('background','#0000002e');
        $(".MustselectCon").attr('readonly','true');
        $(".MustselectCon").val("");
    }else{
        $(".MustselectCon").css('background','none');
        $(".MustselectCon").removeAttr('readonly');
    }
}
//팝업여러개
function ShowPop(val) {
    const Conpop = $('#ShowPop' + val);
    //$('.ShowPopCon').hide();
    Conpop.show();
    // if (val == '0' || val == '1') {
    // } else if (val == '2') {
    // }
    switch (val) {
        case '0':
            break;
        default:
            break;
    }
}
//url복사
function clip() {
    const urlBox = document.createElement("textarea");
    document.body.appendChild(urlBox);//태그생성
    url = window.document.location.href;//현재주소값 
    urlBox.value = url;//담기
    urlBox.select();  //전송
    document.execCommand("copy");//카피
    urlBox.remove();//태그삭제
    alert("URL이 복사되었습니다.");
}
function SnsPop(val) {
    const btnShare = $('.snsBtnWrap').children('button');
    const sendText = 'class title innerText';
    var pageUrl = encodeURI(window.location.href);
    const SnsConpop = $('#SnsPop' + val);

    switch (val) {
        case 'Tw':
            window.open(`https://twitter.com/intent/tweet?text=${sendText}&url=${pageUrl}`);
            break;
        case 'Fb':
            window.open(`http://www.facebook.com/sharer/sharer.php?u=${pageUrl}`);
            break;
        case 'Ks':
            Kakao.Story.share({
                url: pageUrl,
                text: sendText
            });
            break;
        default:
            break;
    }
}

//로그인,회원가입 경고창
// function login(){
//   const strid = document.getElementById('userID');
//   const strpw = document.getElementById('userPW');
//   const strpwChk = document.getElementById('userChk');

//   const $id = /^[a-zA-Z0-9]{6,10}$/
//   const $pw = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{10,}$/ //최소한개숫자,특문포함

//   if(strid.value == '' || strpw.value == '' || strid.value == null || strpwChk.value == '') {
//       alert('아이디/비밀번호를 입력해주세요');
//       return false;
//   } 
//   if (strid.value.search($id)) {
//       alert('아이디형식이 올바르지 않습니다.');
//       strid.focus();
//       return false;
//   }
//   if (strpw.value.search($pw)) {
//     alert('비밀번호 형식이 올바르지 않습니다.');
//     strpw.focus();
//     return false;
//   }
//   if(strpw.value != strpwChk.value){
//     alert('비밀번호 확인이 일치하지 않습니다.');
//     return false;
//   }



//   login(location.href = '../index.html');
// }
function login(val) {
  const strid = document.getElementById('userID');
  const strpw = document.getElementById('userPW');
  const strpwChk = document.getElementById('userChk');
  const email = document.getElementById("email");


  let $id = /^(?=.*[0-9]+)[a-zA-Z][a-zA-Z0-9]{5,20}$/g
  let $pw = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{10,20}$/ //최소한개숫자,특문포함

    if(strid.value == '' || strpw.value == '') {
        alert('아이디/비밀번호를 입력해주세요');
        return false;
        } 
    if(strid.value.search($id)) {
        alert('아이디형식이 올바르지 않습니다.');
        strid.focus();
        return false;
        }
    if(strpw.value.search($pw)) {
            alert('비밀번호 형식이 올바르지 않습니다.');
            strpw.focus();
            return false;
        }
    if(strid.value == '' || strpw.value == '') {
        alert('아이디/비밀번호를 입력해주세요');
        return false;
        } 



    switch (val) {
        case 'loginE'://로그인
            login(location.href = '../index.html');
            break;
        case 'joinper'://회원가입
            if(strpw.value != strpwChk.value){
                alert('비밀번호 확인이 일치하지 않습니다.');
                return false;
            }
            login(
                alert('아이바이오맵 회원가입을 완료하였습니다.'),
                location.href = '../index.html'
              );
            break;
        case 'joinCo':
            if(email.value == "" || email.value == ) {
                alert('아이디/비밀번호를 입력해주세요');
                return false;
                } 
            // if (email.value == "") {
            //     alert("이메일 주소를 입력하세요.");
            //     email_id.focus();
            //     return false;
            //   }
            break;
        default:
            break;
    }
}
//이미지전환
let n = 0;
const imgs = new Array(
    "../img/sub/intro1.svg",
    "../img/sub/intro2.svg",
    "../img/sub/intro3.svg",
);
function rotate() {
    if (document.getElementById) {
        document.getElementById("change").src = imgs[n];
    }
    else document.images.slide.src = imgs[n];
    (n == (imgs.length - 1)) ? n = 0 : n++;

    setTimeout("rotate()", 1500);
}