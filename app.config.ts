export default defineAppConfig({
  ui: {
    strategy: 'override',
    input: {
      slots: {
        base: 'border-1 border-[#2C3930] rounded-none',
        focused: 'border-[#2C3930] ring-1 ring-[#2C3930]'
      }
    },
    textarea: {
      slots: {
        base: 'border-1 border-[#2C3930] rounded-none',
        focused: 'border-[#2C3930] ring-1 ring-[#2C3930]'
      }
    }
  }
})