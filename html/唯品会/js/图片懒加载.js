window.onload = function () {

    var navList = document.querySelector('.nav-list');

    // console.log('allProducts ==> ', allProducts);

    var count = 16;
    var offsetCount = 20;

    var isFinishedLoaded = false;

    //初始化20个商品数据
    function initProduct20(offset, limit) {

      var data = allProducts.slice(offset, limit);
      console.log('data ==> ', data);

      for (var i = 0; i < data.length; i++) {
        //创建li
        var li = document.createElement('li');
        // console.log('li ==> ', li);

        li.innerHTML = `<div class="data-img">
                      <img src="${data[i].url}" alt="">
                  </div>
                  <div class="title">${data[i].name}</div>`;
        
        
       navList.appendChild(li);
      }

      if (data.length < count) {
        isFinishedLoaded = true;
        document.querySelector('.not-data').style.display = 'block';
      }

    }

    initProduct20(0, offsetCount);


    var isCanRun = true;
    document.onscroll = function () {

      if (isFinishedLoaded) {
        console.log('没有更多数据可加载');
        return;
      }

      if (!isCanRun) {
        return;
      }

      isCanRun = false;

      setTimeout(function () {
        isCanRun = true;
        // console.log('触发加载');

        //获取滚动条的滚动距离
        // var scrollDistance = document.documentElement.scrollTop;
        // console.log('scrollDistance ==> ', scrollDistance);
        // console.log('pageYoffset ==> ', pageYOffset);

        //获取窗口的高度
        // console.log('innerHeight ==> ', innerHeight);

        //获取页面的高度
        var pageHeight = document.body.clientHeight;
        // console.log('pageHeight ==> ', pageHeight);

        if (pageHeight - innerHeight - 10 <= pageYOffset) {

          console.log('触发');

          initProduct20(offsetCount, offsetCount + count);
          console.log('offsetCount ==> ', offsetCount);
          console.log('offsetCount + count ==> ', offsetCount + count);
          offsetCount += count;


        }


      }, 800);

    }
    	
	
		

		

  }