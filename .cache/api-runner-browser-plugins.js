module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-typography/gatsby-browser.js'),
      options: {"plugins":[],"pathToConfigModule":"src/utils/typography"},
    },{
      plugin: require('../node_modules/gatsby-plugin-breadcrumb/gatsby-browser.js'),
      options: {"plugins":[],"useAutoGen":true,"exclude":["/dev-404-page/","/404/","404.html","/offline-plugin-app-shell-fallback/"],"crumbLabelUpdates":[{"pathname":"http://localhost:8000/The%20Life/levels_of_damage","crumbLabel":"Damage"}],"trailingSlashes":true},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"gatsby-starter-default","short_name":"starter","start_url":"/","background_color":"#663399","theme_color":"#663399","display":"minimal-ui","icon":"src/images/gatsby-icon.png"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
