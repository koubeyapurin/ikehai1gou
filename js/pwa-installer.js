/**
 * PWAインストールボタンとプロンプト
 */

let deferredPrompt;
let installButton;

// インストールボタンを作成
function createInstallButton() {
    installButton = document.createElement('button');
    installButton.id = 'installButton';
    installButton.className = 'install-app-btn';
    installButton.innerHTML = '📱 アプリをインストール';
    installButton.style.display = 'none';
    
    installButton.addEventListener('click', async () => {
        if (!deferredPrompt) {
            return;
        }
        
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`User response to the install prompt: ${outcome}`);
        
        deferredPrompt = null;
        installButton.style.display = 'none';
    });
    
    document.body.appendChild(installButton);
}

// ページ読み込み時にボタンを作成
window.addEventListener('DOMContentLoaded', () => {
    createInstallButton();
});

// インストール可能になったとき
window.addEventListener('beforeinstallprompt', (e) => {
    console.log('📱 PWA install prompt available');
    e.preventDefault();
    deferredPrompt = e;
    
    // インストールボタンを表示
    if (installButton) {
        installButton.style.display = 'block';
    }
});

// インストール完了時
window.addEventListener('appinstalled', () => {
    console.log('✅ PWA was installed');
    deferredPrompt = null;
    if (installButton) {
        installButton.style.display = 'none';
    }
    
    // 完了メッセージを表示
    alert('🎉 イケ配アプリがインストールされました！\nホーム画面から起動できます。');
});

// Service Worker登録
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then((registration) => {
                console.log('✅ Service Worker registered:', registration.scope);
            })
            .catch((error) => {
                console.log('❌ Service Worker registration failed:', error);
            });
    });
}

