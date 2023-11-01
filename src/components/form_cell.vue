<template>
  <div>
    <div class ='cell_wrapper' :id = data.id 
        :class ="{ error_background: data.error, full_type: (data.type === 'full') }"
        :style ="{ height : data.height + 'px'}">

      <div class ='left_content'>
          <div v-if = data.img>
            <img class = 'image' :src = data.img />
          </div>

          <div v-if = data.icon class = 'icon_wrapper' :style="{'background-color' : data.icon_bg}">
            <font-awesome-icon class ='fai' icon ='wallet' />
          </div>

          <div class = 'text_wrapper'>
            <div v-if = data.title class='title'> {{data.title}} </div>
            <div v-if = data.subtitle class='subtitle'> {{data.subtitle}} </div>
          </div>
      </div>

      <div class='right_content'> 
          <component v-if = data.right_content class = 'component_wrapper' 
                    :is="`type_${data.right_content}`"> </component>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  props: ['data'],
  data()  { 
    return {} 
  },
  components: {
     type_text: () => import('./right_content/type_text.vue'),
     type_icon: () => import('./right_content/type_icon.vue'),
     type_link: () => import('./right_content/type_link.vue'),
     type_checkbox: () => import('./right_content/type_checkbox.vue'),
     type_button:() => import('./right_content/type_button.vue'),
     type_message_info: () => import('./right_content/type_message_info.vue'),
     type_error:() => import('./right_content/type_error.vue'),
  }
}
</script>

<style> 
  .cell_wrapper {
    width: 328px;
    display: flex;
    background-color: #f0f0f0;
    border-radius: 10px;
    margin: 10px auto;
  }
  .full_type{
    width: 360px;
    border-radius: 0;
    background-color: #fff;
    border-bottom: 0.5px solid #ccc;
    margin: 0 auto;
  }
  .error_background{
    background-color: #FEF1EB;
  }

  .left_content {
    display: flex;
    width: 70%;
    align-items: flex-start;
    padding-left: 20px;
    align-self: center;
  }
  .image{
    width: 40px;
    margin-right: 10px;
    border-radius: 5px;
  }
  .icon_wrapper{
    width:35px;
    height:35px;
    display: flex;
    justify-content: center;
    margin-right: 10px;
    border-radius: 5px;
  }
  .fai{
    width:25px;
    height: 25px;
    color: #ccc;
    align-self: center;
  }
    .error_icon{
    width:28px;
    height:28px;
    color: #ed1307
  }

  .text_wrapper{
    display: flex;
    flex-direction: column;
    align-self: center;
  }

  .title{
    color: black;
    font-size: 16px;
    line-height: 1.5rem;
    text-align: left;
  }

  .subtitle{
    color: grey;
    font-size: 14px;
    text-align: left;
  }

  .right_content {
    width: 30%;
    display: flex;
    justify-content: end;
    align-items: center;
    padding-right: 20px;
  }
  .error_block {
    display: flex;
    align-items: center;
  }
  .error_text {
    color: #ed1307;
    padding-right: 5px;
  }
  .no_margin{
    margin: 0;
  }

</style>

