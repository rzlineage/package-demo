<template>
    <div>

        <!-- 页面头部 -->
        <section
            class="master_head" 
            :class="{ 'master_fixed':params.head_fixed, }"
            :style="[
                params.head_fixed ? { 'top':params.head_top } : '',
                { 'height':params.head_height },
                params.left == 'max' ? { 'margin-left':params.left_width } : ''
            ]"
        >
            <div 
                :class="params.layout_center ? 'master_middle' : ''"
                :style="{ 
                    'width':params.head_width,
                    'height':params.head_height
                }">
                <!-- 头部插槽 -->
                <slot name="head">HEAD</slot>
            </div>
        </section>
        <div v-if="params.head_fixed" :style="{ 'height':params.head_height }"></div>

        <!-- 左侧边栏 -->
        <section 
            class="master_left"
            :style="[{
                'top':params.left == 'max' ? '0' : params.head_height,
                'width':params.left_width,
                'height':params.left == 'max' ? '100%' : 'calc(100% - ' + params.head_height + ')'
            }]"
            v-if="params.left == 'float' || params.left == 'max'"
        >
            <slot name="left">LEFT_SIDE</slot>
        </section>

        <!-- 头部和底部之间的插槽 -->
        <section 
            class="master_content"
            :style="{ 'margin-left':params.left == 'float' || params.left == 'max' ? params.left_width : ''}"
        >
            <div 
                :class="params.layout_center ? 'master_middle' : ''"
                :style="{ 'width':params.head_width }"
            >
                <slot>CENTER</slot>
            </div>
        </section>

        <!-- 页面底部 -->
        <section class="master_footer" v-if="params.footer">
            <div
                :class="params.layout_center ? 'master_middle' : ''"
                :style="{ 'width':params.head_width }"
            >
                <!-- 底部插槽 -->
                <slot name="footer">FOOTER</slot>
            </div>
        </section>

    </div>
</template>

<script>

export default {
    name:"LayoutMaster",
    props:{
        params:{
            type:Object,
            default:() =>{
                return{}
            }
        }
    },
    computed:{
        param(){
            return Object.assign({
                head_fixed:false,
                head_top:"0",
                layout_center:false,
                footer:true,
                head_width:"auto",
                head_height:"auto",
                left:"",
                left_width:"0"
            },this.params)
        },

    }
}
</script>

<style scoped>
    .master_fixed{
        position: fixed;
        left: 0;
        background: #eee;
    }
    .master_head,
    .master_footer,
    .master_content{
        width: 100%;
        background: #ccc;
    }
    .master_content{
        min-height: 700px;
        background: #fff;
    }
    .master_middle{
        margin: 0 auto;
        background: #eee;
    }
    .master_left{
        position: fixed;
        left: 0;
        background: #ddd;
    }
</style>