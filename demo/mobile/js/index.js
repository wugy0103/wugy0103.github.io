/**
 * Created by admin on 2016/7/6.
 */
(function($) {
    $(function() {
        var mySwiper = new Swiper('.swiper-container', {
            hashnav: true, //修改页面url让swiper在初始化时切换到指定的slide(通过修改锚点值切换)
            autoHeight: true, //高度随内容变化
            pagination: '.my-pagination',
            paginationClickable: true,
            paginationBulletRender: function(index, className) {
                switch (index) {
                    case 0:
                        name = 'technology';
                        break;
                    case 1:
                        name = 'experience';
                        break;
                    case 2:
                        name = 'items';
                        break;
                    case 3:
                        name = 'evaluate';
                        break;
                    default:
                        name = '';
                }
                return '<a href="#' + name + '" class = "' + className + '"></a>';
            }
        });
        var flag;
        $('.box').click(function(){
            if(flag){
                $(this).find('.intro').animate({
                height:'6.5rem'
            },400);
                flag =false;    
            }else {
                $(this).find('.intro').animate({
                height:'90%'
            },400);
                flag=true;
            }
            
        })
        // $('#btns>li>a').click(function () {
        //     $('#btns>li>a').removeClass('current')
        //     $(this).addClass('current')
        //     location.hash = $(this).data('btn');
        //     console.log($(this).data('btn'))
        // })
    })
})(Zepto)
