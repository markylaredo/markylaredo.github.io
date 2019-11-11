module.exports = {
    pwa: {

        appleMobileWebAppCapable:"yes",
        manifestPath:"manifest.json",
        workboxPluginMode: "InjectManifest",
        workboxOptions: {
            swSrc: "src/service-worker.js"
        }
    }
}