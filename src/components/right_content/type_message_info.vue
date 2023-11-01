<template>
    <div class = 'icon_wrapper no_margin column_direction'>
        <span class = 'date'> {{date.getHours() + ':' + date.getMinutes() }} </span>
        <font-awesome-icon class = 'fai' icon="envelope" />   

    </div>
</template>

<script>
export default {
    data() {
        return {
            date: new Date()
        }
    },
}
</script>

<style scoped>
    .date{
        font-size: 14px;
    }
    .column_direction{
        flex-direction: column;
    }
</style>