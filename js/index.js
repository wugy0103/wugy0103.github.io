$(function() {
    $('#fullPage').fullpage({
            sectionsColor: ['darkcyan', '#2AB561', '#826B68', '#EA6153', "#993366"], //每一屏背景色
            anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],//每一屏锚点值
            navigation: true,
            navigationTooltips: ['个人信息', '技术栈', '工作经历', '项目案例', '联系我'],//小圆点提醒
            menu: '#menu',
            afterLoad: function(afterlink, index) {
            	//滚屏进入屏幕后
                var $anim = $(".section").eq(index - 1).find(".animated");
                function addAnimated(flag){
                	if(flag){
                		$anim.each(function(i) {
                            var that = this;
                            setTimeout(function() {
                                $(that).addClass($(that).data('anim')).css({ visibility: 'visible' })
                            }, 100 * i)
                        });
                	}else {
                		$anim.each(function() {
                            $(this).addClass($(this).data('anim')).css({ visibility: 'visible' })
                        });
                	}
                }
                switch (index) {
                		case 1:
                        addAnimated();
                        break;
                    case 2:
                        addAnimated(1);
                        break;
                    case 3:
                        $('.line').animate({ "height": "100%" }, 1000);
                        addAnimated();
                        break;
                    case 4:
                        addAnimated(1);
                        break;
                    case 5:
                        setTimeout(function() {
                            $('#fifth .overT,#fifth .overB').animate({ 'height': '30%' }, 400).find('#callme').addClass("callme");
                        }, 400);
                        break;
                }



            },
            onLeave: function(index, nextIndex, direction) {
            	//离开屏幕前
            		if(index===3){
            			  $('.line').animate({ "height": "0%" }, 100);
            		}
              	if(index===5){
              		$('#fifth .overT,#fifth .overB').animate({ 'height': '50%' }, 400).find('#callme').removeClass("callme");
              	}
                var $anim = $(".section").eq(index - 1).find(".animated");
                $anim.each(function(i) {
                    var that = this;
                    setTimeout(function() {
                        $(that).removeClass($(that).data('anim')).css({ visibility: 'hidden' });
                    }, 100 * i)
                });
            }

        })
        // logo动画
    $("#logo").on("mouseenter", function(e) {
            var that = this;
            $(this).removeClass('pulse')
            setTimeout(function() {
                $(that).addClass('pulse')
            }, 50)
        })
        // blog弹框
    $("#blogs").on('click', function() {
        alert('正在努力建设中...请稍等');
        return false;
    })

})
