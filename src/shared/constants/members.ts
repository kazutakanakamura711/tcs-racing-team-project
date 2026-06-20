export type Member = {
  id: MemberId;
  nameJa: string;
  nameEn: string;
  memberType: MemberType;
  gradationImagesPath: string;
  topTheTeamSectionBackgroundImagePath?: string;
  topTheTeamSectionImagePath?: string;
  ourTeamPageTheRiderSectionImagePath?: string;
  memberPageAboutSectionImagesPath?: string;
  memberPageFirstViewMemberImagePath?: string;
  memberPageFirstViewBackgroundImagePc?: string;
  memberPageFirstViewBackgroundImageSp?: string;
  isTopTheStaff?: boolean;
  isOurTeamTheStaffMain?: boolean;
  isOurTeamTheStaffSub?: boolean;
};

export const MemberId = {
  KoheiYamamoto: 'kohei-yamamoto',
  YusukeFukumitsu: 'yusuke-fukumitsu',
  EusebiaNicole: 'eusebia-nicole',
  YoshiharuShiozawa: 'yoshiharu-shiozawa',
  DeddyKurniawan: 'deddy-kurniawan',
  RinaZaki: 'rina-zaki',
  AyakaHiyoshi: 'ayaka-hiyoshi',
  TsewangNorboo: 'tsewang-norboo',
  YugaIkuta: 'yuga-ikuta',
  KadekDwi: 'kadek-dwi',
} as const;

export type MemberId = (typeof MemberId)[keyof typeof MemberId];

export const parseMemberId = (id: string): MemberId | undefined => {
  switch (id) {
    case MemberId.KoheiYamamoto:
      return MemberId.KoheiYamamoto;
    case MemberId.YusukeFukumitsu:
      return MemberId.YusukeFukumitsu;
    case MemberId.EusebiaNicole:
      return MemberId.EusebiaNicole;
    case MemberId.YoshiharuShiozawa:
      return MemberId.YoshiharuShiozawa;
    case MemberId.DeddyKurniawan:
      return MemberId.DeddyKurniawan;
    case MemberId.RinaZaki:
      return MemberId.RinaZaki;
    case MemberId.AyakaHiyoshi:
      return MemberId.AyakaHiyoshi;
    case MemberId.TsewangNorboo:
      return MemberId.TsewangNorboo;
    case MemberId.YugaIkuta:
      return MemberId.YugaIkuta;
    case MemberId.KadekDwi:
      return MemberId.KadekDwi;
    default:
      return undefined;
  }
};

export const MemberKey = {
  KoheiYamamoto: 'KoheiYamamoto',
  YusukeFukumitsu: 'YusukeFukumitsu',
  EusebiaNicole: 'EusebiaNicole',
  YoshiharuShiozawa: 'YoshiharuShiozawa',
  DeddyKurniawan: 'DeddyKurniawan',
  RinaZaki: 'RinaZaki',
  AyakaHiyoshi: 'AyakaHiyoshi',
  TsewangNorboo: 'TsewangNorboo',
  YugaIkuta: 'YugaIkuta',
  KadekDwi: 'KadekDwi',
} as const;

export type MemberKey = (typeof MemberKey)[keyof typeof MemberKey];

export const MemberType = {
  Director: 'Director',
  GeneralManager: 'GeneralManager',
  Rider: 'Rider',
  Communications: 'Communications',
  Staff: 'Staff',
} as const;

export type MemberType = (typeof MemberType)[keyof typeof MemberType];

export const MemberTypeDisplay = {
  [MemberType.Director]: '監督',
  [MemberType.GeneralManager]: 'GM',
  [MemberType.Rider]: 'ライダー',
  [MemberType.Communications]: '広報',
  [MemberType.Staff]: 'スタッフ',
};

export const members: Record<MemberKey, Member> = {
  [MemberKey.KoheiYamamoto]: {
    id: MemberId.KoheiYamamoto,
    nameJa: '山本 幸平',
    nameEn: 'Kohei Yamamoto',
    memberType: MemberType.Director, // メンバーのタイプ
    gradationImagesPath:
      '/images/member/img-member-kohei-yamamoto-gradation.webp', // メンバー個人ページのOtherMemberのスライドに使用(グラデーション画像のパス)
    topTheTeamSectionBackgroundImagePath: '/images/top/img-top-japan-flag.webp', // トップページのTheTeamセクションの背景画像のパス
    topTheTeamSectionImagePath:
      '/images/member/img-member-kohei-yamamoto-top-theTeam.webp', // トップページのTheTeamセクションのメンバー画像のパス
    ourTeamPageTheRiderSectionImagePath:
      '/images/member/img-member-kohei-yamamoto-rider.webp', // OurTeamページのTheRiderセクションのメンバー画像のパス
    memberPageAboutSectionImagesPath:
      '/images/memberPage/img-memberPage-bg-kohei-yamamoto.webp', // メンバー個人ページのAboutセクションの背景画像のパス
    memberPageFirstViewMemberImagePath:
      '/images/memberPage/img-memberPage-kohei-yamamoto.webp', // メンバー個人ページのFirstViewのメンバー画像のパス
    memberPageFirstViewBackgroundImagePc:
      '/images/memberPage/img-memberPage-top-kohei-yamamoto-pc.webp', // メンバー個人ページのFirstViewの背景画像のパス（PC用）
    memberPageFirstViewBackgroundImageSp:
      '/images/memberPage/img-memberPage-top-kohei-yamamoto-sp.webp', // メンバー個人ページのFirstViewの背景画像のパス（SP用）
    isOurTeamTheStaffMain: true,
  },
  [MemberKey.YusukeFukumitsu]: {
    id: MemberId.YusukeFukumitsu,
    nameJa: '福光 悠介',
    nameEn: 'Yusuke Fukumitsu',
    memberType: MemberType.GeneralManager,
    gradationImagesPath:
      '/images/member/img-member-yusuke-fukumitsu-gradation.webp',
    memberPageAboutSectionImagesPath:
      '/images/memberPage/img-memberPage-bg-yusuke-fukumitsu.webp',
    memberPageFirstViewMemberImagePath:
      '/images/memberPage/img-memberPage-yusuke-fukumitsu.webp',
    memberPageFirstViewBackgroundImagePc:
      '/images/memberPage/img-memberPage-top-yusuke-fukumitsu-pc.webp',
    memberPageFirstViewBackgroundImageSp:
      '/images/memberPage/img-memberPage-top-yusuke-fukumitsu-sp.webp',
    isTopTheStaff: true,
    isOurTeamTheStaffMain: true,
  },
  [MemberKey.EusebiaNicole]: {
    id: MemberId.EusebiaNicole,
    nameJa: 'エセビア ニコル',
    nameEn: 'Eusebia Nicole',
    memberType: MemberType.Rider,
    gradationImagesPath:
      '/images/member/img-member-eusebia-nicole-gradation.webp',
    topTheTeamSectionBackgroundImagePath:
      '/images/top/img-top-philippines-flag.webp',
    topTheTeamSectionImagePath:
      '/images/member/img-member-eusebia-nicole-rider.webp',
    ourTeamPageTheRiderSectionImagePath:
      '/images/member/img-member-eusebia-nicole-rider.webp',
    memberPageAboutSectionImagesPath:
      '/images/memberPage/img-memberPage-bg-eusebia-nicole.webp',
    memberPageFirstViewMemberImagePath:
      '/images/memberPage/img-memberPage-eusebia-nicole.webp',
    memberPageFirstViewBackgroundImagePc:
      '/images/memberPage/img-memberPage-top-eusebia-nicole-pc.webp',
    memberPageFirstViewBackgroundImageSp:
      '/images/memberPage/img-memberPage-top-eusebia-nicole-sp.webp',
  },
  [MemberKey.YoshiharuShiozawa]: {
    id: MemberId.YoshiharuShiozawa,
    nameJa: '汐澤 芳治',
    memberType: MemberType.Communications,
    nameEn: 'Yoshiharu Shiozawa',
    gradationImagesPath:
      '/images/member/img-member-yoshiharu-shiozawa-gradation.webp',
    isTopTheStaff: true,
    isOurTeamTheStaffSub: true,
  },
  [MemberKey.DeddyKurniawan]: {
    id: MemberId.DeddyKurniawan,
    nameJa: 'デディー クルニアワン',
    nameEn: 'Deddy Kurniawan',
    memberType: MemberType.Staff,
    gradationImagesPath:
      '/images/member/img-member-deddy-Kurniawan-gradation.webp',
    isTopTheStaff: true,
    isOurTeamTheStaffSub: true,
  },
  [MemberKey.RinaZaki]: {
    id: MemberId.RinaZaki,
    nameJa: 'リナ ザキ',
    nameEn: 'Rina Zaki',
    memberType: MemberType.Rider,
    gradationImagesPath: '', //TODO: 個人ページのcarouselの画像が来たら差し替え
    topTheTeamSectionBackgroundImagePath: '', //TODO: トップページの旗背景画像差し替え
    topTheTeamSectionImagePath:
      '/images/member/img-member-rina-zaki-rider.webp',
    ourTeamPageTheRiderSectionImagePath:
      '/images/member/img-member-rina-zaki-rider.webp',
    memberPageAboutSectionImagesPath:
      '/images/memberPage/img-memberPage-bg-rina-zaki.webp',
    memberPageFirstViewMemberImagePath:
      '/images/memberPage/img-memberPage-rina-zaki.webp',
    memberPageFirstViewBackgroundImagePc:
      '/images/memberPage/img-memberPage-top-rina-zaki-pc.webp',
    memberPageFirstViewBackgroundImageSp:
      '/images/memberPage/img-memberPage-top-rina-zaki-pc.webp', //TODO: 個人ページのSP用FirstView背景画像が来たら差し替え
  },
  [MemberKey.AyakaHiyoshi]: {
    id: MemberId.AyakaHiyoshi,
    nameJa: '日吉 彩華',
    nameEn: 'Ayaka Hiyoshi',
    memberType: MemberType.Rider,
    gradationImagesPath: '', //TODO: 個人ページのcarouselの画像が来たら差し替え
    topTheTeamSectionBackgroundImagePath: '/images/top/img-top-japan-flag.webp',
    topTheTeamSectionImagePath:
      '/images/member/img-member-ayaka-hiyoshi-rider.webp',
    ourTeamPageTheRiderSectionImagePath:
      '/images/member/img-member-ayaka-hiyoshi-rider.webp',
    memberPageAboutSectionImagesPath:
      '/images/memberPage/img-memberPage-bg-ayaka-hiyoshi.webp',
    memberPageFirstViewMemberImagePath:
      '/images/memberPage/img-memberPage-ayaka-hiyoshi.webp',
    memberPageFirstViewBackgroundImagePc:
      '/images/memberPage/img-memberPage-top-ayaka-hiyoshi-pc.webp',
    memberPageFirstViewBackgroundImageSp:
      '/images/memberPage/img-memberPage-top-ayaka-hiyoshi-pc.webp', // TODO: 個人ページのSP用FirstView背景画像が来たら差し替え
  },
  [MemberKey.TsewangNorboo]: {
    id: MemberId.TsewangNorboo,
    nameJa: 'ツェワン ノルボ',
    nameEn: 'Tsewang Norboo',
    memberType: MemberType.Rider,
    gradationImagesPath: '', //TODO: 個人ページのcarouselの画像が来たら差し替え
    topTheTeamSectionBackgroundImagePath: '', //TODO: トップページの旗背景画像差し替え
    topTheTeamSectionImagePath:
      '/images/member/img-member-tsewang-norboo-rider.webp',
    ourTeamPageTheRiderSectionImagePath:
      '/images/member/img-member-tsewang-norboo-rider.webp',
    memberPageAboutSectionImagesPath:
      '/images/memberPage/img-memberPage-bg-tsewang-norboo.webp',
    memberPageFirstViewMemberImagePath:
      '/images/memberPage/img-memberPage-tsewang-norboo.webp',
    memberPageFirstViewBackgroundImagePc:
      '/images/memberPage/img-memberPage-top-tsewang-norboo-pc.webp',
    memberPageFirstViewBackgroundImageSp:
      '/images/memberPage/img-memberPage-top-tsewang-norboo-pc.webp', //TODO: 個人ページのSP用FirstView背景画像が来たら差し替え
  },
  [MemberKey.YugaIkuta]: {
    id: MemberId.YugaIkuta,
    nameJa: '幾田 悠雅',
    nameEn: 'Yuga Ikuta',
    memberType: MemberType.Rider,
    gradationImagesPath: '', //TODO: 個人ページのcarouselの画像が来たら差し替え
    topTheTeamSectionBackgroundImagePath: '/images/top/img-top-japan-flag.webp',
    topTheTeamSectionImagePath:
      '/images/member/img-member-yuga-ikuta-rider.webp',
    ourTeamPageTheRiderSectionImagePath:
      '/images/member/img-member-yuga-ikuta-rider.webp',
    memberPageAboutSectionImagesPath:
      '/images/memberPage/img-memberPage-bg-yuga-ikuta.webp',
    memberPageFirstViewMemberImagePath:
      '/images/memberPage/img-memberPage-yuga-ikuta.webp',
    memberPageFirstViewBackgroundImagePc:
      '/images/memberPage/img-memberPage-top-yuga-ikuta-pc.webp',
    memberPageFirstViewBackgroundImageSp:
      '/images/memberPage/img-memberPage-top-yuga-ikuta-pc.webp', //TODO: 個人ページのSP用FirstView背景画像が来たら差し替え
  },
  [MemberKey.KadekDwi]: {
    id: MemberId.KadekDwi,
    nameJa: 'カデック ドゥイ',
    nameEn: 'Kadek Dwi',
    memberType: MemberType.Rider,
    gradationImagesPath: '', //TODO: 個人ページのcarouselの画像が来たら差し替え
    topTheTeamSectionBackgroundImagePath:
      '/images/top/img-top-indonesia-flag.webp',
    topTheTeamSectionImagePath:
      '/images/member/img-member-kadek-dwi-rider.webp',
    ourTeamPageTheRiderSectionImagePath:
      '/images/member/img-member-kadek-dwi-rider.webp',
    memberPageAboutSectionImagesPath:
      '/images/memberPage/img-memberPage-bg-kadek-dwi.webp',
    memberPageFirstViewMemberImagePath:
      '/images/memberPage/img-memberPage-kadek-dwi.webp',
    memberPageFirstViewBackgroundImagePc:
      '/images/memberPage/img-memberPage-top-kadek-dwi-pc.webp',
    memberPageFirstViewBackgroundImageSp:
      '/images/memberPage/img-memberPage-top-kadek-dwi-pc.webp', //TODO: 個人ページのSP用FirstView背景画像が来たら差し替え
  },
} as const;

// TopページのTheStaffで使用する配列を取得
export const getTopTheStaffList = (): Member[] => {
  return Object.values(members).filter(member => member.isTopTheStaff);
};

// OurTeamページのTheRiders使用する配列を取得
export const getOurTeamPageTheRiderSectionList = (): Member[] => {
  return Object.values(members).filter(
    member =>
      member.memberType === MemberType.Rider &&
      member.ourTeamPageTheRiderSectionImagePath !== undefined,
  );
};

// 個人ページの `Other Members` セクションで使用する配列を取得
export const getOtherMembersList = (): Member[] => {
  return Object.values(members).filter(
    member => member.memberPageAboutSectionImagesPath !== undefined,
  );
};

// OurTeamページのTheStaffのメインスタッフを取得
export const getOurTeamTheStaffMainList = (): Member[] => {
  return Object.values(members).filter(member => member.isOurTeamTheStaffMain);
};

// OurTeamページのTheStaffのサブスタッフを取得
export const getOurTeamTheStaffSubList = (): Member[] => {
  return Object.values(members).filter(member => member.isOurTeamTheStaffSub);
};

// 指定された ID に対応するメンバーを取得する
export const getMemberById = (id: string): Member => {
  const member = Object.values(members).find(member => member.id === id);

  if (!member) {
    throw new Error(`Member with ID "${id}" not found.`);
  }

  return member;
};

// 指定された MemberKey に対応するメンバーを取得する
export const getMemberByMemberKey = (key: MemberKey): Member => {
  const member = members[key];

  if (!member) {
    throw new Error(`Member with key "${key}" not found.`);
  }

  return member;
};

// 指定された MemberType に一致するメンバーを配列で取得する
export const getMembersByType = (type: MemberType): Member[] => {
  return Object.values(members).filter(member => member.memberType === type);
};

// MemberType が 'Director' のメンバーを取得する
export const getDirector = (): Member => {
  const directors = getMembersByType(MemberType.Director);

  if (directors.length === 0) {
    throw new Error('Director not found.');
  }

  return directors[0];
};

// MemberType が 'Rider' のメンバーを配列で取得する
export const getRiders = (): Member[] => {
  return getMembersByType(MemberType.Rider);
};
