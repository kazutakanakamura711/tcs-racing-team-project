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
  IkutaYuga: 'ikuta-yuga',
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
    case MemberId.IkutaYuga:
      return MemberId.IkutaYuga;
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
  IkutaYuga: 'IkutaYuga',
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
    memberType: MemberType.Director,
    gradationImagesPath:
      '/images/member/img-member-kohei-yamamoto-gradation.webp',
    topTheTeamSectionImagePath:
      '/images/member/img-member-kohei-yamamoto-top-theTeam.webp',
    memberPageAboutSectionImagesPath:
      '/images/memberPage/img-memberPage-bg-kohei-yamamoto.png',
    memberPageFirstViewMemberImagePath:
      '/images/memberPage/img-memberPage-kohei-yamamoto.webp',
    memberPageFirstViewBackgroundImagePc:
      '/images/memberPage/img-memberPage-top-kohei-yamamoto-pc.webp',
    memberPageFirstViewBackgroundImageSp:
      '/images/memberPage/img-memberPage-top-kohei-yamamoto-sp.webp',
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
      '/images/memberPage/img-memberPage-bg-yusuke-fukumitsu.jpeg',
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
      '/images/memberPage/img-memberPage-bg-eusebia-nicole.jpeg',
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
      '/images/member/img-member-deddy-Kurniawan-gradation.png',
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
    topTheTeamSectionImagePath: '/images/member/img-member-rina-zaki-rider.png',
    ourTeamPageTheRiderSectionImagePath:
      '/images/member/img-member-rina-zaki-rider.png',
    memberPageAboutSectionImagesPath: '', //TODO: 個人ページのAboutセクション画像が来たら差し替え
    memberPageFirstViewMemberImagePath: '', //TODO: 個人ページのFirstViewメンバー画像が来たら差し替え
    memberPageFirstViewBackgroundImagePc: '', //TODO: 個人ページのPC用FirstView背景画像が来たら差し替え
    memberPageFirstViewBackgroundImageSp: '', //TODO: 個人ページのSP用FirstView背景画像が来たら差し替え
  },
  [MemberKey.AyakaHiyoshi]: {
    id: MemberId.AyakaHiyoshi,
    nameJa: '日吉 彩華',
    nameEn: 'Ayaka Hiyoshi',
    memberType: MemberType.Rider,
    gradationImagesPath: '', //TODO: 個人ページのcarouselの画像が来たら差し替え
    topTheTeamSectionBackgroundImagePath: '/images/top/img-top-japan-flag.webp', //TODO: トップページの旗背景画像差し替え
    topTheTeamSectionImagePath:
      '/images/member/img-member-ayaka-hiyoshi-rider.png',
    ourTeamPageTheRiderSectionImagePath:
      '/images/member/img-member-ayaka-hiyoshi-rider.png',
    memberPageAboutSectionImagesPath: '', //TODO: 個人ページのAboutセクション画像が来たら差し替え
    memberPageFirstViewMemberImagePath: '', //TODO: 個人ページのFirstViewメンバー画像が来たら差し替え
    memberPageFirstViewBackgroundImagePc: '', //TODO: 個人ページのPC用FirstView背景画像が来たら差し替え
    memberPageFirstViewBackgroundImageSp: '', //TODO: 個人ページのSP用FirstView背景画像が来たら差し替え
  },
  [MemberKey.TsewangNorboo]: {
    id: MemberId.TsewangNorboo,
    nameJa: 'ツェワン ノルボ',
    nameEn: 'Tsewang Norboo',
    memberType: MemberType.Rider,
    gradationImagesPath: '', //TODO: 個人ページのcarouselの画像が来たら差し替え
    topTheTeamSectionBackgroundImagePath: '', //TODO: トップページの旗背景画像差し替え
    topTheTeamSectionImagePath:
      '/images/member/img-member-tsewang-norboo-rider.png',
    ourTeamPageTheRiderSectionImagePath:
      '/images/member/img-member-tsewang-norboo-rider.png',
    memberPageAboutSectionImagesPath: '', //TODO: 個人ページのAboutセクション画像が来たら差し替え
    memberPageFirstViewMemberImagePath: '', //TODO: 個人ページのFirstViewメンバー画像が来たら差し替え
    memberPageFirstViewBackgroundImagePc: '', //TODO: 個人ページのPC用FirstView背景画像が来たら差し替え
    memberPageFirstViewBackgroundImageSp: '', //TODO: 個人ページのSP用FirstView背景画像が来たら差し替え
  },
  [MemberKey.IkutaYuga]: {
    id: MemberId.IkutaYuga,
    nameJa: '幾田 悠雅',
    nameEn: 'Ikuta Yuga',
    memberType: MemberType.Rider,
    gradationImagesPath: '', //TODO: 個人ページのcarouselの画像が来たら差し替え
    topTheTeamSectionBackgroundImagePath: '/images/top/img-top-japan-flag.webp', //TODO: トップページの旗背景画像差し替え
    topTheTeamSectionImagePath:
      '/images/member/img-member-ikuta-yuga-rider.png',
    ourTeamPageTheRiderSectionImagePath:
      '/images/member/img-member-ikuta-yuga-rider.png',
    memberPageAboutSectionImagesPath: '', //TODO: 個人ページのAboutセクション画像が来たら差し替え
    memberPageFirstViewMemberImagePath: '', //TODO: 個人ページのFirstViewメンバー画像が来たら差し替え
    memberPageFirstViewBackgroundImagePc: '', //TODO: 個人ページのPC用FirstView背景画像が来たら差し替え
    memberPageFirstViewBackgroundImageSp: '', //TODO: 個人ページのSP用FirstView背景画像が来たら差し替え
  },
  [MemberKey.KadekDwi]: {
    id: MemberId.KadekDwi,
    nameJa: 'カデック ドゥイ',
    nameEn: 'Kadek Dwi',
    memberType: MemberType.Rider,
    gradationImagesPath: '', //TODO: 個人ページのcarouselの画像が来たら差し替え
    topTheTeamSectionBackgroundImagePath:
      '/images/top/img-top-indonesia-flag.webp', //TODO: トップページの旗背景画像差し替え
    topTheTeamSectionImagePath: '/images/member/img-member-kadek-dwi-rider.png',
    ourTeamPageTheRiderSectionImagePath:
      '/images/member/img-member-kadek-dwi-rider.png',
    memberPageAboutSectionImagesPath: '', //TODO: 個人ページのAboutセクション画像が来たら差し替え
    memberPageFirstViewMemberImagePath: '', //TODO: 個人ページのFirstViewメンバー画像が来たら差し替え
    memberPageFirstViewBackgroundImagePc: '', //TODO: 個人ページのPC用FirstView背景画像が来たら差し替え
    memberPageFirstViewBackgroundImageSp: '', //TODO: 個人ページのSP用FirstView背景画像が来たら差し替え
  },
} as const;

// TopページのTheStaffで使用する配列を取得
export const getTopTheStaffList = (): Member[] => {
  return Object.values(members).filter(member => member.isTopTheStaff);
};

// OurTeamページのTheRiders使用する配列を取得
export const getOurTeamPageTheRiderSectionList = (): Member[] => {
  return Object.values(members).filter(
    member => member.ourTeamPageTheRiderSectionImagePath !== undefined,
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
