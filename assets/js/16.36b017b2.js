(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{252:function(e,t,a){"use strict";a.r(t);var r={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},s=a(6),i=Object(s.a)(r,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.slotKey}},[a("h1",{attrs:{id:"standalone-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#standalone-api","aria-hidden":"true"}},[e._v("#")]),e._v(" Standalone API")]),e._v(" "),a("blockquote",[a("p",[e._v("Our decoupled architecture allows you to install just the Directus API, without the admin App. This is useful if you want one App to manage multiple APIs.")])]),e._v(" "),a("h2",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements","aria-hidden":"true"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),a("p",[e._v("Directus is quite flexible and can be installed on many different varieties of server/database setups. Learn more about the "),a("router-link",{attrs:{to:"/advanced/requirements.html"}},[e._v("Directus Requirements")]),e._v(".")],1),e._v(" "),a("ul",[a("li",[e._v("HTTP/Web Server")]),e._v(" "),a("li",[e._v("MySQL 5.2+\n"),a("ul",[a("li",[e._v("Database (empty or existing)")]),e._v(" "),a("li",[e._v("Database User (with access to database)")])])]),e._v(" "),a("li",[e._v("PHP 7.1+\n"),a("ul",[a("li",[a("code",[e._v("pdo")]),e._v(" + "),a("code",[e._v("mysql")])]),e._v(" "),a("li",[a("code",[e._v("curl")])]),e._v(" "),a("li",[a("code",[e._v("gd")])]),e._v(" "),a("li",[a("code",[e._v("fileinfo")])]),e._v(" "),a("li",[a("code",[e._v("mbstring")])]),e._v(" "),a("li",[a("code",[e._v("xml")]),e._v(" (Only if you are installing PHPUnit)")])])])]),e._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),a("p",[e._v("Installation will vary depending on your specific server and project goals. This guide with walk you through three of the most common installation methods.")]),e._v(" "),a("h3",{attrs:{id:"using-git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-git","aria-hidden":"true"}},[e._v("#")]),e._v(" Using Git")]),e._v(" "),a("p",[e._v("The easiest way of installing and updating the API is through Git. By using the build branch on our repo, you're assured to have the latest version pre-bundled and ready to go.")]),e._v(" "),a("p",[e._v("To install the pre-bundled build version through Git, run")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[e._v("git")]),e._v(" clone -b build https://github.com/directus/api.git\n")])])]),a("h3",{attrs:{id:"manually"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manually","aria-hidden":"true"}},[e._v("#")]),e._v(" Manually")]),e._v(" "),a("p",[e._v("If you don't have access to the command line for your server, you can download the static bundle manually as a zip. Head over to "),a("a",{attrs:{href:"https://github.com/directus/api/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("the releases page"),a("OutboundLink")],1),e._v(" to download a fresh copy of the latest version.")]),e._v(" "),a("h3",{attrs:{id:"web-server-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web-server-setup","aria-hidden":"true"}},[e._v("#")]),e._v(" Web Server Setup")]),e._v(" "),a("p",[e._v("Directus API should work on any HTTP Server, but most testing has been done on Apache 2, NGINX, and Caddy.")]),e._v(" "),a("ol",[a("li",[e._v("The root directory for Directus API should be set the "),a("code",[e._v("/public")]),e._v(" directory.")]),e._v(" "),a("li",[e._v("Make sure the directory ownership is set to user the web server is running under. Usually the user is "),a("code",[e._v("www-data")]),e._v(" "),a("ul",[a("li",[e._v("eg: "),a("code",[e._v("sudo chown -R www-data:www-data /var/www/api")])])])]),e._v(" "),a("li",[e._v("The following files/folders should have write permission:\n"),a("ul",[a("li",[a("code",[e._v("/logs")])]),e._v(" "),a("li",[a("code",[e._v("/public/uploads")]),e._v(" (or your configured upload directory)")])])])]),e._v(" "),a("h4",{attrs:{id:"specific-server-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specific-server-setup","aria-hidden":"true"}},[e._v("#")]),e._v(" Specific Server Setup")]),e._v(" "),a("p",[a("router-link",{attrs:{to:"/advanced/server-setup.html#apache"}},[e._v("Apache 2 Setup")])],1),e._v(" "),a("p",[a("router-link",{attrs:{to:"/advanced/server-setup.html#nginx"}},[e._v("NGINX Setup")])],1),e._v(" "),a("p",[a("router-link",{attrs:{to:"/advanced/server-setup.html#caddy"}},[e._v("Caddy Setup")])],1),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("For local development environments you can use WAMP, XAMP or MAMP")])]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("We appreciate any pull-requests outlining steps for new server-types. Just submit them to "),a("a",{attrs:{href:"https://github.com/directus/docs",target:"_blank",rel:"noopener noreferrer"}},[e._v("these Docs on GitHub"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),a("p",[e._v("Lastly, we need to generate a project config file and add the system boilerplate data to the database.")]),e._v(" "),a("p",[a("router-link",{attrs:{to:"/advanced/api/configuration.html#configure-with-app"}},[e._v("Configure with App")])],1),e._v(" "),a("p",[a("router-link",{attrs:{to:"/advanced/api/configuration.html#configure-with-script"}},[e._v("Configure with Script")])],1),e._v(" "),a("p",[a("router-link",{attrs:{to:"/advanced/api/configuration.html#configure-manually"}},[e._v("Configure Manually")])],1),e._v(" "),a("p",[e._v("Once you've finished configuration then you have successfully installed the Directus API and can now access secure endpoints with your Admin credentials. To learn more about the many Directus API endpoints you can browse our "),a("router-link",{attrs:{to:"/api/reference.html"}},[e._v("API Reference")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"updating"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updating","aria-hidden":"true"}},[e._v("#")]),e._v(" Updating")]),e._v(" "),a("p",[e._v("With a versionless API, nothing is ever removed or changed—only added. This means that you never have to worry about breaking your integrations when upgrading to the latest version. We've thoroughly vetted every endpoint and parameter in our new decoupled API to ensure there is no need for deprecations in the foreseeable future. You'll also notice that our API URLs don't include a version number, but you can still reference the technical API version in code to know which new features are available.")]),e._v(" "),a("h3",{attrs:{id:"using-git-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-git-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Using Git")]),e._v(" "),a("p",[e._v("If you're using a direct clone of the "),a("code",[e._v("build")]),e._v(" branch, all you need to do to update the API is run")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{attrs:{class:"token function"}},[e._v("git")]),e._v(" pull\n")])])]),a("h3",{attrs:{id:"manually-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manually-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Manually")]),e._v(" "),a("p",[e._v("Updating is basically the same as installing fresh. You can download a copy of the latest version from "),a("a",{attrs:{href:"https://github.com/directus/api/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("the releases page"),a("OutboundLink")],1),e._v(" and overwrite the files you had before. "),a("strong",[e._v("Make sure not to override any uploads within "),a("code",[e._v("/public/uploads/")]),e._v(", logs within "),a("code",[e._v("/logs")]),e._v(", or config files within "),a("code",[e._v("/config/*.php")])]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"upgrade-database"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-database","aria-hidden":"true"}},[e._v("#")]),e._v(" Upgrade Database")]),e._v(" "),a("p",[e._v("After you update the Directus API code, there may be changes in the database, such as a new field, a field with a different interface or new options.")]),e._v(" "),a("p",[e._v("You can upgrade the database using the "),a("router-link",{attrs:{to:"/guides/cli.html"}},[e._v("terminal")]),e._v(" or the "),a("router-link",{attrs:{to:"/api/reference.html#update"}},[e._v("endpoint")])],1)])},[],!1,null,null,null);i.options.__file="standalone.md";t.default=i.exports}}]);