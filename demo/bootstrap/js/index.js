/**
 * Created by admin on 2016/5/19.
 */
$(function () {
    banner();
    productTab();
    $('[data-toggle="tooltip"]').tooltip();/*tooltip 是需要自己去初始化*/
})

//轮播图
function banner(){

    /*
     * 1.准备轮播图的图片数据  模拟
     * 2.判断当前的屏幕  移动端   非移动端   小于768px
     * 3.把我们的数据转化成html  underscore  template
     * 4.把你转化的html渲染在页面当中  html()
     *
     * 5.监听页面尺寸改变  响应当前的尺寸   resize
     * 6.在移动端需要用手势来进行上一张下一张的滑动
     * */



    //1.准备轮播图的图片数据  模拟
    var data = [
        {
            "bac":"images/slide_01_2000x410.jpg",
            "img":"images/slide_01_640x340.jpg"
        },
        {
            "bac":"images/slide_02_2000x410.jpg",
            "img":"images/slide_02_640x340.jpg"
        },
        {
            "bac":"images/slide_03_2000x410.jpg",
            "img":"images/slide_03_640x340.jpg"
        },
        {
            "bac":"images/slide_04_2000x410.jpg",
            "img":"images/slide_04_640x340.jpg"
        },



    ];

    //2.判断当前的屏幕  移动端   非移动端   小于768px
    var render = function () {
        var width = $(window).width();
        console.log(width)
        var isMobile = false;
        if(width < 768){
            isMobile = true;
        }
//3.把我们的数据转化成html  underscore  template

        /*取到模版当中的字符串*/
        var pointTemplateStr = $('#point-template').html();
        var imageTemplateStr = $('#image-template').html();
        /*转化成模版函数*/
        var pointTemplate = _.template(pointTemplateStr);
        var imageTemplate = _.template(imageTemplateStr);
        /*传入数据 解析成 html 字符*/
        var pointHtml = pointTemplate({model:data});
        var imageHtml = imageTemplate({model:data,isMobile:isMobile});
        /*4.把html字符串渲染在页面当中*/
        $('.carousel-indicators').html(pointHtml);
        $('.carousel-inner').html(imageHtml);

    }
    //5.监听页面尺寸改变  响应当前的尺寸   resize
    $(window).on('resize', function () {
        render();
    }).trigger('resize');

    //6.在移动端需要用手势来进行上一张下一张的滑动
    var startX = 0,moveX = 0,distanceX = 0,isMove= false;
    $('.carousel-inner').on('touchstart', function (e) {
        startX = e.originalEvent.touches[0].clientX;
    })
    $('.carousel-inner').on('touchmove', function (e) {
        moveX = e.originalEvent.touches[0].clientX;
        distanceX =moveX-startX;
        isMove= true;
    })
    $('.carousel-inner').on('touchend', function (e) {

        if(Math.abs(distanceX)>50 && isMove){
            if(distanceX>0){
                $('.carousel').carousel('prev');

            }else {
                $('.carousel').carousel('next');

            }
        }


    })









}

//产品tab栏
function productTab(){
    //1.获取每个li的宽度
    //2.给ul固定宽度
    //3.设置一个可以滑动的容器



    //1.获取每个li的宽度
    var $parsentBox = $(".wjs-product-tabs-parsent");
    var $ul = $parsentBox.find('ul');
    var $lis = $ul.find('li');
    var wSum = 100;
    $lis.each(function (i, item) {
        wSum += $(item).innerWidth();

    });
    //2.给ul固定宽度

    $ul.width(wSum);
    //$ul.css("width",wSum);
    //3.设置一个可以滑动的容器
    itcast.iScroll({
        swipeDom:$parsentBox.get(0),
        swipeType:'x',
        swipeDistance:50
    })


}












