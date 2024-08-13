<template>
    <div class="photo-card">
        <!-- 图片展示区域 -->
        <img :src="baseImgPath +  photo.imgurl"  class="photo-img">
        <!-- 点击背景层跳转到详情页 -->
        <div class="photo-bg" @click="toDetail"></div>
        <!-- 点赞区域 -->
        <div class="photo-like">
            <!-- 点赞图标，动态绑定样式以显示是否已点赞 -->
            <span class="iconfont icon-aixin1" :class="{ 'islike': photo.islike[0].count >= 1 }"
                @click="clickLike"></span>
            <!-- 点赞数 -->
            <span class="like-data">{{ photo.like[0].count }}</span>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { insertFeedBackApi } from '@/api/index'
import { useStore } from 'vuex';
import { baseImgPath } from '@/utils/env';
// 使用Vuex的状态管理
const store = useStore()
// 定义组件属性
const props = defineProps({
    photoItem: {
        default: {}
    },

})
// 定义组件事件
const emits = defineEmits(['toDetail'])
// 计算属性，用于处理展示的图片信息
const photo = computed(() => {
    return props.photoItem
})
// 跳转到详情页的处理函数
const toDetail = () => {
    emits('toDetail')
}
// 点击点赞的处理函数
const clickLike = () => {

    if (photo.value.islike[0].count == 0) {
        // 点赞操作的数据准备
        let data = {
            wallId: photo.value.id,
            userId: store.state.user.id,
            type: 0,
            moment: new Date()

        }
        // 执行点赞API调用
        insertFeedBackApi(data).then(res => {
            // 反馈
            photo.value.like[0].count++
            photo.value.islike[0].count++
        })
    }
}
</script>

<style lang="less" scoped>
.photo-card {
    position: relative;
    overflow-y: auto;

    .photo-img {
        width: 100%;

        margin: 0;
        box-sizing: border-box;
    }

    .photo-bg {
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.2);
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: @tr;
        cursor: pointer;
    }

    .photo-like {
        position: absolute;
        left: @padding-8;
        top: @padding-8;
        background: rgba(255, 255, 255, 0.80);
        border-radius: 20px;
        height: 28px;
        padding: 0 10px;
        display: flex;
        align-items: center;
        background: blur(20px);
        opacity: 0;
        transition: @tr;
        cursor: pointer;

        span {
            color: @gray-1;
        }

        .icon-aixin1 {
            color: @gray-3;
            padding-right: @padding-4;
        }
        .islike {
            color: @like;
        }

    }

    &:hover {
        .photo-bg {
            opacity: 1;
        }

        .photo-like {
            opacity: 1;
        }

    }
}
</style>