import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/shared/ui';
import {
  TOP,
  OUR_TEAM,
  SCHEDULE,
  OUR_PARTNERS,
  CONTACT,
  UPDATES,
} from '@/shared/constants';
import { Link as RouterLink } from 'react-router-dom';
import { Language, LanguageDisplay } from '@/shared/store/language-store';
import { ChangeEvent, FC } from 'react';

interface Props {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  selectedLanguage: Language;
  handleLanguageChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export const Header: FC<Props> = ({
  isOpen,
  onOpen,
  onClose,
  selectedLanguage,
  handleLanguageChange,
}) => {
  const isHeaderElement = (target: EventTarget | null) => {
    return target instanceof HTMLElement && !!target.closest('header');
  };

  return (
    <header className="fixed top-0 left-0 z-99999 w-full">
      <div className="bg-[#1A1A1A] px-6 py-8 md:px-12 md:py-3">
        <div className="relative flex items-center">
          {/* ロゴ */}
          <div className="w-32 md:w-55.5 md:absolute md:top-15 md:-translate-y-1/2 md:left-0 z-999">
            <RouterLink to={TOP} onClick={onClose}>
              <img
                src="/images/common/ico-team-logo-name.webp"
                alt="Asia Union TCS Racing Team ロゴ"
              />
            </RouterLink>
          </div>

          {/* PCナビゲーション */}
          <div className="hidden md:block ml-auto">
            <nav aria-label="Primary navigation">
              <ul className="flex items-center gap-10 text-light list-none m-0 p-0 mr-4">
                <li>
                  <RouterLink to={UPDATES}>Updates</RouterLink>
                </li>
                <li>
                  <RouterLink to={OUR_TEAM}>Our Team</RouterLink>
                </li>
                <li>
                  <RouterLink to={SCHEDULE}>Schedule</RouterLink>
                </li>
                <li>
                  <RouterLink to={OUR_PARTNERS}>Partners</RouterLink>
                </li>
                <li>
                  <RouterLink to={CONTACT}>Contact</RouterLink>
                </li>
              </ul>
            </nav>
          </div>

          {/* スペーサー: モバイルのみ */}
          <div className="flex-1 md:hidden" />

          {/* 言語セレクター */}
          <select
            aria-label="Select language"
            id="language-selector"
            name="language"
            className="w-20 h-6.5 pl-4! bg-white text-dark! mr-4! md:mr-0! md:ml-4! text-sm"
            value={selectedLanguage}
            onChange={handleLanguageChange}
            style={{ borderRadius: '6px' }}
          >
            <option value={Language.Ja}>{LanguageDisplay[Language.Ja]}</option>
            <option value={Language.En}>{LanguageDisplay[Language.En]}</option>
            <option value={Language.Id}>{LanguageDisplay[Language.Id]}</option>
          </select>

          {/* ハンバーガーメニュー: モバイルのみ */}
          <button
            type="button"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            className="block md:hidden ml-auto cursor-pointer"
            onClick={isOpen ? onClose : onOpen}
            data-testid="hamburger-menu"
          >
            <div className="w-7.5 h-0.5 bg-white mb-1.25" />
            <div className="w-7.5 h-0.5 bg-white mb-1.25 ml-2" />
            <div className="w-7.5 h-0.5 bg-white" />
          </button>

          {/* モバイルドロワー */}
          <Sheet
            modal={false}
            open={isOpen}
            onOpenChange={open => !open && onClose()}
          >
            <SheetContent
              side="right"
              className="mt-27.5 bg-white text-dark flex flex-col h-auto"
              onInteractOutside={event => {
                if (isHeaderElement(event.target)) {
                  event.preventDefault();
                }
              }}
              onFocusOutside={event => {
                if (isHeaderElement(event.target)) {
                  event.preventDefault();
                }
              }}
            >
              <SheetHeader>
                {/* TODO: Chakraを削除したら!を外す */}
                <SheetTitle className="text-lg! font-bold!">Menu</SheetTitle>
              </SheetHeader>
              <nav
                aria-label="Mobile navigation"
                className="flex items-center justify-center flex-col flex-1"
              >
                <ul className="list-none m-0 p-0 text-center flex flex-col gap-4">
                  <li>
                    <RouterLink to={UPDATES} onClick={onClose}>
                      Updates
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to={OUR_TEAM} onClick={onClose}>
                      Our Team
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to={SCHEDULE} onClick={onClose}>
                      Schedule
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to={OUR_PARTNERS} onClick={onClose}>
                      Partners
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to={CONTACT} onClick={onClose}>
                      Contact
                    </RouterLink>
                  </li>
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
