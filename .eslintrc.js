module.exports = {
  "extends": [
      "next", 
      "next/core-web-vitals",
      'plugin:import/warnings',
    ],
  "rules": {
    "no-unused-vars": "error",
    'import/order': [
      2,
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
      }
    ],
  }
}
