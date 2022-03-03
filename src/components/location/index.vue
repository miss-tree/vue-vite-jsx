<template>
    <div>
        <ul class="G_local">
            <li 
            v-for="(el,index) in list" :key="index"
            @click="goAnchor(el.id)">{{el.name}}</li>
        </ul>
        <!-- <back-top/> -->
        <BackTop/>
    </div>
</template>

<script>
import BackTop from "@/components/BackTop.vue"
export default {
    name:"location",
    components:{
        // BackTop:()=>import('@/components/BackTop.vue')
        BackTop
    },
    props:{
        list:{
            type:Array,
            required:true,
            default:[{name:'请求方式',id:'request'}]
        }
    },
    methods: {
        goAnchor(selector) {
            // var anchor = this.$el.querySelector(selector) // 参数为要跳转到的元素id
            var anchor = document.querySelector('#'+selector) // 参数为要跳转到的元素id
            document.body.scrollTop = anchor.offsetTop; // chrome
            document.documentElement.scrollTop = anchor.offsetTop; // firefox
        }
    }
}
</script>

<style lang="scss">
.G_local>li{
    cursor: pointer;
}
</style>


