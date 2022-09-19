$.post('http://api.tianapi.com/tianqi/index', {
                key: '90dffcad8cac539f1a63e7bdd380d233',
                city: '上海市'
            },
            function (data, status) {
                console.log(data);
                // $('#result').append(JSON.stringify(data)); //返回内容绑定到id为result的标签
                var da = data.newslist
                var div1 = document.createElement('div');
                div1.classList.add('divs');
                div1.innerHTML = `
                                <div class="head fl-not">
                                    <div class="headname">
                                        <span>${da[0].area}</span>
                                    </div>
                                    <div class="head-ri">
                                        <div class="date fl">
                                            ${da[0].date}
                                        </div>
                                        <div class="week fl">
                                            ${da[0].week}
                                        </div>
                                    </div>
                                </div>
                                <div class="main fl-not">
                                    <div class="main-left fl">
                                        <div class="le-images fl">
                                            <div class="main-img fl">
                                                <img src="./images/${da[0].weatherimg}" alt="">
                                            </div>
                                            <div class="main-text fl">
                                                <div class="temperature">
                                                    ${da[0].real}
                                                </div>
                                                <div class="Weather-temperature">
                                                    <span>${da[0].weather}</span>
                                                    <span>${da[0].lowest}~${da[0].highest}</span>   
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="main-right">
                                        <div class="information fl">
                                            <div class="te-one">
                                                <div class="one-text fl">风力：</div>
                                                <div class="text-color">${da[0].windsc}</div>
                                            </div>
                                            <div class="te-one">
                                                <div class="one-text fl">风向：</div>
                                                <div class="text-color">${da[0].wind}</div>
                                            </div>
                                            <div class="te-one">
                                                <div class="one-text fl">穿衣指数：</div>
                                                <div class="text-color">${da[0].tips}</div>
                                            </div>
                                            <div class="te-one">
                                                <div class="one-text fl">降雨概率：</div>
                                                <div class="text-color">${da[0].pop}%</div>
                                            </div>
                                            <div class="te-one">
                                                <div class="one-text fl">日出时间：</div>
                                                <div class="text-color">${da[0].sunrise}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="foother">
                                    <div class="Weather">
                                       
                                    </div>
                                </div>`;

                $('.box1').append(div1);
                for (let i = 0; i < da.length; i++) {
                    var ss = da[i].date.slice(5, 6);
                    var datey = da[i].date.slice(8, 10);
                    var datem
                    if (ss == 0) {
                        datem = da[i].date.slice(6, 7);
                    } else {
                        datem = da[i].date.slice(5, 7);
                    }
                    $('.Weather').append(`<div class="Weather-data">
                                            <div class="Weather-picture">
                                                <img src="./images/${da[i].weatherimg}" class="imgs" alt="">
                                            </div>
                                            <div class="Weather-text">
                                                <div class="text-fon">${da[i].lowest}~${da[i].highest}</div>
                                                <div class="text-fot">${da[i].week}(${datem}/${datey})</div>
                                            </div>
                                        </div>`)
                }
            });


        var ipt = document.querySelector('.inpt-he')
        ipt.onkeyup = function (e) {
            var self = this;
            //添加enter事件
            if (e.keyCode == 13) {
                

                $.post('http://api.tianapi.com/tianqi/index', {
                        key: '90dffcad8cac539f1a63e7bdd380d233',
                        city: `${self.value}`
                    },
                    function (data, status) {
                        if(data.msg !== 'success'){
                            return alert('请输入正确的城市名字')
                        }
                        $('.box1').children().remove();
                        console.log(data);
                        var da = data.newslist
                        var div1 = document.createElement('div');
                        div1.classList.add('divs');
                        div1.innerHTML = `
                                <div class="head fl-not">
                                    <div class="headname">
                                        <span>${da[0].area}</span>
                                    </div>
                                    <div class="head-ri">
                                        <div class="date fl">
                                            ${da[0].date}
                                        </div>
                                        <div class="week fl">
                                            ${da[0].week}
                                        </div>
                                    </div>
                                </div>
                                <div class="main fl-not">
                                    <div class="main-left fl">
                                        <div class="le-images fl">
                                            <div class="main-img fl">
                                                <img src="./images/${da[0].weatherimg}" alt="">
                                            </div>
                                            <div class="main-text fl">
                                                <div class="temperature">
                                                    ${da[0].real}
                                                </div>
                                                <div class="Weather-temperature">
                                                    <span>${da[0].weather}</span>
                                                    <span>${da[0].lowest}~${da[0].highest}</span>   
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="main-right">
                                        <div class="information fl">
                                            <div class="te-one">
                                                <div class="one-text fl">风力：</div>
                                                <div class="text-color">${da[0].windsc}</div>
                                            </div>
                                            <div class="te-one">
                                                <div class="one-text fl">风向：</div>
                                                <div class="text-color">${da[0].wind}</div>
                                            </div>
                                            <div class="te-one">
                                                <div class="one-text fl">穿衣指数：</div>
                                                <div class="text-color">${da[0].tips}</div>
                                            </div>
                                            <div class="te-one">
                                                <div class="one-text fl">降雨概率：</div>
                                                <div class="text-color">${da[0].pop}%</div>
                                            </div>
                                            <div class="te-one">
                                                <div class="one-text fl">日出时间：</div>
                                                <div class="text-color">${da[0].sunrise}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="foother">
                                    <div class="Weather">
                                       
                                    </div>
                                </div>`;

                        $('.box1').append(div1);
                        for (let i = 0; i < da.length; i++) {
                            var ss = da[i].date.slice(5, 6);
                            var datey = da[i].date.slice(8, 10);
                            var datem
                            if (ss == 0) {
                                datem = da[i].date.slice(6, 7);
                            } else {
                                datem = da[i].date.slice(5, 7);
                            }
                            $('.Weather').append(`<div class="Weather-data">
                                            <div class="Weather-picture">
                                                <img src="./images/${da[i].weatherimg}" class="imgs" alt="">
                                            </div>
                                            <div class="Weather-text">
                                                <div class="text-fon">${da[i].lowest}~${da[i].highest}</div>
                                                <div class="text-fot">${da[i].week}(${datem}/${datey})</div>
                                            </div>
                                        </div>`)
                        }
                    })
            }
        }