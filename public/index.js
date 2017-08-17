var app = new Vue({
    el:"#app",
    data:{
        color:"red",
        blocks:[]
    },
    methods:{
      addBlock(){
        console.log(this)
        this.$data.blocks.push({backgroundcolor:`background:${this.$data.color}`})
      }
    }
})
