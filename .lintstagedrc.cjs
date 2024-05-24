module.exports = {
  '*.{js,jsx}': ['prettier --write', 'eslint --cache --fix --max-warnings 0'],
  '*.{ts,tsx}': ['prettier --write', () => 'tsc --skipLibCheck --noEmit', 'eslint --cache --fix --max-warnings 0']
};
