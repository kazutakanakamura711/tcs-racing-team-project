import { Box, Text } from '@chakra-ui/react';
import { DirectorContent } from './director-content';
import { useTranslation } from 'react-i18next';
import { convertNewlineToBreak } from '@/shared/utils/convertNewlineToBreak/convertNewlineToBreak';
import { getMemberByMemberKey, MemberKey, noImageUrl } from '@/constants';
import { Member } from './member';

export const TopTheTeam = () => {
  const { t } = useTranslation('topTheTeam');

  // `id` を指定してメンバー情報を取得
  const director = getMemberByMemberKey(MemberKey.KoheiYamamoto); // 監督（山本幸平）
  const rider1 = getMemberByMemberKey(MemberKey.RiyadhHakim); // リアッド ハキム
  const rider2 = getMemberByMemberKey(MemberKey.SayuBella); // サユ ベラ
  const rider3 = getMemberByMemberKey(MemberKey.YutaMatsumoto); // 松本 佑太
  const rider4 = getMemberByMemberKey(MemberKey.EusebiaNicole); // エセビア ニコル
  const rider5 = getMemberByMemberKey(MemberKey.FiliYudiono); // フェリ ユドヨノ
  const rider6 = getMemberByMemberKey(MemberKey.RinaZaki); // リナ ザキ
  const rider7 = getMemberByMemberKey(MemberKey.AyakaHiyoshi); // 日吉 彩華

  const rider1Content = (
    <Text color="#fff" fontSize={{ base: '10px', lg: '12px' }}>
      {convertNewlineToBreak(t(`description.${rider1.id}`))}
    </Text>
  );
  const rider2Content = (
    <Text color="#fff" fontSize={{ base: '10px', lg: '12px' }}>
      {convertNewlineToBreak(t(`description.${rider2.id}`))}
    </Text>
  );
  const rider3Content = (
    <Text color="#fff" fontSize={{ base: '10px', lg: '12px' }}>
      {convertNewlineToBreak(t(`description.${rider3.id}`))}
    </Text>
  );
  const rider4Content = (
    <Text color="#fff" fontSize={{ base: '10px', lg: '12px' }}>
      {convertNewlineToBreak(t(`description.${rider4.id}`))}
    </Text>
  );
  const rider5Content = (
    <Text color="#fff" fontSize={{ base: '10px', lg: '12px' }}>
      {convertNewlineToBreak(t(`description.${rider5.id}`))}
    </Text>
  );
  const rider6Content = (
    <Text color="#fff" fontSize={{ base: '10px', lg: '12px' }}>
      {convertNewlineToBreak(t(`description.${rider6.id}`))}
    </Text>
  );
  const rider7Content = (
    <Text color="#fff" fontSize={{ base: '10px', lg: '12px' }}>
      {convertNewlineToBreak(t(`description.${rider7.id}`))}
    </Text>
  );

  return (
    <Box mb="98px">
      <DirectorContent
        post={'株式会社 A-Union TCS 代表取締兼監督'}
        name={director.nameJa}
        comment={convertNewlineToBreak(t(`description.${director.id}`))}
        link={`/member-page/${director.id}`}
        imagePath={director.topTheTeamSectionImagePath || noImageUrl}
      />
      <Member
        leftName={rider1.nameJa}
        leftComment={rider1Content}
        leftImage={rider1.ourTeamPageTheRiderSectionImagePath || noImageUrl}
        leftBg={rider1.topTheTeamSectionBackgroundImagePath || noImageUrl}
        leftLink={`/member-page/${rider1.id}`}
        leftId={rider1.id}
        rightName={rider2.nameJa}
        rightComment={rider2Content}
        rightImage={rider2.ourTeamPageTheRiderSectionImagePath || noImageUrl}
        rightBg={rider2.topTheTeamSectionBackgroundImagePath || noImageUrl}
        rightLink={`/member-page/${rider2.id}`}
        rightId={rider2.id}
      />
      <Member
        leftName={rider3.nameJa}
        leftComment={rider3Content}
        leftImage={rider3.ourTeamPageTheRiderSectionImagePath || noImageUrl}
        leftBg={rider3.topTheTeamSectionBackgroundImagePath || noImageUrl}
        leftLink={`/member-page/${rider3.id}`}
        leftId={rider3.id}
        rightName={rider4.nameJa}
        rightComment={rider4Content}
        rightImage={rider4.ourTeamPageTheRiderSectionImagePath || noImageUrl}
        rightBg={rider4.topTheTeamSectionBackgroundImagePath || noImageUrl}
        rightLink={`/member-page/${rider4.id}`}
        rightId={rider4.id}
      />
      <Member
        leftName={rider5.nameJa}
        leftComment={rider5Content}
        leftImage={rider5.ourTeamPageTheRiderSectionImagePath || noImageUrl}
        leftBg={rider5.topTheTeamSectionBackgroundImagePath || ''}
        // TODO:後でrightLink={`/member-page/${rider5.id}`}に変える
        leftLink={`/`}
        leftId={rider5.id}
        rightName={rider6.nameJa}
        rightComment={rider6Content}
        rightImage={rider6.ourTeamPageTheRiderSectionImagePath || noImageUrl}
        rightBg={rider6.topTheTeamSectionBackgroundImagePath || ''}
        // TODO:後でrightLink={`/member-page/${rider6.id}`}に変える
        rightLink={`/`}
        rightId={rider6.id}
      />
      <Member
        leftName={rider7.nameJa}
        leftComment={rider7Content}
        leftImage={rider7.ourTeamPageTheRiderSectionImagePath || noImageUrl}
        leftBg={rider7.topTheTeamSectionBackgroundImagePath || ''}
        // TODO:後でrightLink={`/member-page/${rider7.id}`}に変える
        leftLink={`/`}
        leftId={rider7.id}
      />
    </Box>
  );
};
