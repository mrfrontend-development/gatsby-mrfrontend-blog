module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/blog your pathPrefix should be "blog"
  siteTitle: 'Mr Frontend Blog', // Navigation and Site Title
  siteTitleAlt:
    'On a mission to help Junior Devs & CodeNewbies on their way to a job by mentoring', // Alternative Site title for SEO
  siteTitleShort: 'Mr Frontend', // short_name for manifest
  siteUrl: 'https://mrfrontend.org', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo:
    'https://res.cloudinary.com/raymons/image/upload/c_scale,w_427,f_auto/v1558780567/logo.png', // Used for SEO and manifest, path to your image you placed in the 'static' folder
  siteDescription:
    'On a mission to help Junior Devs & CodeNewbies on their way to a job by mentoring',
  banner: '',
  author: 'Raymon S', // Author for schemaORGJSONLD
  organization: 'Mr Frontend Community',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@frontendmr', // Twitter Username
  ogSiteName: 'Mr Frontend Community', // Facebook Site Name
  ogLanguage: 'en_US',
  googleAnalyticsID: '',

  // Manifest and Progress color
  themeColor: '#0DCA8E',
  backgroundColor: '#fff',

  // Social component
  twitter: 'https://twitter.com/frontendmr/',
  twitterHandle: '@frontendmr',
  github: 'https://github.com/mrfrontend-development',
  linkedin: '',
  slack: 'https://publicslack.com/slacks/mrfrontend/invites/new',
  patreon: 'https://patreon.com/mrfrontend',
}
