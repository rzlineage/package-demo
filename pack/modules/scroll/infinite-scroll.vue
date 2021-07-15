<template>
    <section class="scroll_box">
        <div class="scroll">
            <vue-seamless-scroll :class-option="defaultOption" class="seamless-warp2">
                <slot></slot>
            </vue-seamless-scroll>
        </div>
    </section>
</template>

<script>
import vueSeamlessScroll from "vue-seamless-scroll"
export default {
    name:"InfiniteScroll",
    components:{
        vueSeamlessScroll
    },
    props:{
        speed:{
            type:Number,
            default:0.2,
        },
        scroll_direction:{
            type:Number,
            default:2
        }
    },
    data(){
        return{
            defaultOption:{
                step:this.speed,
                direction:this.scroll_direction,
                limitMoveNum: 0
            }
        }
    },
}
</script>

<style>
    .scroll_box{
        position: relative;
    }
    .scroll{
        width: 200px;
        background: #eee;
        overflow: hidden;
    }
</style>