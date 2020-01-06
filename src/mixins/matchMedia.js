export default {
  mounted () {
    this.update()
    this.mobileMedia.addListener(this.update)
  },

  computed: {
    mobileMedia () {
      return window.matchMedia('(max-width: 576px)')
    }
  },

  methods: {
    update () {
      const value = this.mobileMedia && this.mobileMedia.matches

      this.$store.dispatch('update', value)
    }
  },

  beforeDestroy () {
    this.mobileMedia.removeListener(this.update)
  }
}
