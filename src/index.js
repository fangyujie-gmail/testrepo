function main() {
  const message = 'Clean startup repo is ready for testing.';
  console.log(message);
}

if (require.main === module) {
  main();
}

module.exports = { main };
