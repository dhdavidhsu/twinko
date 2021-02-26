//DOM load event
window.addEventListener("DOMContentLoaded", () => {

  const spotlight = document.querySelector('.spotlight');

  let spotlightSize = 'transparent 160px, rgba(0, 0, 0, 0.85) 200px)';

  window.addEventListener('mousemove', e => updateSpotlight(e));

  window.addEventListener('mousedown', e => {

    spotlightSize = 'transparent 130px, rgba(0, 0, 0, 0.95) 150px)';

    updateSpotlight(e);

  });

  window.addEventListener('mouseup', e => {

    spotlightSize = 'transparent 160px, rgba(0, 0, 0, 0.85) 200px)';

    updateSpotlight(e);

  });

  function updateSpotlight(e) {

    spotlight.style.backgroundImage = `radial-gradient(circle at ${e.pageX / window.innerWidth * 100}% ${e.pageY / window.innerHeight * 100}%, ${spotlightSize}`;

  }
});

// Start of the matching app
// Icon components: All SVG icons from Feather icons
let BarChart = Vue.component("bar-chart", { template: "#bar-chart" });
let WiFi = Vue.component("wi-fi", { template: "#wi-fi" });
let Battery = Vue.component("battery", { template: "#battery" });
let Search = Vue.component("search", { template: "#search" });
let Heart = Vue.component("heart", { template: "#heart" });
let Chat = Vue.component("chat", { template: "#chat" });
let User = Vue.component("user", { template: "#user" });
let Star = Vue.component("star", { template: "#star" });
let Cancel = Vue.component("cancel", { template: "#cancel" });
let Zap = Vue.component("zap", { template: "#zap" });
let ArrowLeft = Vue.component("arrow-left", { template: "#arrow-left" });

let ProfileThumb = Vue.component("profile-thumb", {
  template: "#profile-thumb",
  props: ["name", "photo", "active", "id"],
  computed: {
    thumbId: function () {
      return this.id - 1;
    }
  }
});

new Vue({
  el: "#app",

  data() {
    return {
      thumbs: [
        {
          id: 1,
          name: "Alice",
          photo: "./img/match1.png",
          active: "Active Yesterday"
        },
        {
          id: 2,
          name: "Wan'zi",
          photo:
            "./img/match2.png",
          active: "Active Last Month"
        },
        {
          id: 3,
          name: "Wendy",
          photo: "./img/match3-1.png",
          active: "Active 2 hrs ago"
        },
        {
          id: 4,
          name: "Gloria",
          photo: "./img/match4.png",
          active: "Active 4 hrs ago"
        }
      ],
      profiles: [
        {
          name: "Alice",
          bio:
            "喜歡貓狗但沒有養。如果你也喜歡動物，歡迎與我分享。喜歡聽海的聲音，覺得療愈。這裡不常用，加我IG: godtoneasia",
          match: 95,
          photo: "match1a.png"
        },
        {
          name: "Wan'zi",
          bio:
            "尼豪。我是丸子。我剛從加拿大回來，不太會講中文。讓我打一段過門給尼聽。",
          match: 87,
          photo: "match2.png"
        },
        {
          name: "Wendy",
          bio:
            "Willing to explore lucid dreaming and CBD THC. 🚬420, if you catch my drift. 🚬",
          match: 74,
          photo: "match3a.png"
        },
        {
          name: "Gloria",
          bio:
            "熱愛教學的小女子。",
          match: 92,
          photo: "match4a.png"
        }
      ],
      selectedIndex: 3,
      openProfile: false
    };
  },

  computed: {
    selectedProfile: function () {
      return this.profiles[this.selectedIndex];
    }
  },

  methods: {
    showProfile: function (index) {
      this.selectedIndex = index;
      //this.openProfile = true;

      let menuAni = gsap.from(".option", {
        duration: 0.2,
        opacity: 0,
        y: 30,
        stagger: 0.2
      });

      let tl = gsap.timeline();
      tl.to("#circ", { duration: 0.8, attr: { r: 800 }, ease: "power4.out" })
        .from(".full__photo", { duration: 0.5, y: 30, opacity: 0 }, "-=.5")
        .from(".full__match", { duration: 0.5, y: 30, opacity: 0 }, "-=.2")
        .from(".full__name", { duration: 0.5, y: 30, opacity: 0 }, "-=.2")
        .to(".back_arrow", { duration: 0.5, x: 0, opacity: 1 }, "-=.2")
        .from(".full__bio", { duration: 0.5, y: 30, opacity: 0 }, "-=.2")
        .add(menuAni, "-=1");
    },

    closeProfile: function () {
      let tl = gsap.timeline();
      if (this.openProfile) {
        tl.to(".back_arrow", { duration: 0.2, x: -10, opacity: 0 }).to(
          "#circ",
          {
            duration: 0.8,
            attr: { r: 0 },
            ease: "power2.out",
            onComplete: () => {
              this.openProfile = false;
              gsap.set(".back_arrow", { x: 0, opacity: 0 });
            }
          }
        );
      }
    }
  },

  mounted() {
    gsap.set(".back_arrow", { x: 0, opacity: 0 });
  },

  components: {
    BarChart,
    WiFi,
    Battery,
    Search,
    Heart,
    Chat,
    User,
    Star,
    Cancel,
    Zap,
    ArrowLeft
  }
});