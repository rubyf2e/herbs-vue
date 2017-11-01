  <template>
    <div class="container detail">
      <div class="bg"></div>
      <div class="box">
        <div class="detailBox" v-for="(item, key) in this.list" v-bind:class="{ left: (key+1)%2 == 0,  right: (key+1)%2 != 0}" v-on:click="tabSelect(item.id)">
          <div class="image">
            <img :src="item.src" alt="">
          </div>
          <div class="detail">
            <div class="title">
              <div class="icon">
                <img :src="$conf.PHOTO_URL+'images/svg/019-nature.svg'" alt="">
              </div>
              <h1>{{item.title}}</h1>
            </div>

            <div class="memo">
              <p v-html="item.memo">
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  export default {
    name: 'detail',
    data() {
     return {
       visible: false,
       tabSelected: 0,
       list:[
       {
        'id':0,
        'src': this.$conf.PHOTO_URL+'images/plant/1.jpg',
        'title':'雙瓣茉莉',
        'memo':'雙瓣茉莉的學名 sambac 從梵語champaka而來，原指木蘭科含笑屬的黃玉蘭（Michelia champaca）。中文中廣義的茉莉花一詞，常指木樨科素馨屬（Jasminum）常綠灌木或藤本植物的統稱。但人們平常俗稱的茉莉花即指雙瓣茉莉。',
        'slideSrc':[
        {
          'id':0,
          'src': this.$conf.PHOTO_URL+'images/plant/1-1.jpg',
        },
        {
          'id':1,
          'src': this.$conf.PHOTO_URL+'images/plant/1-2.jpg',
        },
        {
          'id':2,
          'src': this.$conf.PHOTO_URL+'images/plant/1-3.jpg',
        }
        ]
      },
      {
        'id':1,
        'src': this.$conf.PHOTO_URL+'images/plant/2.jpg',
        'title':'狹葉薰衣草',
        'memo':'狹葉薰衣草（又叫真薰衣草或英國薰衣草）原産於地中海的西部，它的出油率較高，出油品質最高。提鍊後得到的精油可以直接在皮膚上使用。主要種植地是歐洲的英國，保加利亞的高山地區，大洋洲的澳大利亞和中國大陸的甘肅清水地區少量種植。',
        'slideSrc':[
        {
          'id':0,
          'src': this.$conf.PHOTO_URL+'images/plant/2-1.jpg',
        },
        {
          'id':1,
          'src': this.$conf.PHOTO_URL+'images/plant/2-2.jpg',
        },
        {
          'id':2,
          'src': this.$conf.PHOTO_URL+'images/plant/2-3.jpg',
        }
        ]
      },
      {
        'id':2,
        'src': this.$conf.PHOTO_URL+'images/plant/3.jpg',
        'title':'羅馬洋甘菊',
        'memo':'果香菊（學名：Chamaemelum nobile），也稱為羅馬洋甘菊，為菊科果香菊屬下的一個種。其產地主要為法國，有著類似青蘋果的甜酸味香氣，在精神不佳時可成為轉換情緒的配方。',
        'slideSrc':[
        {
          'id':0,
          'src': this.$conf.PHOTO_URL+'images/plant/3-1.jpg',
        },
        {
          'id':1,
          'src': this.$conf.PHOTO_URL+'images/plant/3-2.jpg',
        },
        {
          'id':2,
          'src': this.$conf.PHOTO_URL+'images/plant/3-3.jpg',
        }
        ]
      }
      ]
    }
  },
  created() {
    this.$bus.$on('detail-modal', detailModal => {
      this.visible     = detailModal.visible;
      this.tabSelected = detailModal.tabSelected;
    });
  },
  methods: {
    tabSelect:function (id) {
      this.tabSelected = id;
      this.toggle();
    },
    toggle: function (event) {
     this.visible    = !this.visible;
     const detailModal = {
      visible:this.visible,
      tabSelected:this.tabSelected,
      list:this.list
    };
    this.$bus.$emit('detail-modal', detailModal); 
  }
},
}
</script>
