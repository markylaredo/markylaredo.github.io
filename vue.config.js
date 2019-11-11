module.exports = {
    pwa: {
        name: 'My App',
        themeColor: '#29B6F6',
        msTileColor: '##039BE5',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: '#0288D1',
        workboxPluginMode: "InjectManifest",
        workboxOptions: {
            swSrc: "src/service-worker.js"
        }
    }
}