<template>
    <!-- 页面底部栏 -->
    <div class="foot-bar">
        <!-- 网站介绍 -->
        <div class="section intro">
            <h2>青一录 - 网站介绍</h2>
            <p>&#12288;&#12288;此网站是LiRayShield和鑫奇时代等人共同开发，数据库持有者ID用户LiRayShield和服务器ECS持有者鑫奇时代，如果发错了请及时联系墙主LiRayShield（联系方式为免责声明里面的邮箱）或其他管理人员鑫奇时代（微信：dxq13230936038）删掉，请注意用户在写留言过程中遵守相应的法律法规（在免责声明中），墙主li总是一个非常厉害的前端程序员，请注意打赏哦，1元不嫌多，100元不嫌少，墙主LiRayShield（是个大帅哥，缺男朋友的小姐姐抓紧了）和鑫奇时代都是学生。</p>
        </div>
        
        <!-- 友情链接 -->
        <div class="section links">
            <h2>友情链接</h2>
            <ul>
                <li><a href="http://123.56.104.70/book">答案之书</a></li>
                <li><a href="https://weibo.com/u/7446682621">墙主 微博</a></li>
                <li><a href="https://www.kuaishou.com/profile/3xkayqz9syw5q24">江-滨 快手</a></li>
            <!--     <li><a href="https://github.com/LiRayShield">墙主Github</a></li>
            -->    <!-- 更多链接... -->
            </ul>
        </div>
        
        <!-- 赞赏二维码 -->
        <div class="section qr-code">
            <h2>支持一下</h2>
            <img src="./imges/weixin.png" alt="微信">
            <img src="https://avatars.githubusercontent.com/u/99780300?v=4" alt="赞赏二维码">
        </div>
    </div>
</template>

<style lang="less" scoped>
.foot-bar {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    width: 100%;
    height: auto;
    background: @gray-1;
    box-sizing: border-box;
    margin-top: 40px;
    color: white;

    .section {
        flex: 1;
        h2 {
            margin-bottom: 10px;
        }
        ul {
            text-align: left; /* 修改这里 */
            list-style-type: none;
            padding: 0;
            li {
                font-size: 16px; /* 设置字体大小 */
                margin-bottom: 5px;
            }
            a {
                color: inherit;
                text-decoration: none;
            }
        }
        
        &.intro { /* 仅在网站介绍部分设置字体大小和两端对齐 */
            p {
                font-size: 16px; /* 设置字体大小 */
                text-align: justify; /* 设置两端对齐 */
                line-height: 25px; /* 设置行高为25像素 */
            }
            /* 添加右侧外边距 */
            margin-right: 20px;
        }
        
        &.qr-code { /* 仅在赞赏二维码部分设置图片大小和布局 */
            display: flex; /* 使图片水平排列 */
            gap: 30px; /* 设置图片间的间距 */
            align-items: center; /* 垂直居中对齐 */
            img {
                width: 180px; /* 设置图片宽度 */
                height: 180px; /* 设置图片高度 */
            }
        }
    }
}
</style>