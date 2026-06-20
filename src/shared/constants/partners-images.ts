export type Partner = {
  imagePath: string;
  link: string;
  partnersPageLogoImageWidth: string;
  commonLogoImageWidth?: string;
};

export type PartnersKey =
  | 'alpenBlick' // アルペンブリックリゾート
  | 'blisStage' // 株式会社ブリステージ
  | 'hokuei' // 北英電工株式会社
  | 'naturalWin' // ナチュラルウィン
  | 'yowapeda' // 弱虫ペダル
  | 'revoFish' // 池下産業株式会社（Revofish）
  | 'sgElectrical' // SG Electrical
  | 'kabuto' // 株式会社ＯＧＫカブト
  | 'hirooSangyo' // ヒロオ産業
  | 'houseWs' // 株式会社渡部製作所
  | 'beeSpeed' // BEESPEED (EXLUB)
  | 'shibaken' // 株式会社芝堅
  | 'honda' // HONDA
  | 'maxxis' // MAXXIS（タイヤ）
  | 'fox' // Fox
  | 'raceface' // Raceface
  | 'proApparel' // Proapparel
  | 'inno' // 株式会社カーメイト（Inno）
  | 'crazyBoost' // Crazy Boost
  | 'asics'; // Asics

export const partners: Record<PartnersKey, Partner> = {
  alpenBlick: {
    imagePath: '/images/partner/img-sponsor-alpenBlick.webp',
    link: 'https://www.alpenBlick-resort.com/',
    partnersPageLogoImageWidth: '',
    commonLogoImageWidth: '272px',
  },
  blisStage: {
    imagePath: '/images/partner/img-sponsor-blisStage.webp',
    link: 'https://www.blisstage.jp/',
    partnersPageLogoImageWidth: '112px',
    commonLogoImageWidth: '128px',
  },
  hokuei: {
    imagePath: '/images/partner/img-sponsor-hokuei.webp',
    link: 'https://www.hokuei-gr.com/',
    partnersPageLogoImageWidth: '64px',
    commonLogoImageWidth: '80px',
  },
  naturalWin: {
    imagePath: '/images/partner/img-sponsor-naturalWin.webp',
    link: 'https://www.3plmnt.co.jp/',
    partnersPageLogoImageWidth: '72px',
    commonLogoImageWidth: '80px',
  },
  yowapeda: {
    imagePath: '/images/partner/img-sponsor-yowapeda.webp',
    link: 'https://yowapeda.com/',
    partnersPageLogoImageWidth: '96px',
    commonLogoImageWidth: '96px',
  },
  revoFish: {
    imagePath: '/images/partner/img-sponsor-revoFish.png',
    link: 'https://www.revofish.com/',
    partnersPageLogoImageWidth: '64px',
    commonLogoImageWidth: '80px',
  },
  sgElectrical: {
    imagePath: '/images/partner/img-sg-electrical.jpg',
    link: '',
    partnersPageLogoImageWidth: '136px',
    commonLogoImageWidth: '160px',
  },
  kabuto: {
    imagePath: '/images/partner/img-sponsor-kabuto.webp',
    link: 'https://www.ogkkabuto.co.jp/',
    partnersPageLogoImageWidth: '96px',
    commonLogoImageWidth: '112px',
  },
  hirooSangyo: {
    imagePath: '/images/partner/img-sponsor-hirooSangyo.webp',
    link: 'https://www.hiroosangyo.jp/',
    partnersPageLogoImageWidth: '150px',
    commonLogoImageWidth: '168px',
  },
  houseWs: {
    imagePath: '/images/partner/img-sponsor-watanabe.webp',
    link: 'https://house-ws.com/',
    partnersPageLogoImageWidth: '80px',
    commonLogoImageWidth: '80px',
  },
  beeSpeed: {
    imagePath: '/images/partner/img-sponsor-beeSpeed.png',
    link: 'https://www.beespeed.jp/',
    partnersPageLogoImageWidth: '152px',
  },
  shibaken: {
    imagePath: '/images/partner/img-sponsor-shibaken.webp',
    link: 'http://www.shibaken-inc.co.jp/',
    partnersPageLogoImageWidth: '152px',
  },
  honda: {
    imagePath: '/images/partner/img-sponsor-honda.png',
    link: 'https://www.honda-indonesia.com/',
    partnersPageLogoImageWidth: '184px',
  },
  maxxis: {
    imagePath: '/images/partner/img-sponsor-maxxis.jpg',
    link: 'https://www.maxxis.co.jp/',
    partnersPageLogoImageWidth: '108px',
  },
  fox: {
    imagePath: '/images/partner/img-sponsor-fox.png',
    link: '',
    partnersPageLogoImageWidth: '76px',
  },
  raceface: {
    imagePath: '/images/partner/img-sponsor-raceface.png',
    link: 'https://www.raceface.com/',
    partnersPageLogoImageWidth: '180px',
  },
  proApparel: {
    imagePath: '/images/partner/img-sponsor-pro-apparel.webp',
    link: 'https://www.proapparel.asia/',
    partnersPageLogoImageWidth: '104px',
  },
  inno: {
    imagePath: '/images/partner/img-sponsor-inno.webp',
    link: 'https://www.innoracks.com/',
    partnersPageLogoImageWidth: '112px',
  },
  crazyBoost: {
    imagePath: '/images/partner/img-crazy-boost.jpg',
    link: '',
    partnersPageLogoImageWidth: '132px',
  },
  asics: {
    imagePath: '/images/partner/img-asics.png',
    link: '',
    partnersPageLogoImageWidth: '112px',
  },
} as const;

export type PartnerCategory =
  | 'black'
  | 'platinum'
  | 'gold'
  | 'silver'
  | 'bronze'
  | 'supporters'
  | 'suppliers';

// スポンサーのカテゴリごとの配列を作成
export const partnersImages: Record<PartnerCategory, Partner[]> = {
  black: [partners.alpenBlick],
  platinum: [partners.blisStage, partners.hokuei],
  gold: [
    partners.naturalWin,
    partners.yowapeda,
    partners.revoFish,
    partners.sgElectrical,
  ],
  silver: [partners.kabuto, partners.inno],
  bronze: [partners.hirooSangyo, partners.houseWs],
  supporters: [partners.shibaken],
  suppliers: [
    partners.beeSpeed,
    partners.honda,
    partners.maxxis,
    partners.fox,
    partners.raceface,
    partners.proApparel,
    partners.crazyBoost,
    partners.asics,
  ],
} as const;
