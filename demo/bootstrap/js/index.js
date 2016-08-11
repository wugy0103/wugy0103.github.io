/**
 * Created by admin on 2016/5/19.
 */
$(function () {
    banner();
    productTab();
    $('[data-toggle="tooltip"]').tooltip();/*tooltip ����Ҫ�Լ�ȥ��ʼ��*/
})

//�ֲ�ͼ
function banner(){

    /*
     * 1.׼���ֲ�ͼ��ͼƬ����  ģ��
     * 2.�жϵ�ǰ����Ļ  �ƶ���   ���ƶ���   С��768px
     * 3.�����ǵ�����ת����html  underscore  template
     * 4.����ת����html��Ⱦ��ҳ�浱��  html()
     *
     * 5.����ҳ��ߴ�ı�  ��Ӧ��ǰ�ĳߴ�   resize
     * 6.���ƶ�����Ҫ��������������һ����һ�ŵĻ���
     * */



    //1.׼���ֲ�ͼ��ͼƬ����  ģ��
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

    //2.�жϵ�ǰ����Ļ  �ƶ���   ���ƶ���   С��768px
    var render = function () {
        var width = $(window).width();
        console.log(width)
        var isMobile = false;
        if(width < 768){
            isMobile = true;
        }
//3.�����ǵ�����ת����html  underscore  template

        /*ȡ��ģ�浱�е��ַ���*/
        var pointTemplateStr = $('#point-template').html();
        var imageTemplateStr = $('#image-template').html();
        /*ת����ģ�溯��*/
        var pointTemplate = _.template(pointTemplateStr);
        var imageTemplate = _.template(imageTemplateStr);
        /*�������� ������ html �ַ�*/
        var pointHtml = pointTemplate({model:data});
        var imageHtml = imageTemplate({model:data,isMobile:isMobile});
        /*4.��html�ַ�����Ⱦ��ҳ�浱��*/
        $('.carousel-indicators').html(pointHtml);
        $('.carousel-inner').html(imageHtml);

    }
    //5.����ҳ��ߴ�ı�  ��Ӧ��ǰ�ĳߴ�   resize
    $(window).on('resize', function () {
        render();
    }).trigger('resize');

    //6.���ƶ�����Ҫ��������������һ����һ�ŵĻ���
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

//��Ʒtab��
function productTab(){
    //1.��ȡÿ��li�Ŀ��
    //2.��ul�̶����
    //3.����һ�����Ի���������



    //1.��ȡÿ��li�Ŀ��
    var $parsentBox = $(".wjs-product-tabs-parsent");
    var $ul = $parsentBox.find('ul');
    var $lis = $ul.find('li');
    var wSum = 100;
    $lis.each(function (i, item) {
        wSum += $(item).innerWidth();

    });
    //2.��ul�̶����

    $ul.width(wSum);
    //$ul.css("width",wSum);
    //3.����һ�����Ի���������
    itcast.iScroll({
        swipeDom:$parsentBox.get(0),
        swipeType:'x',
        swipeDistance:50
    })


}












