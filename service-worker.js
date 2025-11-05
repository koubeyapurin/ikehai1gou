/**
 * イケ配 - Service Worker
 * PWA機能を提供（オフライン対応・キャッシング）
 */

const CACHE_NAME = 'ikehai-v1.0.0';
const urlsToCache = [
  './',
  './index.html',
  './riders.html',
  './confirm.html',
  './tracking.html',
  './rating.html',
  './premium.html',
  './rank-info.html',
  './shop.html',
  './subscription.html',
  './ads.html',
  './css/style.css',
  './js/data.js',
  './js/script.js',
  './js/pwa-installer.js',
  './manifest.json'
];

// Service Worker インストール時
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[Service Worker] Caching app shell');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('[Service Worker] Install complete');
        return self.skipWaiting();
      })
  );
});

// Service Worker アクティベート時
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('[Service Worker] Activation complete');
      return self.clients.claim();
    })
  );
});

// ネットワークリクエスト時（キャッシュファースト戦略）
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // キャッシュにあればキャッシュから返す
        if (response) {
          console.log('[Service Worker] Serving from cache:', event.request.url);
          return response;
        }
        
        // キャッシュになければネットワークから取得
        console.log('[Service Worker] Fetching from network:', event.request.url);
        return fetch(event.request).then((response) => {
          // 有効なレスポンスのみキャッシュ
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // レスポンスをクローンしてキャッシュに保存
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
          
          return response;
        });
      })
      .catch(() => {
        // ネットワークエラー時のフォールバック
        return caches.match('./index.html');
      })
  );
});

// プッシュ通知（将来的な拡張用）
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'イケ配から新しいお知らせがあります！',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/icon-72x72.png',
    vibrate: [200, 100, 200],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };
  
  event.waitUntil(
    self.registration.showNotification('イケ配', options)
  );
});

// 通知クリック時
self.addEventListener('notificationclick', (event) => {
  console.log('[Service Worker] Notification click received.');
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow('/')
  );
});

