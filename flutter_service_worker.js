'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "490ae4492cebd17ec2124459ef592688",
".git/config": "337eac8adc98025f7102badd85720592",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "07d28115f8416159cc224069ac588852",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8ee313a4d491add8c768c7efc4895cab",
".git/logs/refs/heads/main": "51c00f75abe47a299812e5098773dce0",
".git/logs/refs/remotes/origin/main": "6ffbf3002739cca783ea2a0ac0712bf0",
".git/objects/05/5e0effef36444e171e04537c8fdab70c733b35": "515ed9ec1b0bebe9725881da64085ff0",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/10/2c1fd55948b47d694a173ce987f388a0c38322": "77949951b5332738a301bc3de785203f",
".git/objects/15/491cc4e1b05f513e7c14a378119e25881d1aef": "2a19f5d6deeac93b3927da02a9e08431",
".git/objects/15/7b651615572ffc44ca5d0363a0f47d4f66b301": "0880bb7d1d20716a53137f83e0b6c4b5",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/23/cf232e77e2585579b84f854545981167c05c03": "f908bdfa8095577d8144105dd9ea79ee",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/d4eaab74d3545634e6cb6d5d6eb85cb8770bf3": "303fc66061c48ade8dbf37b96d648997",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2a/f3424eda95a925aa8a0001a5d06db682b84893": "a83385fe54a228fe82bfe34d676eaed7",
".git/objects/2d/f49b4e340af0855135ae1de9e8a1ca3254a239": "56de4dcb1fc1b493d0ea76ea502e4532",
".git/objects/2f/a5c339d6a61422ed85f2d301f46acc6e099a04": "e33a13d7cde15b667fa1eef71bd5b4af",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/33/2d69946dbb2a685b7f526532076863ff1d2b08": "0df820a93ae6c8d611c32fda165fa624",
".git/objects/35/31a0231d0f9ac0244b93c5ba248535d125db6b": "9b8e9193be5ca2a0350299f2ce93cb77",
".git/objects/38/d0d82af464c6d4350bb93fcccd29a50745b922": "e317e370b987b1cb8c9bc158bff740f2",
".git/objects/3a/3c63d414f498cfdc178c5d48e6c3c2786ae8c3": "35769d22cd99a8ddc358b59b3f8580bc",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3d/77db6413a516d1b4e81274b95bdd91343b7e4e": "59082900cfd89fcc64e21eb77da714f7",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/43/d4a433c83312f2a6e455a1d8493dd3ccccd598": "4aaa487d1885d974259c723b3a97e2ae",
".git/objects/44/42067948f401aea793d180660fb7b9c344916f": "284bb0442d1f3dfdc7d1968399f4a5de",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/48/069fc4c82ac734928066969cb507c70ea7fa05": "69d26686370cba50f0283fcda30a4d11",
".git/objects/4a/725128136501125bc29effc34419d152590347": "93380d1bd7f8cfbc38fc21bace8195d8",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/52/9a7eb1ea6beb4f463ac39ee93ad2018f652319": "c9cd7f6576ebe5fb58d8e297a21cbd07",
".git/objects/53/32ea6e9cd889e5b0806b929b015a2342bb5fba": "904c9237548a95e15d43ce7e969da7d9",
".git/objects/5d/e5cf05e2157aedb701108dbf61d6589aa68b2d": "52195625045a6df4660e601a3ea2d2c7",
".git/objects/60/9bd6c859003d6f63027a2711c0e7cf642226dc": "12b92b783d24768b71a9e492cb66a9d8",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/78/48a398face78a52275ad2b6e9e0ac9b11215f8": "f546276795bf0fb87f26f0e5085a9a28",
".git/objects/79/359c460b13e94945a8700227dabdc790091c0e": "73405ba2e8edc9aa7ab0b89388371a1d",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/b75d2e445f1372e329b800f4a91c4ae5be29ce": "76cbf902472761c01866570b5c0e82ad",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/a4708c94c73df91224cfa64d3613a7ab9f8bbf": "113f95b433825cfa84d6ac140f903517",
".git/objects/8e/cc9dfe10761bec33e67b856af5c7b2ef6e8d21": "5a535af4be062149c7d9f40b1ca865fd",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/97/299e8ecb4fdb957a4c7c77bc983076fd00533d": "92e6e20021bc8452ec5cbccd94258987",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a1/a9cf225ce2245a76b5a9e84ae41181bada1b44": "4c4fb856e746d60d8a80a8312b064fc9",
".git/objects/a7/99b74dabb862a30ad3ac384d71f3b880e70dfa": "e6faf39c0cec6e90bae51c787189322e",
".git/objects/ae/5543b9cf097ed2ba81b21100b5405cc34d7093": "fb58875a72a00dc866d6479a05585fdf",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/fa5acc5fdf5e911390aacb062374f7be64aec6": "970f14ef0f671d452ff20438b32bb197",
".git/objects/b2/016959f485b49c5db379aaa38fcb24b61d7c51": "f9ff17f05f449368d443fb463ffed60e",
".git/objects/b4/a417749b2c2f4e43cfcfe9f39c32e165e4ab1d": "672364c57915890cf53815587a27f3ca",
".git/objects/b6/6da8dd298643f74cf8e9546556674b47999d79": "219c365bd46a78a668505546fd12352b",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/78b27e43bd00a0a0ef068129455f778d94c760": "f14080cd1092d579354fe17ea2f120a0",
".git/objects/b7/c178e7da7223ff064e0e5518260ba52b11080e": "4968b581a16b26038a3c933630effdf8",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c2/1b60e953822384110e37e4cf0e93fb0783a7be": "ca4fdbefdb45a53b03821aa3016914ef",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c6/a49a1d4268556bcd9a2c9fa4206697ae8db4c6": "0c3ff82e6e6ea597ca919db702f8e726",
".git/objects/c8/e85196e5ee5b88a5c6144d31fca57e3c3baf74": "c238cc2275a050d188ad32ac1e93c842",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/ca/9bdc2e53515447aca0fa994c7300a785bc1265": "136390546041c03f37f6cee6d017bb1e",
".git/objects/cd/83fff24f1de5eeb4c48bd734f143db8c2318b9": "7746ff88d4504cfcffd943e493787987",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d2/4da1d68e1a1761dc3f38ed2aef60e828387abd": "c2a224bd6b783fe1cc0fd4d9dc92f6c2",
".git/objects/d3/ed423e167d836df4aae3f34640f349c9fa9d25": "6fff871f9cae279774280e7bba6fa140",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/1eb2357d0c8ab71178e3ae3d6dfd0d45c701df": "7a642b796b126c9b5d88745ac2eed6fe",
".git/objects/d5/701beab62310c11c9b93c1734781e0573ca799": "a9199b0ae2c57f51fd38c1255f164064",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/55709e5280e5e891f92caa4955ea029e99a87c": "03ae523fbb39e2c5c9ada341d87147f3",
".git/objects/d8/a541d94b2833deb1398f69d1ead233b201395f": "e91dd428b237439e9deb1b66b5d24ff9",
".git/objects/d9/7cf5efee5015df95dcca2647aadd45ab663567": "37fc8531acb2f4a8b482284ffb094942",
".git/objects/da/056498afe8cb54c606ec7c461a3f4b18dad7fa": "073ce20b6e0c962e75cf3a27cd6ed947",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e5/2bac2829c63bdec90bac3b3e50c504a4faa6c5": "84451c0cbc5b8609e93b1e91e8285efc",
".git/objects/e5/fb1ab360d0985cff1ea0e6f8db6223a03134ff": "17f84e447c08b822dae6d58928a844b4",
".git/objects/e9/ee54c84ae4330ab11830e09585523eb6b99053": "ac464cdb8be2a793c24cb1955b88c2cc",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fa/4cff505eb671d6258554f5d71e873f686a6098": "35a07c049c2e378a6b66a63bd0b61194",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "49f00b24a0c924c95f9154fd173eea50",
".git/refs/remotes/origin/main": "49f00b24a0c924c95f9154fd173eea50",
"assets/AssetManifest.bin": "f198941022d0093580806ef80757f34e",
"assets/AssetManifest.bin.json": "e0d420e04456dbc1a093daa8a0f96ab9",
"assets/AssetManifest.json": "dcfec7935d568d9d3255f7e37e2e0fc7",
"assets/assets/arrow.png": "ece6669ebd457c88554a1c097d32b48f",
"assets/assets/fonts/NotoSans-Black.ttf": "45e579d4c5952595df0d5b0dfe75d53e",
"assets/assets/fonts/NotoSans-Medium.ttf": "09dc02dbe8133545806d275a2fec2ca7",
"assets/assets/fonts/NotoSans-Regular.ttf": "c8e58befd2433eb89589dd1d23225c4e",
"assets/assets/fonts/NotoSans-SemiBold.ttf": "dfad8b708bc7b6911ed49a6f35680b10",
"assets/assets/fonts/NotoSansArabic-Black.ttf": "6729fd5454518cdaf492a2b3fe27cf88",
"assets/assets/fonts/NotoSansArabic-Medium.ttf": "21f0c6935e6ad3e4481e94b236624764",
"assets/assets/fonts/NotoSansArabic-Regular.ttf": "75527903c6a793772b02807c5343f4c8",
"assets/assets/fonts/NotoSansArabic-SemiBold.ttf": "6668035e904e215087e94774d5f47c8d",
"assets/assets/logo.png": "fc7886dcae799bd373307a6366a364aa",
"assets/FontManifest.json": "1b87a673dee12f396aae37710d0363f8",
"assets/fonts/MaterialIcons-Regular.otf": "19837a4181b4d2d07de85adb69a43824",
"assets/NOTICES": "2958f70ef994ecfb6410430f5e0d586b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "2c80acf9a00e869787642b2fa44106eb",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "8f64e98fdaaf26e2237e4573bf36f9a6",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "439e166e4fb16ee463f2d7c8648cac45",
"/": "439e166e4fb16ee463f2d7c8648cac45",
"louajet.apk": "a4899268f4d47144c3df090efdd22718",
"main.dart.js": "60abcca39f9fa7d47486035b0c5d8f62",
"manifest.json": "b884ee84e34ed163bb3dfbd84de196d6",
"version.json": "8fbe945ae419ae6a39a2ab990ad1429f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
