/**
 * Created by Yuejiaqun on 2018/3/3.
 */


$(document).ready(function () {

//轮播图
    let n=0;
    let lis=$(".img_box li");
    let box=$(".banner");
    let left=$(".banner_left");
    let right=$(".banner_right");
    let btnbox=$(".btn_box li");
    function move() {
        n++;
        if(n>=lis.length){
            n=0;
        }
        lis.eq(n).addClass("active").siblings().removeClass("active");
        btnbox.eq(n).addClass("active").siblings(btnbox).removeClass("active");
    }
    let t=setInterval(move,3000);
    box.on("mouseover",function () {
        clearInterval(t);
    }).on("mouseout",function () {
        t=setInterval(move,3000);
    })
    left.on('click',function () {
        n--;
        if (n<0){
            n=lis.length-1;
        }
        lis.eq(n).addClass("active").siblings().removeClass("active");
        btnbox.eq(n).addClass("active").siblings(btnbox).removeClass("active");
    })
    right.on("click",function () {
        move();
    })
    btnbox.on("click",function () {
        n=$(this).index()-1;
        move();
    })

    //banner测展示
    let tab=$(".tab");
    let is_active=false;
    tab.on("mouseover",function () {
        if(is_active){
            return
        }
        is_active=true;
        $(this).children('.index').attr('class','index tab_active');

    }).on("mouseout",function () {
        is_active=false;
        $(this).children('.index').attr('class','index');
    })

    //下拉
  
    $(".wzdhtab").mouseenter(function () {
         $(this).children(".ngbox").stop(true).slideDown("fast");
         $(this).children(".yxk").css("display","block");
    }).mouseleave(function () {
        //clearTimeout(wzt);
        $(this).children(".ngbox").stop(true).slideUp("fast");
        $(this).children(".yxk").css("display","none");
    })

    //手机苏宁
    $(".sjsn").mouseenter(function () {
        $(this).children(".mb").stop(true,true).slideDown("fast");
        $(this).children(".mbyi").css("display","block");
    }).mouseleave(function () {
        $(this).children(".mb").stop(true,true).slideUp("fast");
        $(this).children(".mbyi").css("display","none")
    })

    //购物车
   $(".sngwc").mouseenter(function () {
        $(this).children(".ngcart").stop(true).slideDown("fast");
        $(this).children(".gwcyi").css("display","block");
    }).mouseleave(function () {
        $(this).children(".ngcart").stop(true).slideUp("fast");
        $(this).children(".gwcyi").css("display","none");
    })

    //我的订单
    $(".wddd").mouseenter(function () {
        $(this).children(".ngbox1").stop(true).slideDown("fast");
    }).mouseleave(function () {
        $(this).children(".ngbox1").stop(true).slideUp("fast");
    })

    //楼层跳转
    let floors=$(".floors");
    let aside=$(".index_float ul li");
    let kn=$(".knkhh");
    let trans=$(".djh");
    let hi=$(".fixbar");
    let ce=$(".index_float");
    let ch=document.documentElement.clientHeight;
    let out=true;
    let comin=false;
    let flag1=true;
    $(window).scroll(function () {
        if(!flag1){
            return;
        }
        let tabs=$(document.documentElement).scrollTop()==0?$(document.body).scrollTop():$(document.documentElement).scrollTop();
        if(tabs>kn.offset().top){
            ce.addClass("active");
        }else{
            ce.removeClass("active");
        }
        if(tabs>trans.offset().top){
            hi.slideDown("slow")
        }else{
            hi.slideUp("slow")
        }
        floors.each(function (index,val) {
            if(tabs>floors.eq(index).offset().top-200){
                aside.eq(index).addClass("active").siblings().removeClass("active")
            }
        })
    })
    //点击跳转
    for(let i=0;i<aside.length;i++){
        let item=aside.eq(i);
        item.on("click",function () {
            flag1=false;
            $(this).siblings().removeClass("active").end().addClass("active");
            let shi=floors.eq(i).offset().top;
            $('html').animate({scrollTop:shi},function () {
                flag1=true;
            });
        })
    }

    //大聚惠
    let djh=$(".julist");
    let djhlis=$(".jhleft");
    let djhleft=$(".jhdjz");
    let djhright=$(".jhdjy");
    let now2=0;
    let next2=0;
    function jhmove() {
        next2=now2+1;
        if (next2>=djhlis.length){
            next2=0;
        }
        djhlis.eq(next2).css("left","100%");
        djhlis.eq(now2).animate({left:"-100%"});
        djhlis.eq(next2).animate({left:"0"});
        now2=next2;
    }
    djhleft.click(function () {
        next2=now2-1;
        if (next2<=0){
            next2=djhlis.length-1;
        }
        djhlis.eq(next2).css("left","-100%");
        djhlis.eq(now2).animate({left:"100%"});
        djhlis.eq(next2).animate({left:"0"});
        now2=next2;
    })
    djhright.click(function () {
        jhmove();
    })

    //乐拼购
    let lpbox=$(".lplist");
    let lplis=$(".lplist ul");
    let lpleft=$(".lpleft");
    let lpright=$(".lpright");
    let lpnow=0;
    let lpnext=0;
    function lpmove() {
        lpnext=lpnow+1;
        if(lpnext>=lplis.length){
           lpnext=0;
        }
        lplis.eq(lpnext).css("left","100%");
        lplis.eq(lpnow).animate({left:"-100%"});
        lplis.eq(lpnext).animate({left:"0"});
        lpnow=lpnext;
    }
    lpleft.click(function () {
        lpnext=lpnow-1;
        if(lpnext<0){
           lpnext=lplis.length-1;
        }
        lplis.eq(lpnext).css("left","-100%");
        lplis.eq(lpnow).animate({left:"100%"});
        lplis.eq(lpnext).animate({left:"0"});
        lpnow=lpnext;
    })
    lpright.click(function () {
        lpmove();
    })

    //排行榜
    let php=$(".list3_bottom");
    let phbs=$(".wrbt");
    let phleft=$(".wrleft");
    let phright=$(".wrright");
    let pages=$(".pager .dian");
    let phnow=0;
    let phnext=0;
    function phmove() {
        phnext=phnow+1;
		if(phnext>=phbs.length){
		    phnext=0;
		}
		phbs.eq(phnext).css({left:"100%"});
		phbs.eq(phnow).animate({left:"-100%"});
		phbs.eq(phnext).animate({left:"0"});
        pages.eq(phnow).removeClass("active");
        pages.eq(phnext).addClass("active");
        phnow=phnext;
    }
    phleft.click(function () {
        phnext=phnow-1;
        if(phnext<0){
            phnext=phbs.length-1;
        }
        phbs.eq(phnext).css({left:"-100%"});
        phbs.eq(phnow).animate({left:"100%"});
        phbs.eq(phnext).animate({left:"0"});
        pages.eq(phnow).removeClass("active");
        pages.eq(phnext).addClass("active");
        phnow=phnext;

    })
    phright.click(function () {
        phmove();
    })
    pages.on("mouseenter",function () {
        if($(this).index()>phnow){
            phnext=$(this).index();
            phnext=phnow+1;

            if(phnext>=phbs.length){
                phnext=0;
            }
            phbs.eq(phnext).css({left:"100%"});
            phbs.eq(phnow).animate({left:"-100%"});
            phbs.eq(phnext).animate({left:"0"});
            pages.eq(phnow).removeClass("active");
            pages.eq(phnext).addClass("active");
            phnow=phnext;
        }else if($(this).index()<phnow){
            phnext=$(this).index();
            phnext=phnow-1;
            if(phnext<0){
                phnext=phbs.length-1;
            }
            phbs.eq(phnext).css({left:"-100%"});
            phbs.eq(phnow).animate({left:"100%"});
            phbs.eq(phnext).animate({left:"0"});
            pages.eq(phnow).removeClass("active");
            pages.eq(phnext).addClass("active");
            phnow=phnext;
        }
    })

    //视频
    let spnow=0;
    let spnext=0;
    let sps=$(".spll");
    function spmove() {
        spnext=spnow+1;
        if(spnext>=sps.length){
            spnext=0;
        }
        sps.eq(spnext).css({left:"100%"}),sps.eq(spnow).animate({left:"-100%"}),sps.eq(spnext).animate({left:"0"});
        spnow=spnext;
    }
    $(".spleft").click(function () {
        spnext=spnow-1;
        if(spnext<0){
            spnext=sps.length-1;
        }
        sps.eq(spnext).css({left:"-100%"}), sps.eq(spnow).animate({left:"100%"}), sps.eq(spnext).animate({left:"0"});
        spnow=spnext;
    })
    $(".spright").click(function () {
        spmove();
    })
    
    //测导航
    $(".xinxi").on("mouseenter",function () {
        $(this).children(".xxb").animate({left:"-55px"})
    }).on("mouseleave",function () {
        $(this).children(".xxb").animate({left:"0"})
    })

    //头条
    let tts=$(".ttclear");
    let ttnow=0;
    let ttnext=0;
    function ttmove() {
        ttnext=ttnow+1;
        if(ttnext>=tts.length){
            ttnext=0;
        }
        tts.eq(ttnext).css({bottom:"-100%"}),tts.eq(ttnow).animate({bottom:"100%"}),tts.eq(ttnext).animate({bottom:"0"});
        ttnow=ttnext;
    }
    let time=setInterval(ttmove,3000)

   //搜索框
    $(".search_left").focus(function () {
        $(this).next(".ssresult").show();
    });
    $(".search_left").blur(function () {
        $(this).next(".ssresult").hide();
    })









































})
