// This is to control the file size in production
// https://tailwindcss.com/docs/controlling-file-size#removing-unused-css

module.exports = {
  purge: [
    './pages/**/*.js',
    './components/**/*.js'
  ]
}