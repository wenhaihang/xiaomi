$(function(){
	var n=0;
	var timer;
	function aa(){
		clearInterval(timer)
		timer=setInterval(function(){
			n++;
			if(n>4){
				n=0
			}
			$('.banner-lis ul li').eq(n).addClass('lis').siblings('.banner-lis ul li').removeClass('lis')
			$('.banner-img div').eq(n).css('display','block').siblings('.banner-img div').css('display','none');
		},1000)
	}
	aa()
	$('.banner').mouseenter(function(){
		clearInterval(timer)
    })
	$('.banner').mouseleave(function(){
		aa()
	})
	$('.span-right').click(function(event) {
		n++;
		if(n>4){n=0}
		$('.banner-lis ul li').eq(n).addClass('lis').siblings('.banner-lis ul li').removeClass('lis')
		$('.banner-img div').eq(n).css('display','block').siblings('.banner-img div').css('display','none');
	});
	$('.span-left').click(function(event) {
		n--;
		if(n<0){n=4}
		$('.banner-lis ul li').eq(n).addClass('lis').siblings('.banner-lis ul li').removeClass('lis')
		$('.banner-img div').eq(n).css('display','block').siblings('.banner-img div').css('display','none');
	});
	$('.banner-lis ul li').click(function(event) {
		n=$(this).index()
		$(this).addClass('lis').siblings('.banner-lis ul li').removeClass('lis');
		$('.banner-img div').eq(n).css('display','block').siblings('.banner-img div').css('display','none');
	});
	//冒泡事件
	/*$(function(){
		$('.banner-left').mouseenter(function(e) {
			e.stopPropagation() ;
		});
	})*/

	/*倒计时*/
	var preTime = new Date(2019,8,23);
			function timer1(){
				var nowTime = new Date();
				var time = preTime-nowTime;
				var hours = parseInt((time%(24*60*60*1000))/(60*60*1000));
				var min=parseInt(((time%(24*60*60*1000))%(60*60*1000))/(60*1000));
				var sec=parseInt((((time%(24*60*60*1000))%(60*60*1000))%(60*1000))/1000);
				$('.time-1').html(hours);
				$('.time-2').html(min);
				$('.time-3').html(sec);
			}
			timer1();
			setInterval(function(){
				timer1();
			},1000)


/*闪购轮播*/
	var m=1
	$('.span4-3 .an1').click(function(event) {
		m--;
		if(m<1) {
			m=0
			$('.span4-3 .an1').css('color', '#e0e0e0');
		}
		$('.span4-3 .an2').css('color', '#b0b0b0');
		$('.span4-2 ul').css('margin-left', m*-990+'px');
	});
	$('.span4-3 .an2').click(function(event) {
		m++;
		if (m>1) {
			m=2 
			$('.span4-3 .an2').css('color', '#e0e0e0');
		}
		$('.span4-3 .an1').css('color', '#b0b0b0');
		$('.span4-2 ul').css('margin-left', m*-990+'px');
	});



/*box5 切换*/
	$('.box5-span13 ul li').eq(0).mouseenter(function(event){
		$('.box5-span17').css('display','block');
		$('.box5-span18').css('display','none');
		$('.box5-span13 ul li').eq(0).addClass('span13-lis').siblings('.box5-span13 ul li').removeClass('span13-lis')
	});
	$('.box5-span13 ul li').eq(1).mouseenter(function(event){
		$('.box5-span17').css('display','none');
		$('.box5-span18').css('display','block');
		$('.box5-span13 ul li').eq(1).addClass('span13-lis').siblings('.box5-span13 ul li').removeClass('span13-lis')
	});


/*box7 切换*/
	$('.box7-span13 ul li').eq(0).mouseenter(function(event){
		$('.box7-span17').css('display','block');
		$('.box7-span18').css('display','none');
		$('.box7-span13 ul li').eq(0).addClass('span13-lis').siblings('.box7-span13 ul li').removeClass('span13-lis')
	});
	$('.box7-span13 ul li').eq(1).mouseenter(function(event){
		$('.box7-span17').css('display','none');
		$('.box7-span18').css('display','block');
		$('.box7-span13 ul li').eq(1).addClass('span13-lis').siblings('.box7-span13 ul li').removeClass('span13-lis')
	});


/*box9 切换*/
	$('.box9-span13 ul li').eq(0).mouseenter(function(event){
		$('.box9-span17').css('display','block');
		$('.box9-span18').css('display','none');
		$('.box9-span13 ul li').eq(0).addClass('span13-lis').siblings('.box9-span13 ul li').removeClass('span13-lis')
	});
	$('.box9-span13 ul li').eq(1).mouseenter(function(event){
		$('.box9-span17').css('display','none');
		$('.box9-span18').css('display','block');
		$('.box9-span13 ul li').eq(1).addClass('span13-lis').siblings('.box9-span13 ul li').removeClass('span13-lis')
	});


/*box11 切换*/
	$('.box11-span13 ul li').eq(0).mouseenter(function(event){
		$('.box11-span17').css('display','block');
		$('.box11-span18').css('display','none');
		$('.box11-span13 ul li').eq(0).addClass('span13-lis').siblings('.box11-span13 ul li').removeClass('span13-lis')
	});
	$('.box11-span13 ul li').eq(1).mouseenter(function(event){
		$('.box11-span17').css('display','none');
		$('.box11-span18').css('display','block');
		$('.box11-span13 ul li').eq(1).addClass('span13-lis').siblings('.box11-span13 ul li').removeClass('span13-lis')
	});


/*box13 切换*/
	$('.box13-span13 ul li').eq(0).mouseenter(function(event){
		$('.box13-span17').css('display','block');
		$('.box13-span18').css('display','none');
		$('.box13-span13 ul li').eq(0).addClass('span13-lis').siblings('.box13-span13 ul li').removeClass('span13-lis')
	});
	$('.box13-span13 ul li').eq(1).mouseenter(function(event){
		$('.box13-span17').css('display','none');
		$('.box13-span18').css('display','block');
		$('.box13-span13 ul li').eq(1).addClass('span13-lis').siblings('.box13-span13 ul li').removeClass('span13-lis')
	});


/*返回顶部*/
	$(window).scroll(function(event) {
		var h=$(window).scrollTop()
		if(h>870){
			$('.fixed .fanhui').css('display', 'block');
		}else{
			$('.fixed .fanhui').css('display', 'none');
		}
	});
	$('.fanhui').click(function(event) {
		$('html,body').css('scrollTop',0)
	});




/*视频*/
	$('.span20-1').click(function(event) {
		$('.audio').css('display', 'block');
		$('.audio-1-1').css('display', 'block');
	});
	$('.span20-2').click(function(event) {
		$('.audio').css('display', 'block');
		$('.audio-1-2').css('display', 'block');
	});
	$('.span20-3').click(function(event) {
		$('.audio').css('display', 'block');
		$('.audio-1-3').css('display', 'block');
	});
	$('.span20-4').click(function(event) {
		$('.audio').css('display', 'block');
		$('.audio-1-4').css('display', 'block');
	});
	$('.audio-span2').click(function(event) {
		$('.audio').css('display', 'none');
		$('.audio-1').css('display', 'none');
	});

})