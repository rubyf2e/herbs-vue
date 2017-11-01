  <template>
    <div class="container slide">
     <swiper :options="swiperOption" ref="sliderSwiper">
      <swiper-slide v-for="(slide, n) in list" :key="'slide'+n" :index="slide.id"  :data-now="slide.id"  
      v-bind:style="{'background-image': 'url(' + slide.src + ')'}">
    </swiper-slide> 
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>

  <div class="mask">
   <object id="words" :data="this.$conf.PHOTO_URL+'images/title.svg'" type="image/svg+xml">
   </object>
 </div>

</div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import {TweenMax, Power2, TimelineLite} from "gsap";

export default {
 name: 'plant',
 data() {
  return {
    targetSvg:null,
    target:null,
    targetPath:null,
    changeTarget: -1,
    count:0,
    tabSelected:1,
    visible: false,
    swiperOption: {
      pagination: '.swiper-pagination',
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      paginationClickable: true,
      spaceBetween: 0,
      centeredSlides: true,
      autoplay: 4000,
      autoplayDisableOnInteraction: false
    },
    list:[
    {
      'id':1,
      'src': this.$conf.PHOTO_URL+'images/slide/1.jpg',
    },
    {
      'id':2,
      'src': this.$conf.PHOTO_URL+'images/slide/2.jpg',
    },
    {
      'id':3,
      'src': this.$conf.PHOTO_URL+'images/slide/3.jpg',
    }
    ]
  }
},
created() {

},
mounted() {
  const self = this;
  setTimeout(() => {
   self.target     =  document.getElementById("words").contentDocument;
   self.targetSvg  =  self.target.querySelector("svg");
   self.targetPath =  self.targetSvg.querySelectorAll("path");
   self.words();
 }, 100)
},
computed: {
  swiper() {
    return this.$refs.sliderSwiper.swiper
  }
},
methods: {
  words(){
   for (var i = 0; i < this.targetPath.length; i++) {
    this.targetPath[i].setAttribute('stroke', '#FFFFFF');
  }

  var tmax_optionsGlobal = {
    repeat: -1,
    repeatDelay: 1,
    yoyo: true
  };

  var tl = new TimelineMax(tmax_optionsGlobal),
  path        = 'svg *',
  stagger_val = 0.08,
  duration    = 1;

  $.each(this.targetPath, function(i, el) {
    tl.set($(this), {
      x: '+=' + getRandom(-500, 500),
      y: '+=' + getRandom(-500, 500),
      rotation: '+=' + getRandom(-720, 720),
      scale: 0,
      opacity: 0
    });
  });

  var stagger_opts_to = {
    x: 0,
    y: 0,
    opacity: 1,
    scale: 1,
    rotation: 0,
    ease: Power4.easeInOut
  };

  tl.staggerTo(this.targetPath, duration, stagger_opts_to, stagger_val);

  var $svg = $(this.targetSvg);
  $svg.hover(
    function() {
      tl.timeScale(0.3);
    },
    function() {
      tl.timeScale(1.5);
    });

  function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }
}
}
}
</script>