
/* ========== header,footer,snb Include 관련 ========== */
function includeHTML(){
    var includeArea = $('[data-include]');
    var self,url;

    $.each(includeArea, function(){
        self = $(this);
        url = self.data('include');
        self.load(url, function(){
            self.removeAttr('data-include');
        });//load()
    });//each()
}//includeHTML();

/* ============페이지 로딩 완료시============== */

// 날씨
// function getWeather() {
// 	getSyncJSON('/getWeather.do', {}, function(data) {
// 		if (data && data.response && data.response.body) {
// 			data = data.response.body;
// 			if(data.items && data.items.item && data.items.item.length == 0) return;
// 			//console.log(data.items.item);
// 			let checkArr = [0, 0, 0];
// 			$.each(data.items.item, function (i, o){
// 				if (o.category == "T1H" && checkArr[0] == 0) {
// 					$("#curTemp").text(o.fcstValue + "℃");;
// 					checkArr[0] = 1;
					
// 				} else if (o.category == "SKY" && checkArr[1] == 0) {
// 					// 하늘상태(SKY) 코드 : 맑음(1), 구름많음(3), 흐림(4)
// 					checkArr[1] = Number(o.fcstValue);
					
// 				} else if (o.category == "PTY" && checkArr[2] == 0) {
// 					// 강수형태(PTY) 코드 : (초단기) 없음(0), 비(1), 비/눈(2), 눈(3), 빗방울(5), 빗방울눈날림(6), 눈날림(7)
// 					checkArr[2] = o.fcstValue == 0 ? 9 : Number(o.fcstValue);
					 
// 				} else if (o.category == "RN1") {
// 					$("#curRain").html(o.fcstValue);
// 				}
// 			});
			
// 			if (checkArr[2] != 9) {
// 				switch(checkArr[2]){
// 				case 1:
// 					$("#weather_icon").attr("src", "/lib/app/img/sub/main_image/ic_weather_rain.svg");
// 					$("#weather_icon").attr("alt", "비");
// 					$("#curSky").text("비");
// 					break;
// 				case 2:
// 					$("#weather_icon").attr("src", "/lib/app/img/sub/main_image/ic_weather_snowrain.svg");
// 					$("#weather_icon").attr("alt", "비/눈");
// 					$("#curSky").text("비/눈");
// 					break;
// 				case 3:
// 					$("#weather_icon").attr("src", "/lib/app/img/sub/main_image/ic_weather_snow.svg");
// 					$("#weather_icon").attr("alt", "눈");
// 					$("#curSky").text("눈");
// 					break;
// 				case 4:
// 					$("#weather_icon").attr("src", "/lib/app/img/sub/main_image/ic_weather_shower.svg");
// 					$("#weather_icon").attr("alt", "소나기");
// 					$("#curSky").text("소나기");
// 					break;
// 				} 
// 			} else {
// 				switch(checkArr[1]){
// 				case 1:
// 					$("#weather_icon").attr("src", "/lib/app/img/sub/main_image/ic_weather_sunny.svg");
// 					$("#weather_icon").attr("alt", "맑음");
// 					$("#curSky").text("맑음");
// 					break;
// 				case 3:
// 					$("#weather_icon").attr("src", "/lib/app/img/sub/main_image/ic_weather_cloud.svg");
// 					$("#weather_icon").attr("alt", "구름많음");
// 					$("#curSky").text("구름많음");
// 					break;
// 				case 4:
// 					$("#weather_icon").attr("src", "/lib/app/img/sub/main_image/ic_weather_fog.svg");
// 					$("#weather_icon").attr("alt", "흐림");
// 					$("#curSky").text("흐림");
// 					break;
// 				}
// 			}
// 		}
// 	});			
// }

// 미세먼지
// function getAirInfo() {
// 	getSyncJSON('/getAirInfo.do', {}, function(data) {
// 		if (data && data.response) {
// 			data = data.response;
// 			if (data.body && data.body.items) {
// 				const items = data.body.items;
// 				//console.log(items);
// 				$('#curPM10').text(getAirPM(items, 'PM10'));
// 				$('#curPM25').text(getAirPM(items, 'PM25'));
// 			}
// 		}
// 	});
// }

// function getAirPM(items, pm) {
// 	let airPM = null;
// 	if (items) {
// 		let tempPM = [];
// 		$.each(items, function(index, f){
// 	    	if (f.informCode == pm) {
// 	    		tempPM = f.informGrade.split(',');
// 	    		$.each(tempPM, function (j, k) {
// 	    			if (k.indexOf('인천') > -1) {
// 	    				airPM = k.split(':')[1];
// 	    			}
// 	    		});
// 	    		return false;	
// 	    	}
// 	    });
// 	    airPM = '(' + airPM + ')';
//     }
//     return airPM;
// }

// function getToday(){
//     var date = new Date();
//     var year = date.getFullYear();
//     var month = ("0" + (1 + date.getMonth())).slice(-2);
//     var day = ("0" + date.getDate()).slice(-2);

//     return year + "-" + month + "-" + day;
// }

// document.addEventListener('DOMContentLoaded',function(){
//     // 호출 : header,footer,snb Include 관련
//     includeHTML();
// /* ============TOP 버튼============== */
// $('#btn_toTop').click(function(){
//     $('html,body').stop(true).animate({scrollTop:0},300);
// });//click


// 	getWeather();
// 	getAirInfo();

// });//DOMContentLoaded
