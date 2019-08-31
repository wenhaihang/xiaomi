$(function(){

	$('.cc-span2').removeClass('no');
	$(window).scroll(function(event) {
		var h=$(window).scrollTop()
		console.log(h)
		if (h>800) {
			$('.cc-span5').removeClass('no');
		}if (h>1800) {
			$('.cc-box5 .cc-span7').removeClass('no');
		}
		if(h>2100) {
			$('.cc-span8').removeClass('no');
		}
		if(h>3100) {
			$('.span10').removeClass('no');
		}
		if(h>3900) {
			$('.span10').removeClass('no');
		}
		if(h>4000) {
			$('.span11').removeClass('no');
		}
		if(h>4800) {
			$('.span12').removeClass('no');
		}
		if(h>5400) {
			$('.cc-box11 .cc-span7').removeClass('no');
		}
		if(h>6000) {
			$(' .span13-1').removeClass('no');
		}
		if(h>7000) {
			$('.span15-1').removeClass('no');
		}
		if(h>7800) {
			$('.span17-1').removeClass('no');
		}
		if(h>8200) {
			$('.span18-1').removeClass('no');
		}
	});


	var n=0;
	var timer;
	function aa(){
		clearInterval(timer)
		timer=setInterval(function(){
			n++;
			if (n>2) {n=0}
			if (n>0) {
				$('.cc-span2 h1').css('background-image', 'url(../images/cc-box2-4.png)');
				$('.cc-span2 p').css('color', '#fff');
			}else{
				$('.cc-span2 h1').css('background-image', 'url(../images/cc-box2-5.png)');
				$('.cc-span2 p').css('color', '#000');
			}
			$('.cc-span1-1 ul li').eq(n).css('opacity', '1').siblings().css('opacity', '0');
			$('.cc-span4-1 ul li').eq(n).addClass('cc-span4-lis').siblings().removeClass('cc-span4-lis');
		},2000)
	}
	aa()
	$('.cc-span3-1 a').mouseenter(function() {
		clearInterval(timer)
	});
	$('.cc-span3-1 a').mouseleave(function() {
		aa()
	});
	$('.cc-span4-1 ul li').mouseenter(function() {
		clearInterval(timer)
	});
	$('.cc-span4-1 ul li').mouseleave(function() {
		aa()
	});
	$('.cc-span3-1-1').click(function() {
		n--;
		if(n<0){n=2}
		$('.cc-span1-1 ul li').eq(n).css('opacity', '1').siblings().css('opacity', '0');
	$('.cc-span4-1 ul li').eq(n).addClass('cc-span4-lis').siblings().removeClass('cc-span4-lis');
	});
	$('.cc-span3-1-2').click(function() {
		n++;
		if (n>2) {n=0}
		$('.cc-span1-1 ul li').eq(n).css('opacity', '1').siblings().css('opacity', '0');
		$('.cc-span4-1 ul li').eq(n).addClass('cc-span4-lis').siblings().removeClass('cc-span4-lis');
	});
	$('.cc-span4-1 ul li').click(function(event) {
		n=$(this).index()
		$(this).addClass('cc-span4-lis').siblings().removeClass('cc-span4-lis');
		$('.cc-span1-1 ul li').eq(n).css('opacity', '1').siblings().css('opacity', '0');
	});

/*第二*/

	var m=0;
	var ha;
	function bb(){
		clearInterval(ha)
		ha=setInterval(function(){
			m++;
			if (m>2) {m=0}
			$('.cc-span1-2 ul li').eq(m).css('opacity', '1').siblings().css('opacity', '0');
			$('.cc-span4-2 ul li').eq(m).addClass('cc-span4-lis').siblings().removeClass('cc-span4-lis')
		},2000)
	}
	bb()
	$('.cc-span3-2 a').mouseenter(function() {
		clearInterval(ha)
		console.log(1)
	});
	$('.cc-span3-2 a').mouseleave(function() {
		bb()
		console.log(2)
	});
	$('.cc-span4-2 ul li').mouseenter(function() {
		clearInterval(ha)
		console.log(3)
	});
	$('.cc-span4-2 ul li').mouseleave(function() {
		bb()
		console.log(4)
	});
	$('.cc-span9 span').mouseenter(function() {
		clearInterval(ha)
		console.log(3)
	});
	$('.cc-span9 span').mouseleave(function() {
		bb()
		console.log(4)
	});
	$('.cc-span3-2-1').click(function() {
		m--;
		if(m<0){m=2}
		$('.cc-span1-2 ul li').eq(m).css('opacity', '1').siblings().css('opacity', '0');
		$('.cc-span4-2 ul li').eq(m).addClass('cc-span4-lis').siblings().removeClass('cc-span4-lis');
	});
	$('.cc-span3-2-2').click(function() {
		m++;
		if (m>2) {m=0}
		$('.cc-span1-2 ul li').eq(m).css('opacity', '1').siblings().css('opacity', '0');
		$('.cc-span4-2 ul li').eq(m).addClass('cc-span4-lis').siblings().removeClass('cc-span4-lis');
	});
	$('.cc-span4-2 ul li').click(function(event) {
		m=$(this).index()
		$(this).addClass('cc-span4-lis').siblings().removeClass('cc-span4-lis');
		$('.cc-span1-2 ul li').eq(m).css('opacity', '1').siblings().css('opacity', '0');
	});
	$('.cc-span9-1').click(function(event) {
		m=0
		$('.cc-span1-2 ul li').eq(m).css('opacity', '1').siblings().css('opacity', '0');
		$('.cc-span4-2 ul li').eq(m).addClass('cc-span4-lis').siblings().removeClass('cc-span4-lis');
	});
	$('.cc-span9-2').click(function(event) {
		m=1
		$('.cc-span1-2 ul li').eq(m).css('opacity', '1').siblings().css('opacity', '0');
		$('.cc-span4-2 ul li').eq(m).addClass('cc-span4-lis').siblings().removeClass('cc-span4-lis');
	});
	$('.cc-span9-3').click(function(event) {
		m=2
		$('.cc-span1-2 ul li').eq(m).css('opacity', '1').siblings().css('opacity', '0');
		$('.cc-span4-2 ul li').eq(m).addClass('cc-span4-lis').siblings().removeClass('cc-span4-lis');
	});

/*第三*/


	var k=0;
	var timerrr
	function cc(){
		clearInterval(timerrr)
		timerr=setInterval(function(){
			k++;
			if (k>2) {
				$('.span19-3').css('transition', '0s');
				k=-1
			}else{
				$('.span19-3').css('transition', '2s');
			}
			var i='translateX('+(-k*810-1620)+'px)'
			$('.span19-3').css('transform', i);
		},3000)
	}
	cc()



/*disi*/
	var i=0;
	var xu;
	function dd(){
		clearInterval(xu)
		xu=setInterval(function(){
			i++;
			if (i>1) {i=0}
			$('.cc-span1-3 ul li').eq(i).css('opacity', '1').siblings().css('opacity', '0');
			$('.cc-span4-3 ul li').eq(i).addClass('cc-span4-lis').siblings().removeClass('cc-span4-lis')
		},2000)
	}
	dd()
	$('.cc-span4-3 ul li').click(function(event) {
		clearInterval(xu);
		i=$(this).index();
		$(this).addClass('cc-span4-lis').siblings().removeClass('cc-span4-lis');
		$('.cc-span1-3 ul li').eq(i).css('opacity', '1').siblings().css('opacity', '0');
	});
})