/**
 * イケ配（Ikehai）- データファイル
 * 
 * メニューと配達員のデータを定義
 * fetch()を使わずにローカルで動作させるため、JavaScriptオブジェクトとして定義
 */

// メニューデータ
const MENU_DATA = [
  // 洋食
  {
    id: 1,
    name: "特製ハンバーガーセット",
    description: "ジューシーなパティと新鮮野菜のベストマッチ。ポテトとドリンク付き。",
    price: 1280,
    category: "洋食",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
    isPopular: true
  },
  {
    id: 2,
    name: "マルゲリータピザ",
    description: "イタリア産モッツァレラと完熟トマトの本格ピザ。",
    price: 1680,
    category: "洋食",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop",
    isPopular: true
  },
  {
    id: 5,
    name: "パスタランチ",
    description: "カルボナーラとペペロンチーノから選べる。サラダ付き。",
    price: 1380,
    category: "洋食",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop",
    isPopular: false
  },
  {
    id: 13,
    name: "シーザーサラダセット",
    description: "新鮮野菜たっぷり。グリルチキンとパンが付きます。",
    price: 980,
    category: "洋食",
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop",
    isPopular: false
  },
  // 和食
  {
    id: 3,
    name: "海鮮丼セット",
    description: "新鮮なマグロ、サーモン、イカがたっぷり。味噌汁付き。",
    price: 1980,
    category: "和食",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
    isPopular: true
  },
  {
    id: 8,
    name: "ステーキ丼",
    description: "柔らかいサーロインステーキがたっぷり。特製ソースが絶品。",
    price: 2280,
    category: "和食",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
    isPopular: false
  },
  {
    id: 9,
    name: "天ぷら定食",
    description: "サクサク海老天と季節の野菜天。ご飯・味噌汁・漬物付き。",
    price: 1580,
    category: "和食",
    image: "https://images.unsplash.com/photo-1600803907087-f56d462fd26b?w=400&h=300&fit=crop",
    isPopular: false
  },
  {
    id: 10,
    name: "親子丼セット",
    description: "ふわとろ卵と柔らかい鶏肉。味噌汁・小鉢付き。",
    price: 980,
    category: "和食",
    image: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=400&h=300&fit=crop",
    isPopular: false
  },
  // 中華
  {
    id: 4,
    name: "ラーメン定食",
    description: "濃厚豚骨スープの本格ラーメン。チャーシュー3枚入り。",
    price: 1180,
    category: "中華",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop",
    isPopular: true
  },
  {
    id: 11,
    name: "麻婆豆腐セット",
    description: "本格四川風麻婆豆腐。ご飯・スープ・ザーサイ付き。",
    price: 1280,
    category: "中華",
    image: "https://images.unsplash.com/photo-1626777552544-5c5ea72633f8?w=400&h=300&fit=crop",
    isPopular: false
  },
  {
    id: 12,
    name: "餃子定食",
    description: "焼き餃子8個とご飯のセット。スープと小鉢付き。",
    price: 880,
    category: "中華",
    image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&h=300&fit=crop",
    isPopular: false
  },
  // エスニック
  {
    id: 6,
    name: "タイ風グリーンカレー",
    description: "ココナッツミルクのまろやかなカレー。ジャスミンライス付き。",
    price: 1480,
    category: "エスニック",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&h=300&fit=crop",
    isPopular: false
  },
  {
    id: 14,
    name: "ガパオライス",
    description: "タイの定番料理。鶏肉のバジル炒めご飯と目玉焼き。",
    price: 1180,
    category: "エスニック",
    image: "https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=400&h=300&fit=crop",
    isPopular: true
  },
  // デザート
  {
    id: 7,
    name: "フレンチトーストセット",
    description: "ふわふわ食感の絶品フレンチトースト。フルーツとメープルシロップ付き。",
    price: 980,
    category: "デザート",
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&h=300&fit=crop",
    isPopular: false
  },
  {
    id: 15,
    name: "パンケーキタワー",
    description: "ふわふわパンケーキ3段重ね。生クリームとベリーたっぷり。",
    price: 1280,
    category: "デザート",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop",
    isPopular: true
  }
];

// 配達員データ
const RIDERS_DATA = [
  {
    id: 1,
    name: "Kento",
    type: "爽やか系",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    rating: 4.9,
    deliveries: 328,
    quote: "笑顔でお届けします！いつも元気いっぱいです😊",
    // 感情価値を高める追加情報
    personality: "明るく話しやすい性格で、いつも笑顔を絶やしません",
    hobbies: ["サーフィン", "カフェ巡り", "映画鑑賞"],
    recommendFor: "元気が欲しい方・癒されたい方",
    nominationFee: 350, // 指名料
    isPopular: true, // 人気配達員バッジ
    // ランク制度
    rank: "gold", // bronze, silver, gold, platinum
    rankName: "ゴールド",
    rankBenefits: ["優先対応", "メッセージ特典", "限定グッズ"],
    greeting: "今日も素敵な一日にしましょう！",
    reviews: [
      { user: "A子さん", rating: 5, comment: "いつも元気をもらってます！話していて楽しいです💕" },
      { user: "Mさん", rating: 5, comment: "丁寧で爽やかな対応に毎回癒されます" },
      { user: "さくらさん", rating: 5, comment: "笑顔が素敵で、疲れた日も元気になれます！" }
    ]
  },
  {
    id: 2,
    name: "Ryu",
    type: "クール系",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    rating: 4.8,
    deliveries: 412,
    quote: "確実に、スピーディーに。プロの仕事をお見せします。",
    personality: "落ち着いていて信頼感があります。無駄のない動きがプロフェッショナル",
    hobbies: ["筋トレ", "読書", "バイク"],
    recommendFor: "クールな雰囲気が好きな方・プロ意識を重視する方",
    nominationFee: 400,
    isPopular: true,
    rank: "silver",
    rankName: "シルバー",
    rankBenefits: ["メッセージ返信", "配達優先権"],
    greeting: "お任せください。",
    reviews: [
      { user: "Y美さん", rating: 5, comment: "クールだけど優しい。ギャップにやられました❤️" },
      { user: "K子さん", rating: 5, comment: "仕事が丁寧で安心感があります" },
      { user: "Rさん", rating: 4, comment: "無駄のない動きがカッコいい！" }
    ]
  },
  {
    id: 3,
    name: "Haruto",
    type: "ナチュラル系",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    rating: 5.0,
    deliveries: 267,
    quote: "丁寧な配達を心がけています。料理も心も温かいままお届け！",
    personality: "優しく穏やかな雰囲気。気配りが細やかで安心できます",
    hobbies: ["料理", "ガーデニング", "写真撮影"],
    recommendFor: "癒し重視の方・丁寧な対応を求める方",
    nominationFee: 450,
    isPopular: true,
    rank: "platinum",
    rankName: "プラチナ",
    rankBenefits: ["24時間対応", "即レス保証", "VIP待遇", "限定イベント招待"],
    greeting: "心を込めてお届けします。",
    reviews: [
      { user: "H香さん", rating: 5, comment: "とにかく優しい！話し方も丁寧で癒されます" },
      { user: "Nさん", rating: 5, comment: "料理の扱いが丁寧で感動しました✨" },
      { user: "M美さん", rating: 5, comment: "穏やかな笑顔に毎回ときめいてます💕" }
    ]
  },
  {
    id: 4,
    name: "Kaito",
    type: "スポーツ系",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    rating: 4.7,
    deliveries: 521,
    quote: "スピード配達はお任せください！アクティブがモットーです🚴‍♂️",
    personality: "エネルギッシュで行動的。いつも前向きな姿勢が魅力",
    hobbies: ["ランニング", "サッカー", "アウトドア"],
    recommendFor: "スピード重視の方・元気な雰囲気が好きな方",
    nominationFee: 300,
    isPopular: false,
    rank: "bronze",
    rankName: "ブロンズ",
    rankBenefits: ["基本対応", "丁寧な配達"],
    greeting: "全力でお届けします！",
    reviews: [
      { user: "A美さん", rating: 5, comment: "とにかく早い！でも雑じゃなくて丁寧です" },
      { user: "Sさん", rating: 5, comment: "スポーツマンらしい爽やかさがいい💕" },
      { user: "K子さん", rating: 4, comment: "元気もらえます！ありがとうございます" }
    ]
  },
  {
    id: 5,
    name: "Sota",
    type: "優しい系",
    image: "https://images.unsplash.com/photo-1492447166138-50c3889fccb1?w=400&h=400&fit=crop",
    rating: 4.9,
    deliveries: 298,
    quote: "お客様の笑顔が僕の原動力です。心を込めてお届けします💕",
    personality: "とにかく優しい。お客様を第一に考える思いやりの塊",
    hobbies: ["音楽鑑賞", "カフェ巡り", "動物と遊ぶ"],
    recommendFor: "優しさ重視の方・心温まる接客を求める方",
    nominationFee: 400,
    isPopular: true,
    rank: "gold",
    rankName: "ゴールド",
    rankBenefits: ["優先対応", "メッセージ特典", "限定グッズ"],
    greeting: "あなたの笑顔が見たいです。",
    reviews: [
      { user: "R子さん", rating: 5, comment: "優しすぎて泣けてきます😭本当に癒されます" },
      { user: "Yさん", rating: 5, comment: "思いやりが伝わってきて、毎回指名してます💕" },
      { user: "M香さん", rating: 5, comment: "こんなに優しい人いるんだ…って感動しました" }
    ]
  },
  {
    id: 6,
    name: "Yuto",
    type: "アーティスト系",
    image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=400&h=400&fit=crop",
    rating: 4.8,
    deliveries: 189,
    quote: "配達も芸術。美しいサービスを提供します✨",
    personality: "感性豊かで独特の雰囲気。洗練されたセンスを持っています",
    hobbies: ["絵画", "音楽制作", "ファッション"],
    recommendFor: "おしゃれな雰囲気が好きな方・個性を楽しみたい方",
    nominationFee: 350,
    isPopular: false,
    rank: "silver",
    rankName: "シルバー",
    rankBenefits: ["メッセージ返信", "配達優先権"],
    greeting: "あなただけの特別な時間を。",
    reviews: [
      { user: "Eさん", rating: 5, comment: "おしゃれで話題も面白い！毎回楽しみです✨" },
      { user: "K美さん", rating: 5, comment: "独特の雰囲気が素敵。センスがいいです" },
      { user: "Aさん", rating: 4, comment: "アーティストな雰囲気が好き💕" }
    ]
  },
  {
    id: 7,
    name: "Daiki",
    type: "お兄さん系",
    image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=400&h=400&fit=crop",
    rating: 4.9,
    deliveries: 445,
    quote: "頼れるお兄さんとして、いつでもサポートします！",
    personality: "頼りがいがあって包容力抜群。困った時に助けてくれる存在",
    hobbies: ["料理", "DIY", "ドライブ"],
    recommendFor: "頼れる存在が欲しい方・安心感を求める方",
    nominationFee: 400,
    isPopular: true,
    rank: "gold",
    rankName: "ゴールド",
    rankBenefits: ["優先対応", "メッセージ特典", "限定グッズ"],
    greeting: "何かあったら遠慮なく言ってくださいね。",
    reviews: [
      { user: "M香さん", rating: 5, comment: "本当に頼りになります！お兄ちゃんみたいで安心💕" },
      { user: "Y子さん", rating: 5, comment: "包容力がすごい。癒されます" },
      { user: "K美さん", rating: 5, comment: "困った時に助けてくれて感謝！" }
    ]
  },
  {
    id: 8,
    name: "Takumi",
    type: "職人系",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop",
    rating: 4.7,
    deliveries: 389,
    quote: "丁寧な仕事で、確実にお届けします。",
    personality: "真面目で几帳面。仕事に対する誇りを持っています",
    hobbies: ["コーヒー", "木工", "登山"],
    recommendFor: "確実性を重視する方・職人気質が好きな方",
    nominationFee: 350,
    isPopular: false,
    rank: "silver",
    rankName: "シルバー",
    rankBenefits: ["メッセージ返信", "配達優先権"],
    greeting: "責任を持ってお届けします。",
    reviews: [
      { user: "R子さん", rating: 5, comment: "仕事が丁寧！プロ意識を感じます" },
      { user: "T美さん", rating: 4, comment: "真面目な姿勢が好感持てます" },
      { user: "H子さん", rating: 5, comment: "確実に届けてくれる安心感✨" }
    ]
  },
  {
    id: 9,
    name: "Rei",
    type: "知的系",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    rating: 4.8,
    deliveries: 256,
    quote: "効率的かつスマートに配達します。",
    personality: "知的で落ち着いた雰囲気。会話が楽しい文系男子",
    hobbies: ["読書", "映画鑑賞", "カフェ巡り"],
    recommendFor: "知的な会話が好きな方・落ち着いた雰囲気が好きな方",
    nominationFee: 350,
    isPopular: false,
    rank: "silver",
    rankName: "シルバー",
    rankBenefits: ["メッセージ返信", "配達優先権"],
    greeting: "良い一日になりますように。",
    reviews: [
      { user: "A子さん", rating: 5, comment: "話が面白い！頭の良さを感じます" },
      { user: "M美さん", rating: 5, comment: "知的な雰囲気が素敵です💕" },
      { user: "S子さん", rating: 4, comment: "落ち着いていて安心できます" }
    ]
  },
  {
    id: 10,
    name: "Shun",
    type: "元気系",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    rating: 4.9,
    deliveries: 378,
    quote: "元気いっぱい！笑顔でお届けします😊",
    personality: "明るくてポジティブ。周りを元気にする太陽のような存在",
    hobbies: ["バスケ", "カラオケ", "旅行"],
    recommendFor: "元気をもらいたい方・明るい雰囲気が好きな方",
    nominationFee: 400,
    isPopular: true,
    rank: "gold",
    rankName: "ゴールド",
    rankBenefits: ["優先対応", "メッセージ特典", "限定グッズ"],
    greeting: "今日も最高の一日にしましょう！",
    reviews: [
      { user: "Y美さん", rating: 5, comment: "元気もらえます！笑顔が最高💕" },
      { user: "K子さん", rating: 5, comment: "ポジティブで明るくて好き！" },
      { user: "R子さん", rating: 5, comment: "疲れた日に元気をもらえます✨" }
    ]
  },
  {
    id: 11,
    name: "Yuuki",
    type: "王子様系",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    rating: 5.0,
    deliveries: 234,
    quote: "あなただけの特別な配達をお届けします。",
    personality: "エレガントで紳士的。まるで王子様のような振る舞い",
    hobbies: ["ワイン", "クラシック音楽", "乗馬"],
    recommendFor: "特別感を味わいたい方・エレガントな雰囲気が好きな方",
    nominationFee: 600,
    isPopular: true,
    rank: "platinum",
    rankName: "プラチナ",
    rankBenefits: ["24時間対応", "即レス保証", "VIP待遇", "限定イベント招待", "写真撮影特典"],
    greeting: "至高のひとときをあなたに。",
    reviews: [
      { user: "M子さん", rating: 5, comment: "まさに王子様！特別な気分になれます💕" },
      { user: "A美さん", rating: 5, comment: "エレガントで紳士的✨最高です" },
      { user: "S香さん", rating: 5, comment: "夢のような時間をありがとう！" }
    ]
  },
  {
    id: 12,
    name: "Hayato",
    type: "ワイルド系",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    rating: 4.6,
    deliveries: 312,
    quote: "ワイルドに、でも丁寧にお届けします🔥",
    personality: "男らしくてワイルド。力強さの中に優しさがあります",
    hobbies: ["バイク", "キャンプ", "格闘技"],
    recommendFor: "ワイルドな雰囲気が好きな方・男らしさを求める方",
    nominationFee: 300,
    isPopular: false,
    rank: "bronze",
    rankName: "ブロンズ",
    rankBenefits: ["基本対応", "丁寧な配達"],
    greeting: "任せてください！",
    reviews: [
      { user: "R美さん", rating: 5, comment: "ワイルドでカッコいい！でも優しい💕" },
      { user: "K子さん", rating: 4, comment: "力強さに惹かれます" },
      { user: "Y子さん", rating: 5, comment: "男らしさが素敵です✨" }
    ]
  }
];

/**
 * メニューデータを取得
 * @returns {Array} メニューデータの配列
 */
function getMenuData() {
  return MENU_DATA;
}

/**
 * 配達員データを取得
 * @returns {Array} 配達員データの配列
 */
function getRidersData() {
  return RIDERS_DATA;
}

/**
 * IDからメニューを検索
 * @param {number} id - メニューID
 * @returns {Object|null} メニューオブジェクト
 */
function getMenuById(id) {
  return MENU_DATA.find(item => item.id === id) || null;
}

/**
 * IDから配達員を検索
 * @param {number} id - 配達員ID
 * @returns {Object|null} 配達員オブジェクト
 */
function getRiderById(id) {
  return RIDERS_DATA.find(rider => rider.id === id) || null;
}

// 広告データ
const ADS_DATA = {
  // バナー広告（トップページ）
  banners: [
    {
      id: 1,
      type: 'restaurant',
      title: '新規オープン！イタリアン「トラットリア・ベッラ」',
      description: '本場ナポリピザが20%オフ！今だけ限定キャンペーン🍕',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=300&fit=crop',
      link: '#',
      sponsor: 'トラットリア・ベッラ',
      fee: 50000 // 月額広告料（円）
    },
    {
      id: 2,
      type: 'brand',
      title: '美容ブランド「グロウビューティー」タイアップ',
      description: 'イケ配限定！スキンケアセットが初回50%オフ✨',
      image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&h=300&fit=crop',
      link: '#',
      sponsor: 'グロウビューティー',
      fee: 80000
    },
    {
      id: 3,
      type: 'event',
      title: 'イケ配ファンミーティング開催決定！',
      description: '人気配達員と会える特別イベント。チケット販売中💕',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=300&fit=crop',
      link: '#',
      sponsor: 'イケ配公式',
      fee: 0 // 自社イベント
    }
  ],
  
  // スポンサードメニュー
  sponsoredMenus: [2, 3, 14], // 広告料を払っているメニューID
  
  // スポンサード配達員（ブランドアンバサダー）
  sponsoredRiders: [
    {
      riderId: 11, // Yuuki
      brandName: 'ラグジュアリーウォッチ「クロノス」',
      brandMessage: 'Yuukiさん愛用の時計ブランド',
      brandImage: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&h=200&fit=crop',
      fee: 100000 // 月額スポンサー料
    },
    {
      riderId: 1, // Kento
      brandName: 'スポーツウェア「アクティブライフ」',
      brandMessage: 'Kentoさん着用のスポーツウェア',
      brandImage: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400&h=200&fit=crop',
      fee: 60000
    }
  ]
};

/**
 * 広告データを取得
 * @returns {Object} 広告データ
 */
function getAdsData() {
  return ADS_DATA;
}

/**
 * バナー広告をランダムに取得
 * @param {number} count - 取得する数
 * @returns {Array} バナー広告の配列
 */
function getRandomBanners(count = 1) {
  const banners = [...ADS_DATA.banners];
  const shuffled = banners.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

/**
 * スポンサード配達員情報を取得
 * @param {number} riderId - 配達員ID
 * @returns {Object|null} スポンサー情報
 */
function getSponsorInfo(riderId) {
  return ADS_DATA.sponsoredRiders.find(s => s.riderId === riderId) || null;
}

/**
 * メニューがスポンサードかチェック
 * @param {number} menuId - メニューID
 * @returns {boolean}
 */
function isSponsored(menuId) {
  return ADS_DATA.sponsoredMenus.includes(menuId);
}

// 物販・イベントデータ
const MERCHANDISE_DATA = {
  // グッズ
  goods: [
    {
      id: 1,
      name: 'イケ配オリジナルTシャツ',
      description: 'ロゴ入りの高品質コットンTシャツ。全3色展開（ホワイト・ベージュ・ピンク）。',
      price: 2980,
      category: 'apparel',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
      stock: 50,
      riderId: null
    },
    {
      id: 2,
      name: 'Kentoモデル キャップ',
      description: 'Kentoさん愛用のサーフキャップ。爽やかなデザインで日常使いに最適。',
      price: 3980,
      category: 'apparel',
      image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop',
      stock: 30,
      riderId: 1
    },
    {
      id: 3,
      name: 'Yuuki王子様トートバッグ',
      description: 'エレガントなデザインのキャンバストートバッグ。A4サイズ対応。',
      price: 4980,
      category: 'goods',
      image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=400&fit=crop',
      stock: 25,
      riderId: 11
    },
    {
      id: 4,
      name: 'イケ配ステッカーセット',
      description: '配達員イラスト入りステッカー12枚セット。スマホやPCに貼れる。',
      price: 980,
      category: 'goods',
      image: 'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=400&h=400&fit=crop',
      stock: 100,
      riderId: null
    },
    {
      id: 5,
      name: 'Harutaオリジナルエコバッグ',
      description: 'Harutaさんがデザインしたナチュラル系エコバッグ。環境にも優しい。',
      price: 2480,
      category: 'goods',
      image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=400&fit=crop',
      stock: 40,
      riderId: 3
    }
  ],
  
  // 写真集・カレンダー
  publications: [
    {
      id: 6,
      name: 'イケ配 2025公式カレンダー',
      description: '12人の配達員が毎月登場！壁掛けタイプ（A3サイズ）。未公開写真満載。',
      price: 2980,
      category: 'publication',
      image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400&h=400&fit=crop',
      stock: 200,
      riderId: null,
      isPopular: true
    },
    {
      id: 7,
      name: 'Yuuki写真集「至高の時間」',
      description: 'プラチナランクYuukiさんの初写真集。限定500部。サイン入り特典あり。',
      price: 3980,
      category: 'publication',
      image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=400&fit=crop',
      stock: 500,
      riderId: 11,
      isLimited: true,
      isPopular: true
    },
    {
      id: 8,
      name: 'Kento写真集「笑顔の理由」',
      description: 'Kentoさんの爽やかな笑顔が詰まった写真集。サーフィンシーンも収録。',
      price: 3480,
      category: 'publication',
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=400&fit=crop',
      stock: 300,
      riderId: 1,
      isPopular: true
    }
  ],
  
  // イベントチケット
  events: [
    {
      id: 9,
      name: 'イケ配ファンミーティング 2025',
      description: '人気配達員6名とのトーク＆撮影会。東京・渋谷開催。',
      price: 8000,
      category: 'event',
      date: '2025年3月15日（土）',
      time: '14:00〜17:00',
      location: '渋谷ヒカリエホール',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=400&fit=crop',
      stock: 100,
      riderId: null,
      isPopular: true
    },
    {
      id: 10,
      name: 'Yuuki王子様とのアフタヌーンティー',
      description: 'プラチナ会員限定！Yuukiさんと優雅なティータイム。少人数制（各回10名）。',
      price: 15000,
      category: 'event',
      date: '2025年4月20日（日）',
      time: '15:00〜17:00',
      location: 'ホテルラウンジ（都内）',
      image: 'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?w=400&h=400&fit=crop',
      stock: 20,
      riderId: 11,
      isLimited: true,
      memberOnly: true
    },
    {
      id: 11,
      name: 'Kentoとサーフィン体験',
      description: 'Kentoさんと一緒に湘南でサーフィン！初心者歓迎。',
      price: 12000,
      category: 'event',
      date: '2025年5月10日（土）',
      time: '9:00〜15:00',
      location: '湘南海岸（鎌倉）',
      image: 'https://images.unsplash.com/photo-1502933691298-84fc14542831?w=400&h=400&fit=crop',
      stock: 15,
      riderId: 1
    }
  ]
};

/**
 * 物販データを取得
 * @returns {Object} 物販データ
 */
function getMerchandiseData() {
  return MERCHANDISE_DATA;
}

/**
 * 全商品を取得
 * @returns {Array} 全商品の配列
 */
function getAllProducts() {
  return [
    ...MERCHANDISE_DATA.goods,
    ...MERCHANDISE_DATA.publications,
    ...MERCHANDISE_DATA.events
  ];
}

/**
 * カテゴリ別に商品を取得
 * @param {string} category - カテゴリ名
 * @returns {Array} 商品の配列
 */
function getProductsByCategory(category) {
  const allProducts = getAllProducts();
  return category === 'all' ? allProducts : allProducts.filter(p => p.category === category);
}

/**
 * 配達員別に商品を取得
 * @param {number} riderId - 配達員ID
 * @returns {Array} 商品の配列
 */
function getProductsByRider(riderId) {
  return getAllProducts().filter(p => p.riderId === riderId);
}

// サブスクリプション定期便データ
const SUBSCRIPTION_DATA = {
  plans: [
    {
      id: 1,
      name: 'ベーシックボックス',
      nameEn: 'Basic Box',
      price: 2980,
      cycle: '月1回',
      description: '毎月イケ配オリジナルグッズが届く！推し活入門に最適。',
      features: [
        '月1回のお届け（毎月15日）',
        'オリジナルグッズ2〜3点',
        '限定ステッカー・ポストカード',
        '配達員からの手書きメッセージカード',
        '次月の新商品先行予約権'
      ],
      contents: [
        'オリジナルグッズ（ランダム2〜3点）',
        '限定ポストカード',
        'メッセージカード',
        'ステッカー'
      ],
      savingsPerYear: 5760,
      image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=400&h=300&fit=crop',
      color: '#ffc1e3',
      popular: false
    },
    {
      id: 2,
      name: 'プレミアムボックス',
      nameEn: 'Premium Box',
      price: 4980,
      cycle: '月1回',
      description: '限定グッズ＋写真が入った豪華版。推しとの時間をもっと濃密に。',
      features: [
        '月1回のお届け（毎月15日）',
        'プレミアムグッズ3〜5点',
        '未公開写真（L判サイズ）',
        '配達員からの直筆メッセージ',
        '限定イベント優先予約権',
        'オンライン交流会参加権（月1回）'
      ],
      contents: [
        'プレミアムグッズ（3〜5点）',
        '未公開写真（L判）',
        '直筆メッセージカード',
        '限定アクセサリー',
        'イベント優先券'
      ],
      savingsPerYear: 11760,
      image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=300&fit=crop',
      color: '#ffb74d',
      popular: true
    },
    {
      id: 3,
      name: 'ラグジュアリーボックス',
      nameEn: 'Luxury Box',
      price: 9980,
      cycle: '月1回',
      description: '最高級の推し活体験。配達員とのプライベート交流＋限定アイテム満載。',
      features: [
        '月1回のお届け（毎月15日）',
        'ラグジュアリーグッズ5〜8点',
        '未公開写真集（A5サイズ・月刊）',
        '配達員からのビデオメッセージ',
        '限定イベント無料参加権（年2回）',
        'プライベートオンライン交流会（月1回）',
        '誕生日サプライズギフト',
        'グッズリクエスト権'
      ],
      contents: [
        'ラグジュアリーグッズ（5〜8点）',
        '未公開写真集（A5・月刊）',
        'ビデオメッセージ',
        'プレミアムアクセサリー',
        '限定アパレル',
        'イベント無料券'
      ],
      savingsPerYear: 23760,
      image: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=400&h=300&fit=crop',
      color: '#9c27b0',
      popular: false
    }
  ],
  
  // フード定期便（別ライン）
  foodSubscription: {
    id: 4,
    name: 'イケ配グルメ便',
    nameEn: 'Gourmet Delivery',
    price: 3980,
    cycle: '月2回',
    description: '人気レストランの料理を月2回お届け。配達員指名可能。',
    features: [
      '月2回のお届け（毎月1日・15日）',
      '人気レストランの厳選メニュー',
      '配達員の指名可能',
      '通常配達料金より20%オフ',
      'サプライズメニュー付き'
    ],
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop',
    color: '#4caf50'
  }
};

/**
 * サブスクリプションデータを取得
 * @returns {Object} サブスクリプションデータ
 */
function getSubscriptionData() {
  return SUBSCRIPTION_DATA;
}

/**
 * サブスクプランをIDから取得
 * @param {number} planId - プランID
 * @returns {Object|null} プランオブジェクト
 */
function getSubscriptionPlanById(planId) {
  const allPlans = [...SUBSCRIPTION_DATA.plans, SUBSCRIPTION_DATA.foodSubscription];
  return allPlans.find(p => p.id === planId) || null;
}

/**
 * ユーザーのサブスク状況を取得
 * @returns {Array} アクティブなサブスクの配列
 */
function getUserSubscriptions() {
  const saved = localStorage.getItem('user_subscriptions');
  return saved ? JSON.parse(saved) : [];
}

/**
 * サブスクを追加
 * @param {number} planId - プランID
 */
function addSubscription(planId) {
  const subscriptions = getUserSubscriptions();
  const plan = getSubscriptionPlanById(planId);
  if (!plan) return;
  
  const newSub = {
    id: Date.now(),
    planId: planId,
    planName: plan.name,
    price: plan.price,
    startDate: new Date().toISOString(),
    nextDelivery: getNextDeliveryDate(),
    status: 'active'
  };
  
  subscriptions.push(newSub);
  localStorage.setItem('user_subscriptions', JSON.stringify(subscriptions));
}

/**
 * 次回配達日を計算
 * @returns {string} 次回配達日（YYYY-MM-DD）
 */
function getNextDeliveryDate() {
  const today = new Date();
  const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 15);
  return nextMonth.toISOString().split('T')[0];
}

