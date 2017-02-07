/**
 * Created by 鹏 on 2017/1/26.
 */



$(function () {
    //群成员图片 start
    (function abc(){
        for (var k=1;k<=77;k++){
            $('.bg').append('<div class="bg-part">'+'<img src="images/fcc/members/m-'+k+'.jpg"></div>');
        }
    }());
    //end

    //成员图片随机出现start
    var mems=$('.bg').find('.bg-part'),i=1,n=0;
    var abc=$('.bg');
    console.log(mems[1]);

    $(window).on('scroll', function () {
        if($(window).scrollTop()>2700&&$(window).scrollTop()<3600){
            var n=($(window).scrollTop()-2700)*0.0011;
            $('.bg-part:even').css('opacity',n);
        }

        else{
            $('.bg-part:even').css('display','');
        }
    })

    //end

    //图片高度自适应 start
    var pic_h=function(){
        var h=$(window).height()/2.5;
        console.log($(window).height());
        console.log($(window).width());
        $("#activities>div").css('height',h);
    };
    pic_h();
    $(window).on('resize',pic_h);

    var pic_mems=function(){
        var w=$(window).width() / 11;
        console.log(w);
        $(".members .bg .bg-part>img").css('width',w);
        $(".members .bg .bg-part>img").css('height',w);
    }
    pic_mems();
    $(window).on('resize',pic_mems);


    //end

    //nav导航栏跳转 start
    var position=[0,1000,2100,3600,5100],timer,currentposition,position_i;
    function nav(){
        //如果用户在滚动条滚动时点击
        clearInterval(timer);
        //设置函数调用间距为1ms
        timer=setInterval(togo,1);
        //获取点击a标签的序号
        position_i=$(this).index();
        $("#nav_ul li").removeClass('li_current');
        $(this).children('li').addClass('li_current');
    }
    function togo(){
        currentposition=$(window).scrollTop();
        if (currentposition>position[position_i]){
            currentposition-=30;
            window.scrollTo(0,currentposition);
            if (currentposition<=position[position_i]){
                clearInterval(timer);
                console.log(403);
                //从下到上
            }
        }
        else if (currentposition<=position[position_i]){
            currentposition+=30;
            window.scrollTo(0,currentposition);
            if (currentposition>=position[position_i]){
                clearInterval(timer);
                console.log(404);
                //从上到下
            }
        }
    }
    $("#nav_ul>a").on('click',nav);
    console.log($(window).scrollTop(),1);
    console.log($('body').scrollTop(),2);

    //end

    //导航栏 start
    $(".logo,#nav_ul").on({
        'mouseover click': function () {
            $('#nav_ul').css('display','block');
        },
        'mouseout': function () {
            $('#nav_ul').css('display','none');

        }
    })


    //end

})





