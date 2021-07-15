<template>
    <section 
        v-drag
        data-drag="move"
        class="float_box"
        :style="[{
            'top':top,
            'bottom':bottom,
            'left':left,
            'right':right,
        }]"
    >
        <div 
            v-if="close_button != ''" 
            :class="close_button == '' ? '' : close_button"
            @click="closeFloat"
        ></div>
        <slot>FLOAT_BOX</slot>
    </section>
</template>

<script>
export default {
    name:"FloatBox",
    props:{
        top:{
            type:String,
            default:"auto"
        },
        bottom:{
            type:String,
            default:"auto"
        },
        left:{
            type:String,
            default:"auto"
        },
        right:{
            type:String,
            default:"auto"
        },
        close_button:{
            type:String,
            default:""
        },
        move:{
            type:Boolean,
            default:false
        }
    },
    methods:{
        closeFloat(){
            this.$emit(close,"")
        }
    },
    directives:{
        drag(el){
            let flag = el.getAttribute('data-drag')
            if(flag){
                el.onmousedown = function(e){
                    let dragx = e.clientX - el.offsetLeft;
                    let dragy = e.clientY - el.offsetTop;
                    document.onmousemove = function(e){
                        el.style.left = e.clientX - dragx + "px";
                        el.style.top = e.clientY - dragy + "px";
                    }
                    document.onmouseup = function(){
                        document.onmousemove = document.onmouseup = null;
                        el.style.right = "auto"
                        el.style.bottom = "auto"
                    }
                }
            }
            
        }
    }
}

</script>

<style scoped>
    .float_box{
        position: fixed;
        transition: all .5s;
    }
    .close_button{
        position: absolute;
    }
</style>