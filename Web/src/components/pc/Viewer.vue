<template>
    <!-- 使用transition组件实现视图的过渡效果，key属性用于指定过渡对象 -->
    <transition name="views" key="box1">
        <!-- v-if指令用于条件渲染，只有当isview为真时，内部组件才会被渲染 -->
        <div class="viewer" v-if="isview">
            <!-- 一个作为背景的div，用于填充整个视图区域 -->
            <div class="bg">
            </div>
            <!-- 用于展示图片的div，内部的img标签动态绑定src属性以显示不同的图片 -->
            <div class="viewer-photo">
                <img :src="baseImgPath  + photo[number] " alt=''>
            </div>
            <!-- 左侧切换按钮，当当前图片不是第一张时显示，点击时调用changeNumber函数切换到上一张图片 -->
            <div class="switch sw-left" @click="changeNumber(0)" v-show="number > 0">
                <span class="iconfont icon-xiangzuo"></span>
            </div>
            <!-- 右侧切换按钮，当当前图片不是最后一张时显示，点击时调用changeNumber函数切换到下一张图片 -->
            <div class="switch sw-right" @click="changeNumber(1)" v-show="number < photo.length - 1">
                <span class="iconfont icon-xiangyou"></span>
            </div>
        </div>
    </transition>
</template>

<script setup>
// 导入Vue的computed函数和emit函数，以及环境变量baseImgPath
import { computed } from 'vue';
import { baseImgPath } from '@/utils/env';

// 定义组件属性，包括图片数组photos、当前图片索引nowNumber和是否显示视图isView
const props = defineProps({
    photos: {
        default: []
    },
    nowNumber: {
        type: Number,
        default: 0
    },
    isView: {
        default: false
    }
})

// 定义组件的emit事件，用于父子组件之间的通信
const emits = defineEmits(['viewSwitch'])

// 计算属性，用于判断是否显示图片视图
const isview = computed(() => {
    return props.isView
})

// 计算属性，用于获取当前图片的索引
const number = computed(() => {
    return props.nowNumber
})

// 计算属性，用于获取图片数组
const photo = computed(() => {
    return props.photos
})

// 函数changeNumber用于处理图片的切换事件，参数e表示切换的方向（0为左，1为右）
const changeNumber = (e) => {
    emits('viewSwitch', e) // 触发viewSwitch事件，将切换方向传递给父组件
}
</script>

<style lang="less" scoped>
// 定义views过渡动画的样式，包括进入和离开的动画效果
.views {
    &-enter {
        &-from {
            opacity: 0;
        }

        &-active {
            transition: all .2s ease-in;
        }

        &-to {
            opacity: 1;
        }
    }

    &-leave {
        &-from {
            opacity: 1;
        }

        &-active {
            transition: all .2s ease-out;
        }

        &-to {
            opacity: 0;
        }
    }

}

// 定义viewer类的样式，用于布局和样式化图片视图
.viewer {
    position: fixed; // 固定定位，使视图在页面滚动时保持不变
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow-y: auto; // 允许垂直滚动

    .bg {
        position: fixed; // 背景层，覆盖整个视图区域
        top: 0;
        left: 0;
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(20px);
        height: 100%;
        width: 100%;
    }

    .viewer-photo {
        position: absolute; // 图片展示区域，使用绝对定位
        padding: 82px 454px 5px 96px;
        box-sizing: border-box;
        width: 100%;
        overflow-y: auto; // 允许垂直滚动
        display: flex;
        justify-content: center; // 水平居中图片

        img {
            max-width: 100%; // 保证图片宽度最大为容器宽度
            margin: 0;
            padding: 0;
            display: inline; // 内联显示图片，使其与其他元素并列
        }
    }

    .switch {
        width: 56px;
        height: 56px;
        border-radius: 50%; // 圆形按钮
        background: @gray-3; // 使用预定义的灰色
        color: @gray-10; // 按钮文字颜色
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto; // 垂直居中按钮
        display: flex;
        justify-content: center;
        align-items: center; // 水平和垂直居中图标
        opacity: 0.5; // 半透明
        transition: @tr; // 过渡效果
        cursor: pointer; // 鼠标指针变为手形

        .iconfont {
            font-size: 24px; // 图标字体大小
        }

        &:hover {
            opacity: 1; // 鼠标悬停时完全不透明
        }
    }

    .sw-left {
        left: 20px; // 左侧按钮的位置
    }

    .sw-right {
        right: 380px; // 右侧按钮的位置
    }

}
</style>