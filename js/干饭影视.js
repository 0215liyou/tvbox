// 地址发布页 https://gfys.top

var rule = {
    title: '干饭影视',
    // host:'https://gfysys.com',
    host: 'https://gfys.top',
    hostJs: 'print(HOST);let html=request(HOST,{headers:{"User-Agent":PC_UA}});let src=jsp.pdfh(html,"li:eq(0)&&a:eq(0)&&Text");print(src);HOST=src',
    // url:'/vodshow/fyclass--------fypage---.html',
    url: '/vodshow/fyclassfyfilter.html',
    filterable: 1,//是否启用分类筛选,
    filter_url: '-{{fl.area}}-{{fl.by}}-{{fl.class}}-----fypage---{{fl.year}}',
    filter: {
        "1": [{ "key": "class", "name": "剧情", "value": [{ "n": "全部", "v": "" }, { "n": "喜剧", "v": "喜剧" }, { "n": "爱情", "v": "爱情" }, { "n": "恐怖", "v": "恐怖" }, { "n": "动作", "v": "动作" }, { "n": "科幻", "v": "科幻" }, { "n": "剧情", "v": "剧情" }, { "n": "战争", "v": "战争" }, { "n": "警匪", "v": "警匪" }, { "n": "犯罪", "v": "犯罪" }, { "n": "动画", "v": "动画" }, { "n": "奇幻", "v": "奇幻" }, { "n": "武侠", "v": "武侠" }, { "n": "冒险", "v": "冒险" }, { "n": "枪战", "v": "枪战" }, { "n": "恐怖", "v": "恐怖" }, { "n": "悬疑", "v": "悬疑" }, { "n": "惊悚", "v": "惊悚" }, { "n": "经典", "v": "经典" }, { "n": "青春", "v": "青春" }, { "n": "文艺", "v": "文艺" }, { "n": "微电影", "v": "微电影" }, { "n": "古装", "v": "古装" }, { "n": "历史", "v": "历史" }, { "n": "运动", "v": "运动" }, { "n": "农村", "v": "农村" }, { "n": "儿童", "v": "儿童" }, { "n": "网络电影", "v": "网络电影" }] }, { "key": "area", "name": "地区", "value": [{ "n": "全部", "v": "" }, { "n": "大陆", "v": "大陆" }, { "n": "香港", "v": "香港" }, { "n": "台湾", "v": "台湾" }, { "n": "美国", "v": "美国" }, { "n": "法国", "v": "法国" }, { "n": "英国", "v": "英国" }, { "n": "日本", "v": "日本" }, { "n": "韩国", "v": "韩国" }, { "n": "德国", "v": "德国" }, { "n": "泰国", "v": "泰国" }, { "n": "印度", "v": "印度" }, { "n": "意大利", "v": "意大利" }, { "n": "西班牙", "v": "西班牙" }, { "n": "加拿大", "v": "加拿大" }, { "n": "其他", "v": "其他" }] }, { "key": "year", "name": "年份", "value": [{ "n": "全部", "v": "" }, { "n": "2025", "v": "2025" }, { "n": "2024", "v": "2024" }, { "n": "2023", "v": "2023" }, { "n": "2022", "v": "2022" }, { "n": "2021", "v": "2021" }, { "n": "2020", "v": "2020" }, { "n": "2019", "v": "2019" }, { "n": "2018", "v": "2018" }, { "n": "2017", "v": "2017" }, { "n": "2016", "v": "2016" }, { "n": "2015", "v": "2015" }, { "n": "2014", "v": "2014" }, { "n": "2013", "v": "2013" }, { "n": "2012", "v": "2012" }, { "n": "2011", "v": "2011" }, { "n": "2010", "v": "2010" }] }, { "key": "by", "name": "排序", "value": [{ "n": "时间", "v": "time" }, { "n": "人气", "v": "hits" }, { "n": "评分", "v": "score" }] }],
        "2": [{ "key": "class", "name": "剧情", "value": [{ "n": "全部", "v": "" }, { "n": "古装", "v": "古装" }, { "n": "战争", "v": "战争" }, { "n": "青春偶像", "v": "青春偶像" }, { "n": "喜剧", "v": "喜剧" }, { "n": "家庭", "v": "家庭" }, { "n": "犯罪", "v": "犯罪" }, { "n": "动作", "v": "动作" }, { "n": "奇幻", "v": "奇幻" }, { "n": "剧情", "v": "剧情" }, { "n": "历史", "v": "历史" }, { "n": "经典", "v": "经典" }, { "n": "乡村", "v": "乡村" }, { "n": "情景", "v": "情景" }, { "n": "商战", "v": "商战" }, { "n": "网剧", "v": "网剧" }, { "n": "其他", "v": "其他" }] }, { "key": "area", "name": "地区", "value": [{ "n": "全部", "v": "" }, { "n": "内地", "v": "内地" }, { "n": "韩国", "v": "韩国" }, { "n": "香港", "v": "香港" }, { "n": "台湾", "v": "台湾" }, { "n": "日本", "v": "日本" }, { "n": "美国", "v": "美国" }, { "n": "泰国", "v": "泰国" }, { "n": "英国", "v": "英国" }, { "n": "新加坡", "v": "新加坡" }, { "n": "其他", "v": "其他" }] }, { "key": "year", "name": "年份", "value": [{ "n": "全部", "v": "" }, { "n": "2025", "v": "2025" }, { "n": "2024", "v": "2024" }, { "n": "2023", "v": "2023" }, { "n": "2022", "v": "2022" }, { "n": "2021", "v": "2021" }, { "n": "2020", "v": "2020" }, { "n": "2019", "v": "2019" }, { "n": "2018", "v": "2018" }, { "n": "2017", "v": "2017" }, { "n": "2016", "v": "2016" }, { "n": "2015", "v": "2015" }, { "n": "2014", "v": "2014" }, { "n": "2013", "v": "2013" }, { "n": "2012", "v": "2012" }, { "n": "2011", "v": "2011" }, { "n": "2010", "v": "2010" }, { "n": "2009", "v": "2009" }, { "n": "2008", "v": "2008" }, { "n": "2006", "v": "2006" }, { "n": "2005", "v": "2005" }, { "n": "2004", "v": "2004" }] }, { "key": "by", "name": "排序", "value": [{ "n": "时间", "v": "time" }, { "n": "人气", "v": "hits" }, { "n": "评分", "v": "score" }] }],
        "3": [{ "key": "class", "name": "剧情", "value": [{ "n": "全部", "v": "" }, { "n": "选秀", "v": "选秀" }, { "n": "情感", "v": "情感" }, { "n": "访谈", "v": "访谈" }, { "n": "播报", "v": "播报" }, { "n": "旅游", "v": "旅游" }, { "n": "音乐", "v": "音乐" }, { "n": "美食", "v": "美食" }, { "n": "纪实", "v": "纪实" }, { "n": "曲艺", "v": "曲艺" }, { "n": "生活", "v": "生活" }, { "n": "游戏互动", "v": "游戏互动" }, { "n": "财经", "v": "财经" }, { "n": "求职", "v": "求职" }] }, { "key": "area", "name": "地区", "value": [{ "n": "全部", "v": "" }, { "n": "内地", "v": "内地" }, { "n": "港台", "v": "港台" }, { "n": "日韩", "v": "日韩" }, { "n": "欧美", "v": "欧美" }] }, { "key": "year", "name": "年份", "value": [{ "n": "全部", "v": "" }, { "n": "2025", "v": "2025" }, { "n": "2024", "v": "2024" }, { "n": "2023", "v": "2023" }, { "n": "2022", "v": "2022" }, { "n": "2021", "v": "2021" }, { "n": "2020", "v": "2020" }, { "n": "2019", "v": "2019" }, { "n": "2018", "v": "2018" }, { "n": "2017", "v": "2017" }, { "n": "2016", "v": "2016" }, { "n": "2015", "v": "2015" }, { "n": "2014", "v": "2014" }, { "n": "2013", "v": "2013" }, { "n": "2012", "v": "2012" }, { "n": "2011", "v": "2011" }, { "n": "2010", "v": "2010" }, { "n": "2009", "v": "2009" }, { "n": "2008", "v": "2008" }, { "n": "2007", "v": "2007" }, { "n": "2006", "v": "2006" }, { "n": "2005", "v": "2005" }, { "n": "2004", "v": "2004" }] }, { "key": "by", "name": "排序", "value": [{ "n": "时间", "v": "time" }, { "n": "人气", "v": "hits" }, { "n": "评分", "v": "score" }] }],
        "4": [{ "key": "class", "name": "剧情", "value": [{ "n": "全部", "v": "" }, { "n": "情感", "v": "情感" }, { "n": "科幻", "v": "科幻" }, { "n": "热血", "v": "热血" }, { "n": "推理", "v": "推理" }, { "n": "搞笑", "v": "搞笑" }, { "n": "冒险", "v": "冒险" }, { "n": "萝莉", "v": "萝莉" }, { "n": "校园", "v": "校园" }, { "n": "动作", "v": "动作" }, { "n": "机战", "v": "机战" }, { "n": "运动", "v": "运动" }, { "n": "战争", "v": "战争" }, { "n": "少年", "v": "少年" }, { "n": "少女", "v": "少女" }, { "n": "社会", "v": "社会" }, { "n": "原创", "v": "原创" }, { "n": "亲子", "v": "亲子" }, { "n": "益智", "v": "益智" }, { "n": "励志", "v": "励志" }, { "n": "其他", "v": "其他" }] }, { "key": "area", "name": "地区", "value": [{ "n": "全部", "v": "" }, { "n": "国产", "v": "国产" }, { "n": "日本", "v": "日本" }, { "n": "欧美", "v": "欧美" }, { "n": "其他", "v": "其他" }] }, { "key": "year", "name": "年份", "value": [{ "n": "全部", "v": "" }, { "n": "2025", "v": "2025" }, { "n": "2024", "v": "2024" }, { "n": "2023", "v": "2023" }, { "n": "2022", "v": "2022" }, { "n": "2021", "v": "2021" }, { "n": "2020", "v": "2020" }, { "n": "2019", "v": "2019" }, { "n": "2018", "v": "2018" }, { "n": "2017", "v": "2017" }, { "n": "2016", "v": "2016" }, { "n": "2015", "v": "2015" }, { "n": "2014", "v": "2014" }, { "n": "2013", "v": "2013" }, { "n": "2012", "v": "2012" }, { "n": "2011", "v": "2011" }, { "n": "2010", "v": "2010" }, { "n": "2009", "v": "2009" }, { "n": "2008", "v": "2008" }, { "n": "2007", "v": "2007" }, { "n": "2006", "v": "2006" }, { "n": "2005", "v": "2005" }, { "n": "2004", "v": "2004" }] }, { "key": "by", "name": "排序", "value": [{ "n": "时间", "v": "time" }, { "n": "人气", "v": "hits" }, { "n": "评分", "v": "score" }] }]
    },
    searchUrl: '/vodsearch/**-------------.html',
    searchable: 2,//是否启用全局搜索,
    headers: {
        'User-Agent': 'PC_UA',
    },
    class_parse: 'ul.swiper-wrapper&&li;a&&Text;a&&href;/(\\d+).html',
    play_parse: true,
    lazy: `js:
        var html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
        var url = html.url;
        var from = html.from;
        if (html.encrypt == '1') {
            url = unescape(url)
        } else if (html.encrypt == '2') {
            url = unescape(base64Decode(url))
        }
        if (/m3u8|mp4/.test(url)) {
            input = url
        } else {
            var MacPlayerConfig = {};
            eval(fetch(HOST + '/static/js/playerconfig.js').replace('var Mac', 'Mac'));
            var jx = MacPlayerConfig.player_list[from].parse;
            var pconfig = jsp.pdfh(request(jx + url), 'body&&script,0&&Html').match(/config = {[\\s\\S]*?}/)[0];
            var config = {};
            eval(pconfig);
            let apiurl = '';
            if (config.url.startsWith('http')) {
                apiurl = getHome(jx) + '/API.php';
            } else {
                apiurl = getHome(jx) + '/aqpqp/API.php';
            }
            let purl = JSON.parse(request(apiurl, {
                headers: {
                    'Origin': HOST
                },
                body: 'url=' + config.url,
                method: 'POST'
            })).url;
            input = {
                jx: 0,
                url: purl,
                parse: 0,
                header: JSON.stringify({
                    'Origin': HOST
                })
            }
        }
    `,
    double: true, // 推荐内容是否双层定位
    // 推荐: '.tab-content:gt(0)&&li;*;*;;*',
    推荐: '.ewave-vodlist;li;*;*;;*',
    一级: '.ewave-vodlist&&li;.lazyload&&title;.lazyload&&data-original;;a&&href',
    二级: {
        "title": "h1&&Text;.data--span:eq(0)&&Text",
        "img": ".lazyload&&data-original",
        "desc": ".data:eq(3)&&Text;;;.data--span:eq(1)&&Text;.data--span:eq(2)&&Text",
        "content": ".desc--a&&Text",
        "tabs": ".nav-tabs&&li",
        "lists": ".ewave-content__playlist:eq(#id)&&li"
    },
    搜索: '.ewave-vodlist__media&&li;*;*;;*',
}