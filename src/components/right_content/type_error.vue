 <template>
    <div class ='error_block'> 
        <span class = 'error_text' > {{error_text}}</span>
        <font-awesome-icon class = 'error_icon' icon="triangle-exclamation" />
    </div>
 </template>
 

 <script>

    export default {
        data() {
            return {
                error_text: 'Error'
            }
        },
    }
 
 </script>
