<template>
  <div id="app">
    <div v-for="(cell_data) in data.cells" :key=cell_data.id> 
      <Cell :data = cell_data />
    </div>
    
  </div>
</template>

<script>
import Cell from './components/form_cell.vue'
import mock_data from './mock_data/data.json'

export default {
  name: 'App',
  components: {
    Cell
  },
  data() {
    return {
      data: [],
    }
  },
  mounted() {
    this.data = mock_data;
  
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
  background-color: #ccc;
}
</style>
