<template>
  <div>
    <Counter name="Counter 1" :initCount="5" @emitUp="getEvent" />
    <Counter name="Counter 2" :initCount="10" @emitUp="getEvent" />
    <p class="00">{{ count }}</p>
    <!-- ↑ $store.stateの中身を「computed」プロパティで取り出す -->
    <p class="01">{{ globalCount1 }}</p>
    <p class="02">{{ globalCount2 }}</p>
  </div>
</template>

<script>
import Counter from "@/components/Counter.vue"
import { mapState } from "vuex"

// プロパティ
export default {
  components: {
    Counter
  },
  methods: {
    getEvent(){
      this.$store.commit("globalIncrement")
    },
    shouldNotThis(){
      this.$store.state.globalIncrement++;
    }
  },
  computed: {
    // ↓この記法だと個数分繰り返すのが大変になる（動くには動く）
    // count(){
    //   return this.$store.state.globalCount2
    // },

    // mapStateは下記のように記載すればOK（mapStateのimport必須）
    ...mapState(["globalCount1","globalCount2"])
  }
}
</script>