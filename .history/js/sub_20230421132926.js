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
                lb.parentNode.classList.remove('active');
            })
        }   
    }
    window.addEventListener('click', e => handleClose(e))
    //페이지잉
    $('.PGnation a').not('.PGarrow').click(function () {
        $('.PGnation a').removeClass('on');
        $(this).addClass('on');
    });

    //탭 상하위관계로 만듬
    const tabBtn = $('.TbtnWrap').children();
    const tabCon = $('.TconWrap').children('div');
    tabCon.not('.on').hide();
    tabBtn.click(function () {
        const $tabLink = $(this).attr('data-tab');

        $(this).siblings().removeClass('on');
        $(this).addClass('on');

        $(this).parent().next().children().hide();
        $("." + $tabLink).show();

    });
        //비공개 
        const test0 = $('td div.lock');
        // const test1 = test0.parent().parent('tr');
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
//회원가입 배너 슬라이더
    $('.joinSlider .page-btn').click(function (e) {
        e.stopPropagation();
        const $slider = $(this).closest('.joinSlider');
        const index = $(this).index();
        const isLeft = index == 0;
        const $current = $slider.find('.slides > .bn.on');
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

        $current.removeClass('on');
        $post.addClass('on');

        updateCurrentPageNumber();
    });

    setInterval(function () {
        $('.next-btn').click();//3.5초마다 클릭
    }, 2000);

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
        const currentSlideNo = $('.joinSlider > .slides > .bn.on').attr('data-slide-no');

        $('.joinSlider > .page-btns > .page-no > .total-slide-no').html(totalSlideNo);
        $('.joinSlider > .page-btns > .page-no > .current-slide-no').html(currentSlideNo);
    };

    updateCurrentPageNumber();
    
    // // 탭
    // $(".tab_content").hide();

    // // 첫번째 탭콘텐츠 보이기
    // $(".tab_container").each(function () {
    //     $(this).children(".tabs li:first").addClass("active"); //Activate first tab
    //     $(this).children(".tab_content").first().show();
    // });
    // //탭메뉴 클릭 이벤트
    // $(".tabs li button").click(function () {
        
    //     $(this).parent().siblings("li").removeClass("active");
    //     $(this).parent().addClass("active"); 
    //     $(this).parent().parent().parent().parent().find(".tab_content").hide();
    //     $(this).parent().parent().parent().parent().find(".tab_content").find('input').value().remove();
        
    //     var activeTab = $(this).attr("rel");
    //     $("." + activeTab).show();
       
    // });
    //  const team = $('.useTeam').children().first();
    //  const noteam = $('.useTeam').children().last();  
    //  $('.TeamWrite').hide();
    //  team.click(function(val){
    //     if(team){
    //         $('.TeamWrite').show();
    //     }
    //     //$(this).parent().next('.TeamWrite').show();
    // });
        
    // 탭
    $(".TeamWrite").hide();
    // 첫번째 탭콘텐츠 보이기
    $(".useTeam").each(function () {
        $(this).children(".label:first").addClass("active"); //Activate first tab
        $(this).next(".TeamWrite").show();
    });

});//--------------////////////////jqueryWrapper

//셀렉트박스 
function statusChange(statusItem) {
  //  const label = doc.querySelectorAll('.label');
    const strText = $(statusItem).text();
    $(statusItem).parent().siblings('.label').text(strText);

    // const $Mustselect = $(statusItem).hasClass("Mustselect");

    // if( $Mustselect === true){
    //     $(".MustselectCon").css('background','#0000002e');
    //     $(".MustselectCon").attr('readonly','true');
    //     $(".MustselectCon").val("");
    // }else{
    //     $(".MustselectCon").css('background','none');
    //     $(".MustselectCon").removeAttr('readonly');
    // }
}

//등록 및 글쓰기
function inquiry(val) {

    
    switch (val) {
         case 'base': //게시판 글 등록
            var result = txtFieldCheck() == true ? true : false;
            if(!result){
                alert('글이 등록되었습니다.');   
                location.href = '../community/Bd_inquiry.html';   
                }
            else{ 
            }
        break;
        case 'Write': //연구자원-연구시설
        var result = txtFieldCheck() == true ? true : false;
        var fileCheck = document.querySelector(".oneFile").value;
        if(!result && fileCheck){
            alert('연구시설이 등록 및 수정되었습니다.')
            location.href = '../research/Map_facilityDtl.html';   
        }
        if(!fileCheck && !result){
            alert("파일을 첨부해 주세요");
            return false;
        }
        else{ 
        }   
        break;
        case 'EQWrite': //연구자원-연구시설
        var result = txtFieldCheck() == true ? true : false;
        var fileCheck = document.querySelector(".oneFile").value;
         var comboCheck = $("select[name=selectBox]").value;
        if(!result && fileCheck){
            alert('연구장비가 등록 및 수정되었습니다.')
            location.href = '../research/Wz_equipmentDtl.html';   
        }
        if(!fileCheck && !result){
            alert("파일을 첨부해 주세요.");
            return false;
        }
        if(!comboCheck && !result){
            alert("분류선택을 해주세요.");
            return false;
        }
        else{ 
        }   
        break;
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

//로그인,회원가입 값이 없을때 경고창
function txtFieldCheck(val){
    var txtEleTxt = $(".form label textarea");
    var txtEle = $(".form label input");
    var txtEle2 = $(".form label span");
      
        for(var i = 0; i < txtEle.length; i ++){
    
            if("" == $(txtEle[i]).val() || null == $(txtEle[i]).val()){
    
            var ele_id = $(txtEle[i]).attr("id");
            var label_txt = $(txtEle2[i]).text();
    
            showAlert(ele_id, label_txt);
            return true;
            }
            function showAlert(ele_id, label_txt){
                alert(label_txt + "정보를 입력해주세요.");
                $("#" + ele_id).focus();
                return false;
            } 
        }
    }
//로그인 유효성검사
function login(val) {   
  const Email = document.getElementById("mail");//메일
  const CoEmail = document.getElementById("Comail");//대표메일
  const strid = document.getElementById('userID');
  const strpw = document.getElementById('userPW');
  const strbid = document.getElementById('userBID');
  const strbpw = document.getElementById('userBPW');
  const strpwChk = document.getElementById('userChk');

  let e_RegExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;//이메일
  let $id = /^(?=.*[0-9]+)[a-zA-Z][a-zA-Z0-9]{5,20}$/g //아이디
  let $pw = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{10,20}$/ //최소한개숫자,특문포함

    switch (val) {
        case 'loginE'://개인로그인
            if(strid.value.search($id)) {
                alert('아이디형식이 올바르지 않습니다.');
                strid.focus();
                return false;
                }
            if(strpw.value.search($pw)) {
                    alert('비밀번호 형식이 올바르지 않습니다.');
                    strpw.focus();
                    return false;
                }else{
                    location.href = '../index.html';   
            } 
        case 'loginB'://기관로그인
            if(strbid.value.search($id)) {
                alert('아이디형식이 올바르지 않습니다.');
                strbid.focus();
                return false;
                }
            if(strbpw.value.search($pw)) {
                    alert('비밀번호 형식이 올바르지 않습니다.');
                    strbpw.focus();
                    return false;
                }
        break;
        case 'joinper': //개인회원가입
            var result = txtFieldCheck() == true ? true : false;
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
            if(strpw.value != strpwChk.value){
                alert('비밀번호 확인이 일치하지 않습니다.');
                return false;
            }else{
                alert('아이바이오맵 회원가입을 완료하였습니다.');
                location.href = '../index.html';   
            }
            break;
        case 'joinCo'://기관 회원가입
            var result = txtFieldCheck() == true ? true : false;
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
            if(strpw.value != strpwChk.value){
                alert('비밀번호 확인이 일치하지 않습니다.');
                return false;
            }else{
                alert('아이바이오맵 회원가입을 완료하였습니다.');
                location.href = '../index.html';   
            }
            if(CoEmail.value.search(e_RegExp) && !CoEmail.value =='')  {
                alert('기관대표 이메일 형식이 올바르지 않습니다.');
                CoEmail.focus();
                return false;
            }
        break;
        case 'doCode'://회원가입 이메일본인인증
             if(Email.value.search(e_RegExp) || Email.value == '')  {
                alert('이메일 형식이 올바르지 않습니다.');
                Email.focus();
                return false;
            }
        break;
        case 'findRsultPw': //비밀번호변경
            if(strpw.value.search($pw)) {
                    alert('비밀번호 형식이 올바르지 않습니다.');
                    strpw.focus();
                    return false;
                }
            if(strpw.value != strpwChk.value){
                alert('비밀번호 확인이 일치하지 않습니다.');
                return false;
            }else{
                alert('비밀번호를 변경하셨습니다.');
                location.href = '../index.html';   
            }
        break;
        case 'findPw': //비밀번호찾기
            var result = txtFieldCheck() == true ? true : false;
            if(!result){
                location.href="findResultPw.html"
            }
        break;
        case 'findPw': //아이디찾기
            var result = txtFieldCheck() == true ? true : false;
            if(!result){
                location.href="findResultPw.html"
            }
        break;
        default:
            break;
    }
}
function doCodeCheck(val) { 
     if (!$('#typingcode').prop('value')) {
         alert('인증번호를 입력하세요.');
         return;
     }
     if (timeSecond == 0 || intervalVar == false) {
         alert('인증번호 유효시간이 초과하였습니다. 인증번호를 재전송 해주세요.');
         return;
     }else{
        location.href="join02.html"
     }
 }
//  //기관회원가입 유효성검사
// function join() { 
//     const Email = document.getElementById("mail");//메일
//     const CoEmail = document.getElementById("Comail");//대표메일

//     let e_RegExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
//     var result = txtFieldCheck() == true ? true : false;
//     if(Email.value.search(e_RegExp) && !Email.value =='')  {
//         alert('이메일 형식이 올바르지 않습니다.');
//         Email.focus();
//         return false;
//     }
//     if(CoEmail.value.search(e_RegExp) && !CoEmail.value =='')  {
//         alert('기관대표 이메일 형식이 올바르지 않습니다.');
//         CoEmail.focus();
//         return false;
//     }
// }

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
//우편번호검색
  function Postcode() {
    new daum.Postcode({
        oncomplete: function (data) {
            var addr = ''; // 주소 변수
            //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
            if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                addr = data.roadAddress;
            } else { // 사용자가 지번 주소를 선택했을 경우(J)
                addr = data.jibunAddress;
            }
            // 우편번호와 주소 정보를 해당 필드에 넣는다.
            document.getElementById('postcode').value = data.zonecode;
            document.getElementById("address").value = addr;
            // 커서를 상세주소 필드로 이동한다.
            document.getElementById("detailAddress").focus();
        }
    }).open();
}

//타이머 및 경로
var intervalVar = undefined;
var timeSecond = undefined;

function doTimer() {
    $('#btn').prop('innerText', '재전송');
    
    timeSecond = 180;
    $('#timer').prop('innerText', getTimeString(timeSecond));

    if (intervalVar != undefined) {
        clearInterval(intervalVar);
    }

    intervalVar = setInterval(function() {
       if (timeSecond != 0) {
           timeSecond = timeSecond - 1;
           $('#timer').prop('innerText', getTimeString(timeSecond));
       } else {
           clearInterval(intervalVar);
           intervalVar = false;
       }
   }, 1000);
}

function getTimeString(second) {
    var minute = '' + (Math.floor(second / 60));
    var dividedSec = second % 60;
    if (dividedSec < 10) {
        dividedSec = '0' + dividedSec;
    }
    // ex) 3:00 -> 3분
    return minute + ":" + dividedSec;
}