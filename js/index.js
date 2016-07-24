$(function () {
		$('#fullPage').fullpage({
			sectionsColor: ['darkcyan', '#2AB561', '#826B68', '#EA6153', "#993366"],//每一屏背景色
			anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
			navigation: true,
			navigationTooltips: ['个人信息', '技术栈', '工作经历', '项目案例', '联系'],
			menu: '#menu',
			afterLoad: function (afterlink, index) {
				var $anim = $(".section").eq(index-1).find(".animated");
				if(index==2){
					// console.log(1);
					$anim.each(function (i) {
						var that= this;
						// console.log(2);
						setTimeout(function () {
							// console.log(3);
							$(that).addClass($(that).data('anim')).css({visibility:'visible'},100)
						},100*i)
					});
					return;
				}
				if(index==3){
					$('.line').animate({"height":"100%"}, 1000);
					// $('.box2 span::before').addClass('animated pulse')
					// $('.box2').fadeIn(1000);
				}
				$anim.each(function () {
					$(this).addClass($(this).data('anim')).css({visibility:'visible'},100)
				});
				

			},
			onLeave: function (index,nextIndex,direction) {
				$('.line').animate({"height":"0%"}, 100);
				var $anim = $(".section").eq(index-1).find(".animated");
				$anim.each(function (i) {
					var that = this;
					setTimeout(function () {
						$(that).removeClass($(that).data('anim')).css({visibility:'hidden'},100);
					},100*i)
				});
			}

		})
// logo动画
		$("#logo").on("mouseenter", function (e) {
			// console.log(111);
			var that = this;
			$(this).removeClass('pulse')
			setTimeout(function(){
				$(that).addClass('pulse')
			},50)
		})
		// blog弹框
		$("#blog").on('click',function(){
			alert('正在努力建设中...请稍等');
			return false;
		})

	})
