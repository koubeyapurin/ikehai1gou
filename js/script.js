/**
 * イケ配（Ikehai）- 共通JavaScriptファイル
 * 
 * このファイルには全ページで共通して使用する関数を定義します
 */

// デバッグモード（開発時にログを表示）
const DEBUG = true;

/**
 * デバッグログを出力
 * @param {string} message - ログメッセージ
 * @param {any} data - 追加データ
 */
function debugLog(message, data = null) {
    if (DEBUG) {
        if (data) {
            console.log(`[Ikehai] ${message}`, data);
        } else {
            console.log(`[Ikehai] ${message}`);
        }
    }
}

/**
 * LocalStorageからデータを安全に取得
 * @param {string} key - キー名
 * @returns {string|null} - 取得した値
 */
function getFromStorage(key) {
    try {
        return localStorage.getItem(key);
    } catch (error) {
        console.error('LocalStorage読み込みエラー:', error);
        return null;
    }
}

/**
 * LocalStorageにデータを安全に保存
 * @param {string} key - キー名
 * @param {string} value - 保存する値
 */
function saveToStorage(key, value) {
    try {
        localStorage.setItem(key, value);
        debugLog(`保存成功: ${key} = ${value}`);
    } catch (error) {
        console.error('LocalStorage保存エラー:', error);
    }
}

/**
 * LocalStorageのデータをクリア
 */
function clearStorage() {
    try {
        localStorage.clear();
        debugLog('LocalStorageをクリアしました');
    } catch (error) {
        console.error('LocalStorageクリアエラー:', error);
    }
}

/**
 * JSONデータを非同期で取得
 * @param {string} url - JSONファイルのパス
 * @returns {Promise<any>} - パースされたJSONデータ
 */
async function fetchJSON(url) {
    try {
        debugLog(`JSONを取得中: ${url}`);
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        debugLog(`JSON取得成功: ${url}`, data);
        return data;
    } catch (error) {
        console.error(`JSONの取得に失敗しました (${url}):`, error);
        throw error;
    }
}

/**
 * 要素にフェードインアニメーションを適用
 * @param {HTMLElement} element - 対象の要素
 * @param {number} delay - 遅延時間（ミリ秒）
 */
function fadeIn(element, delay = 0) {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    
    setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    }, delay);
}

/**
 * カードグリッドにカードを順次フェードイン表示
 * @param {string} gridSelector - グリッド要素のセレクタ
 */
function animateCards(gridSelector) {
    const cards = document.querySelectorAll(`${gridSelector} .card`);
    cards.forEach((card, index) => {
        fadeIn(card, index * 100);
    });
}

/**
 * ページトップへスムーズにスクロール
 */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/**
 * 要素が画面内に入ったら実行するオブザーバー
 * @param {string} selector - 監視する要素のセレクタ
 * @param {function} callback - 実行するコールバック関数
 */
function observeIntersection(selector, callback) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                callback(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    const elements = document.querySelectorAll(selector);
    elements.forEach(element => observer.observe(element));
}

/**
 * ページ初期化時の共通処理
 */
function initializePage() {
    debugLog('ページを初期化しています...');
    
    // スムーズスクロール機能を有効化
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    debugLog('ページ初期化完了');
}

/**
 * エラーメッセージを表示
 * @param {HTMLElement} container - エラーを表示するコンテナ
 * @param {string} message - エラーメッセージ
 */
function showError(container, message) {
    container.innerHTML = `
        <div class="error">
            <p>⚠️ ${message}</p>
        </div>
    `;
}

/**
 * ローディング表示
 * @param {HTMLElement} container - ローディングを表示するコンテナ
 */
function showLoading(container) {
    container.innerHTML = '<div class="loading">読み込み中...</div>';
}

// ページ読み込み時に共通初期化処理を実行
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePage);
} else {
    initializePage();
}

// エクスポート（モジュールとして使用する場合）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        debugLog,
        getFromStorage,
        saveToStorage,
        clearStorage,
        fetchJSON,
        fadeIn,
        animateCards,
        scrollToTop,
        observeIntersection,
        showError,
        showLoading
    };
}

