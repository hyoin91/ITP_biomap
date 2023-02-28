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
});//--------------////////////////jqueryWrapper

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
    var strText = $(statusItem).text();
    $("#TextVal").text(strText);
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
