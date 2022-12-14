module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '14': 'repeat(14, minmax(0, 1fr))',
      },
      colors: {
        clifford: '#da373d',
        dark_bg: '#1a1a1a',
        third_bg:'#222222',
        prime_text: '#FFEFE2',
        second_text: '#FCF3fd',
        second_bg: '#282828',
        white_bg: '#fafafa',
        yellow_text: '#fffd01',
        black_text: '#14121E',
        gray_text: '#8b8b8b',
        btn_bg: '#2f2f2f',
        dropcolor: 'rgb(11 10 26 / 40%)'
    }
    },
  },
  plugins: [],
}
