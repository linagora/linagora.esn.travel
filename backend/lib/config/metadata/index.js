module.exports = dependencies => ({
  rights: {
    padmin: 'rw',
    admin: 'rw',
    user: 'r'
  },
  configurations: {
    petalsURL: require('./petals-url')(dependencies)
  }
});
