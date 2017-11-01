  <template>
    <div class="left-box borderbox tab-set">
      <div class="h1">
        <div class="icon">
         <img :src="this.$conf.PHOTO_URL+'images/svg/012-1-plant.svg'">
       </div>
       <h1>哪裡找得到香草</h1>
     </div>

     <div class="tab">
      <div class="tab-container">
        <div class="box drop-shadow" v-on:click="targetSelect(item.id, item.position)" v-for="item in this.list" :id="'tab-box'+item.id" v-bind:class="{ 'active': item.id === targetSelected }">
          <div class="memo-box">
            <div class="title">
             <div class="icon">
              <img :src="$conf.PHOTO_URL+'images/svg/map.svg'">
            </div>
            <div class="name">
              <span>{{item.name}}</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
</template>



<script>
export default {
  name: 'tab',
  created() {
  },
  data() {
   return {
    tabSelected: 0,
    targetSelected: 0,
    locationResults:null,
    centerPosition: {
      lat: 45.8720587,
      lng: -6.9234854
    },
    list:[
    {
      id:0,
      name:'法國',
      memo:'普羅旺斯有著很漂亮的薰衣草花海',
      position: {
        lat: 47.0720587,
        lng: 2.00
      }
    },
    {
      id:1,
      name:'英國',
      memo:'英國盛產玫瑰，可作玫瑰花茶',
      position: {
       lat:55.3178563,
       lng:-2.8872784
     }
   },
   {
    id:2,
    name:'義大利',
    memo:'地中海沿岸素來有「香草的故鄉」之稱',
    position: {
     lat: 43.4035736,
     lng: 12.29
   }
 },
 {
  id:3,
  name:'西班牙',
  memo:'西班牙也有西班牙薰衣草',
  position: {
   lat: 39.9631876,
   lng: -3.7843839
 }
},
{
  id:4,
  name:'建國花市',
  memo:'在台灣到建國花市就可以買到很多香草',
  position: {
   lat: 25.0336167,
   lng: 121.5356188
 }
},
{
  id:5,
  name:'我家',
  memo:'這是秘密',
  position: {
   lat: 30.3486579,
   lng: -137.1655373
 }
}
]
}
},
mounted: function ()  {
  this.$bus.$emit('google-marker', this.list);
  this.$bus.$emit('google-marker-position', this.centerPosition);
},
watch: {
},
methods: {
  tabSelect:function (id) {
    this.tabSelected = id;
  },
  targetSelect:function (id, position) {
    this.targetSelected = id;
    var value = {
      position:position,
      detail:this.list[id],
    }
    this.$bus.$emit('google-marker-position', value.position); 
    this.$bus.$emit('google-marker-detail', value.detail); 
  }
}



}

</script>