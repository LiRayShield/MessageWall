<template>
    <!-- 页面底部栏 -->
    <div class="foot-bar">
        <!-- 网站介绍 -->
        <div class="section intro">
            <h2>青一录 - 网站介绍</h2>
            <p>编写中....</p>
        </div>
        
        <!-- 友情链接 -->
        <div class="section links">
            <h2>友情链接</h2>
            <ul>
                <li><a href="https://weibo.com/u/7446682621">墙主微博</a></li>
                <li><a href="https://github.com/LiRayShield">墙主Github</a></li>
                <!-- 更多链接... -->
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
        
        &.intro { /* 仅在网站介绍部分设置字体大小 */
            p {
                font-size: 16px; /* 设置字体大小 */
            }
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