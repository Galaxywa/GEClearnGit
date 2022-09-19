$(function () {
    $('.line-btn').on('click', function () {
        $('.ac-gn-list').css('display','block')
        
        $('body').css('overflow-y', 'hidden')
        
    })

    $('.menuicon-img').on('click',function () {
        $('.ac-gn-list').css('display','none')
        
        $('body').css('overflow-y', 'scroll')    
    })

    $('#inp').on('click' , function () {
        $('.ac-gn-menuicon').css('display','none');
        $('.a2').css('display','none');
        $('.a1').css('display','block');
        $('.but').css('display','block')
    })

    $('.but').on('click', function () {
        $('.ac-gn-menuicon').css('display','block');
        $('.a2').css('display','block');
        $('.a1').css('display','none');
        $('.but').css('display','none')
    })

    $('.w1').on('click' , function () {
        $('.w4').css('height','300px')
        $('.w3').css('display','block')
        $('.w1').css('display','none')
        $('.w2').css('display','block')
    })

    $('.w2').on('click' , function () {
        $('.w4').css('height','0px')
        $('.w3').css('display','none')
        $('.w1').css('display','block')
        $('.w2').css('display','none')
    })

    $('.q1').on('click' , function () {
        $('.q4').css('height','150px')
        $('.q3').css('display','block')
        $('.q1').css('display','none')
        $('.q2').css('display','block')
    })

    $('.q2').on('click' , function () {
        $('.q4').css('height','0px')
        $('.q3').css('display','none')
        $('.q1').css('display','block')
        $('.q2').css('display','none')
    })

    $('.e1').on('click' , function () {
        $('.e4').css('height','100px')
        $('.e3').css('display','block')
        $('.e1').css('display','none')
        $('.e2').css('display','block')
    })

    $('.e2').on('click' , function () {
        $('.e4').css('height','0px')
        $('.e3').css('display','none')
        $('.e1').css('display','block')
        $('.e2').css('display','none')
    })

    $('.r1').on('click' , function () {
        $('.r4').css('height','300px')
        $('.r3').css('display','block')
        $('.r1').css('display','none')
        $('.r2').css('display','block')
    })

    $('.r2').on('click' , function () {
        $('.r4').css('height','0px')
        $('.r3').css('display','none')
        $('.r1').css('display','block')
        $('.r2').css('display','none')
    })

    $('.t1').on('click' , function () {
        $('.t4').css('height','70px')
        $('.t3').css('display','block')
        $('.t1').css('display','none')
        $('.t2').css('display','block')
    })

    $('.t2').on('click' , function () {
        $('.t4').css('height','0px')
        $('.t3').css('display','none')
        $('.t1').css('display','block')
        $('.t2').css('display','none')
    })

    $('.y1').on('click' , function () {
        $('.y4').css('height','70px')
        $('.y3').css('display','block')
        $('.y1').css('display','none')
        $('.y2').css('display','block')
    })

    $('.y2').on('click' , function () {
        $('.y4').css('height','0px')
        $('.y3').css('display','none')
        $('.y1').css('display','block')
        $('.y2').css('display','none')
    })

    $('.u1').on('click' , function () {
        $('.u4').css('height','120px')
        $('.u3').css('display','block')
        $('.u1').css('display','none')
        $('.u2').css('display','block')
    })

    $('.u2').on('click' , function () {
        $('.u4').css('height','0px')
        $('.u3').css('display','none')
        $('.u1').css('display','block')
        $('.u2').css('display','none')
    })

    $('.i1').on('click' , function () {
        $('.i4').css('height','200px')
        $('.i3').css('display','block')
        $('.i1').css('display','none')
        $('.i2').css('display','block')
    })

    $('.i2').on('click' , function () {
        $('.i4').css('height','0px')
        $('.i3').css('display','none')
        $('.i1').css('display','block')
        $('.i2').css('display','none')
    })

    
    
    for (var i = 0; i < data.length; i++) {
        console.log('data', data);
        var $pageHome = $(`<div class="page-home-list col-lg-6 col-md-6 col-sm-6 ${data[i].type}">
        <div class="page-home-text">
            <h1 class="cta-links-text">${data[i].h1}</h1>
            <div class="cta-links-text">${data[i].div}</div>
            <div class="cta-links-text">
                <a href="#">${data[i].a}${data[i].a2}<span>></span></a>
            </div>
        </div>
    </div>`)
    
    $('.page-home').append($pageHome)  
    }

    $('.line-btn1').on('click',function() {
        $('.ac-gn-header').css('display','block')
        $('.ac-globalnav ').css('display','block')
        $('.ac-gn-content').css('display','block')

    })

    $('.menuicon-img').on('click', function() {
        $('.ac-gn-header').css('display','none')
        $('.ac-stop').css('display','none')
    })
   
})