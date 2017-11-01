  <template>
    <div class="sidebar" v-show="show">
      <div class="circleBox">
        <div class="circle"  v-for="item in list" v-bind:class="{active: item.url === target}">
         <a href="javascript:void(0)"  @click="goAnchor(item.url)"><div><img :src="item.src"></div></a>
       </div>
     </div>
   </div>
 </template>

 <script>
 import Vue from 'vue'

 export default {
  data() {
    return {
      now:0,
      target:'',
      list:[
      {
        'name':'回頂部',
        'url':'slider',
        'distance':0,
        'src':this.$conf.PHOTO_URL+'images/svg/rocket.svg',
      },
      {
        'name':'香草介紹',
        'url':'detail',
        'distance':0,
        'src':this.$conf.PHOTO_URL+'images/svg/book2.svg',
      },
      {
        'name':'香草產地',
        'url':'site',
        'distance':0,
        'src':this.$conf.PHOTO_URL+'images/svg/001-placeholder-2.svg',
      },
      ],
      show:false,
    }
  },
  mounted:function(){
   this.$bus.$emit('navbar-memu', this.list);
   const self = this;
   document.getElementById('app').addEventListener('scroll', this.handleScroll);
   $(window).resize(function () {  
    self.listUpdate();
  });
 },
 watch: {
  now: function (value) {
    this.show = (value >= this.getElementTop(document.getElementById('detail'))*0.5) ? true :false;

    for (var i = this.list.length-1; i > -1; i--) {
     if(value*1.4 >= this.list[this.list.length-1].distance){
       this.target = this.list[this.list.length-1].url;
     }
     else if(value < this.list[i].distance && i-1 >=0){
      this.target = this.list[i-1].url;
    } 
  } 

}
},
methods: {
  handleScroll() {
    this.listUpdate();
    this.now = document.getElementById('app').scrollTop;
  },
  listUpdate(){
   for (var i = 0; i < this.list.length; i++) {
    this.list[i].distance = this.getElementTop(document.getElementById(this.list[i].url));
  }
},
goAnchor(target){
  var distance = this.getElementTop(document.getElementById(target));
  $('#app').animate({scrollTop:distance}, 800);   
},
getElementTop(element){
  var navbarheight = 0;
  var actualTop    = element.offsetTop;
  var current      = element.offsetParent;
  while (current !== null){
    actualTop += current.offsetTop;
    current = current.offsetParent;
  }
  return actualTop-navbarheight*2;
},
},
created() {
},
destroyed() {
  document.getElementById('app').removeEventListener('scroll', this.handleScroll);
}
}

</script>
