/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f35689c753be2a08dabff079e3decb7c"
  },
  {
    "url": "assets/css/0.styles.5d106de5.css",
    "revision": "fa542f7002fdc91216056776501b2673"
  },
  {
    "url": "assets/img/DeleteProjectIn.c970e11d.png",
    "revision": "c970e11d2ec1eb703147ab4555fca943"
  },
  {
    "url": "assets/img/DeleteProjectOut.70d47126.png",
    "revision": "70d471266d5375d180205793d30e49d3"
  },
  {
    "url": "assets/img/DELETETeamIn.c9bdb2e1.png",
    "revision": "c9bdb2e1ae8776ead7705ce78a07d2d5"
  },
  {
    "url": "assets/img/DELETETeamOut.83a89479.png",
    "revision": "83a89479fd044901f5e9d82b3c5c0dca"
  },
  {
    "url": "assets/img/GetProjectByIdIn.229eeda9.png",
    "revision": "229eeda94519c9ea85fac52ddb717a00"
  },
  {
    "url": "assets/img/GetProjectByIdOut.cc75cf6a.png",
    "revision": "cc75cf6a0a75b6791ba2c54aa8bb43be"
  },
  {
    "url": "assets/img/GetProjects.3e721ff2.png",
    "revision": "3e721ff2e9ef2ec29989b9bc9aada022"
  },
  {
    "url": "assets/img/GetTeamByIdIn.6e93928c.png",
    "revision": "6e93928cc099bc9adb7481772326d0e9"
  },
  {
    "url": "assets/img/GetTeamByIdOut.dc5f9c8c.png",
    "revision": "dc5f9c8c1248329abcc96f51fae00379"
  },
  {
    "url": "assets/img/GetTeams.cd74aa8a.png",
    "revision": "cd74aa8a58796ca176cdbdb4a49e2309"
  },
  {
    "url": "assets/img/image_2023-11-13_10-43-22.840b69e4.png",
    "revision": "840b69e484cf67e42a8fa052eb8bec72"
  },
  {
    "url": "assets/img/InitialProjects.68685757.png",
    "revision": "686857579c235335fff810aef7798e84"
  },
  {
    "url": "assets/img/InitialTeams.f1d77982.png",
    "revision": "f1d77982fff55900877ffbd8d38afa9e"
  },
  {
    "url": "assets/img/PostProjectIn.79f26f3e.png",
    "revision": "79f26f3e52878defccd0e50c7a14cac5"
  },
  {
    "url": "assets/img/PostProjectOut.65c7abbd.png",
    "revision": "65c7abbd78f95e4d288ccb656a0ba277"
  },
  {
    "url": "assets/img/PostTeamIn.8355dd38.png",
    "revision": "8355dd383e6b2d96df219f7dd8552afd"
  },
  {
    "url": "assets/img/PostTeamOut.8d106e4c.png",
    "revision": "8d106e4c9235cce070c8292469a11b6b"
  },
  {
    "url": "assets/img/PutProjectIn.64995478.png",
    "revision": "6499547890c714b6c6cd5664d8ee8eb0"
  },
  {
    "url": "assets/img/PutProjectOut.453816db.png",
    "revision": "453816db3d94b90af17dd3039814edf5"
  },
  {
    "url": "assets/img/PUTTeamIn.e4aa79e0.png",
    "revision": "e4aa79e072406584b785f54760d17b23"
  },
  {
    "url": "assets/img/PUTTeamOut.2a423ae1.png",
    "revision": "2a423ae104422227f1833d00a553fa73"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.928e7db7.js",
    "revision": "a37f46cef4288e2a288708882f3e0ca4"
  },
  {
    "url": "assets/js/10.1f297b1e.js",
    "revision": "1c2fdb8abfdad518206f392dd0add5c8"
  },
  {
    "url": "assets/js/13.3ab671eb.js",
    "revision": "d06cafe03dac1a82b363fe7952d28713"
  },
  {
    "url": "assets/js/14.f994e471.js",
    "revision": "add1c48c8b65acb7df6344a08c8d1ef7"
  },
  {
    "url": "assets/js/15.83575e7c.js",
    "revision": "aaf4252a551538ea97e8c098d905953f"
  },
  {
    "url": "assets/js/16.768b2f65.js",
    "revision": "c948025b46d85572a39b57054de1b523"
  },
  {
    "url": "assets/js/17.cf412a8f.js",
    "revision": "0c79a576c6a94c764753f545a2da8b35"
  },
  {
    "url": "assets/js/18.17d7d4c7.js",
    "revision": "430d15fe7ba03c487296169708bd2a5d"
  },
  {
    "url": "assets/js/19.cf4c0059.js",
    "revision": "332deb36d930c65089e8f109b440f9fa"
  },
  {
    "url": "assets/js/2.bbdbe5a0.js",
    "revision": "23ba54a45ab7bd424cd040c7c9d81515"
  },
  {
    "url": "assets/js/20.6adb266d.js",
    "revision": "668a590d072d40195e4bb7b957b8f00b"
  },
  {
    "url": "assets/js/21.9840ee13.js",
    "revision": "bed5fe8a4df2df56db0d7718f2f186b2"
  },
  {
    "url": "assets/js/22.04214989.js",
    "revision": "140e2aa3b6d0def0447a4c5b6043278c"
  },
  {
    "url": "assets/js/23.d04f800f.js",
    "revision": "b71cf8d88328fb9d559b08ef10ddee91"
  },
  {
    "url": "assets/js/24.aa722cd4.js",
    "revision": "21e0249c6a6fb92ebe8d39f96a12a5bc"
  },
  {
    "url": "assets/js/25.acae8e0e.js",
    "revision": "986f4122c36fe9e8fdeafd604b2a20a3"
  },
  {
    "url": "assets/js/26.2ced7144.js",
    "revision": "9c0a5157d4cc30993acc627bcff79c74"
  },
  {
    "url": "assets/js/27.3c279cc8.js",
    "revision": "c4f1274a07572fc54eb3efc82de36ca9"
  },
  {
    "url": "assets/js/28.4878a310.js",
    "revision": "7ddc6713416d777ba77c6a9ad25633ab"
  },
  {
    "url": "assets/js/29.0b7ce706.js",
    "revision": "d6a8472b97dd154c225737656a559790"
  },
  {
    "url": "assets/js/3.b08aed10.js",
    "revision": "4cffb535be457b28ccf5bef7686dfbdd"
  },
  {
    "url": "assets/js/30.13b6b12b.js",
    "revision": "d7019f77948ade64e2c879a9617b18f5"
  },
  {
    "url": "assets/js/31.5516e23f.js",
    "revision": "4048b957d0df391aa1f58868f7358c64"
  },
  {
    "url": "assets/js/32.7b19aa82.js",
    "revision": "0f5ccf7725ce5820561f9ff77d0bdf43"
  },
  {
    "url": "assets/js/33.597a0322.js",
    "revision": "5b7dc82b9a644a411cf47f0ad4af53d6"
  },
  {
    "url": "assets/js/34.23a8eeb9.js",
    "revision": "cff1da1abbd0af82019711fd68af2134"
  },
  {
    "url": "assets/js/35.7bbeaa1a.js",
    "revision": "4bedcfea622c1db1b71bbb340f3e07d3"
  },
  {
    "url": "assets/js/36.97c2e873.js",
    "revision": "5cc2850eb6c9619b544d372115664506"
  },
  {
    "url": "assets/js/37.a598c56a.js",
    "revision": "2ffd24d019669e88e177053cf5fb8be9"
  },
  {
    "url": "assets/js/38.17f4f0b2.js",
    "revision": "5a4b06183bd1ecabc15a34f04eaabfd0"
  },
  {
    "url": "assets/js/39.6cbc2ef0.js",
    "revision": "9b1ed5ccde90a9bace9571434ef81180"
  },
  {
    "url": "assets/js/4.0fc3e610.js",
    "revision": "6b9c642201d6f325f32da2b76f085b4a"
  },
  {
    "url": "assets/js/41.5167c572.js",
    "revision": "fc09462c43d81c031e87c84c4693dfbf"
  },
  {
    "url": "assets/js/5.0d80563b.js",
    "revision": "ce7ffa985edff0353f9b62e1d1872eb8"
  },
  {
    "url": "assets/js/6.660206e7.js",
    "revision": "1f9cdb568016b994f9365de84fe14f18"
  },
  {
    "url": "assets/js/7.63db4d37.js",
    "revision": "5f5e64a8e1f52fb843edfa00d74fec24"
  },
  {
    "url": "assets/js/8.7740aec4.js",
    "revision": "e3e813254dbe4118374c3a53763bc1fd"
  },
  {
    "url": "assets/js/9.0d5a0b6a.js",
    "revision": "7668ef4476f618f98a408ed226472642"
  },
  {
    "url": "assets/js/app.6c326e70.js",
    "revision": "18d474da2eb52fb0283b8ad80f880deb"
  },
  {
    "url": "assets/js/vendors~docsearch.a7214ad1.js",
    "revision": "4fdfc9c801456fc8bade32dc84c522d5"
  },
  {
    "url": "conclusion/index.html",
    "revision": "ff9e00fda7cae6ebdc83e7e0564aeeb8"
  },
  {
    "url": "design/index.html",
    "revision": "09d8d03150966248fe3bf721532da00f"
  },
  {
    "url": "index.html",
    "revision": "690a6bd312fcc1aef3f9bf22f8f3834c"
  },
  {
    "url": "intro/index.html",
    "revision": "61a08e32d0d70b17cc3e22a366b603be"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "677b8438a3efe192e6cdd26ddc0c5dc0"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "f4d8bcbaa92541d67a501e59b4b442fc"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "74451e2f89811c1e3aa95a630c29a459"
  },
  {
    "url": "software/index.html",
    "revision": "5bafc4155d74bfab7df47b87393423b9"
  },
  {
    "url": "test/index.html",
    "revision": "791e00df60705a6ff81c19c183cb94a0"
  },
  {
    "url": "use cases/index.html",
    "revision": "56c1432a4c283f765940486ca719636e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
