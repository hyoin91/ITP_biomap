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
        $('.clear').click()
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
//로그인 경고창
function login() {
  const strid = document.getElementById('userID');
  const strpw = document.getElementById('userPW');

  const $id = /^[a-zA-Z0-9]{4,12}$/
  const $pw = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\w)).{6,20}$/ //최소한개숫자,특문포함

  if (strid.value == '' || strpw.value == '' || strid.value == null) {
      alert('아이디/비밀번호를 입력해주세요');
      return false;
  } if (strid.value.search($id)) {
      alert('아이디형식이 올바르지 않습니다.');
      strid.focus();
      return false;
  }
  if (strpw.value.search($pw)) {
      alert('비밀번호 형식이 올바르지 않습니다.');
      strpw.focus();
      return false;
  }
  login(location.href = '../index.html');
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