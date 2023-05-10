import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { routePath } from 'app/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/main.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <div className={cls.items}>
        <AppLink
          className={cls.item}
          to={routePath.main}
          theme={AppLinkTheme.SECONDARY}
        >
          <MainIcon className={cls.icon} />
          <span className={cls.link}>
            {t('Main')}
          </span>
        </AppLink>
        <AppLink
          className={cls.item}
          to={routePath.about}
          theme={AppLinkTheme.SECONDARY}
        >
          <AboutIcon className={cls.icon} />
          <span className={cls.link}>
            {t('About')}
          </span>
        </AppLink>
      </div>
      <Button
        data-testid="sidebar-toggle"
        onClick={handleToggle}
        className={cls.collapsedBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.M}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher
          className={cls.lang}
          short={collapsed}
        />
      </div>
    </div>
  );
};
