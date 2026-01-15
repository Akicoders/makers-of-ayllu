import React, { useEffect, useState, useRef } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { CSSTransition } from 'react-transition-group';
import { useTheme } from '@/stores/themeContext';

interface AppMenuItemProps {
    item: any;
    index: number;
    root?: boolean;
    parentItemKey?: string | null;
}

const AppMenuItem: React.FC<AppMenuItemProps> = ({ item, index, root = true, parentItemKey = null }) => {
    const { activeMenuItem, setActiveMenuItem, layoutConfig, layoutState, toggleMenu, isSidebarActive } = useTheme();
    const { url } = usePage();
    const [isActiveMenu, setIsActiveMenu] = useState(false);
    const itemKey = parentItemKey ? parentItemKey + '-' + index : String(index);
    const nodeRef = useRef(null);

    useEffect(() => {
        setIsActiveMenu(
            activeMenuItem === itemKey || (activeMenuItem ? activeMenuItem.startsWith(itemKey + '-') : false)
        );
    }, [activeMenuItem, itemKey]);

    const itemClick = (event: React.MouseEvent, item: any) => {
        if (item.disabled) {
            event.preventDefault();
            return;
        }

        if ((item.to || item.url) && (layoutState.staticMenuMobileActive || layoutState.overlayMenuActive)) {
            toggleMenu();
        }

        if (item.command) {
            item.command({ originalEvent: event, item: item });
        }

        const foundItemKey = item.items ? (isActiveMenu ? parentItemKey : itemKey) : itemKey;
        setActiveMenuItem(foundItemKey);
    };

    const checkActiveRoute = (item: any) => {
        if (item.to) {
            return url.startsWith(item.to);
        }
        return false;
    };

    if (item.visible === false) return null;

    return (
        <li className={`${root ? 'layout-root-menuitem' : ''} ${isActiveMenu ? 'active-menuitem' : ''}`}>
            {root && item.visible !== false && (
                <div className="layout-menuitem-root-text text-brand-navy dark:text-brand-gold-light text-xs font-bold tracking-wider">
                    {item.label}
                </div>
            )}

            {(!item.to || item.items) && item.visible !== false ? (
                <a
                    href={item.url}
                    onClick={(e) => itemClick(e, item)}
                    className={`${item.class || ''} group hover:bg-brand-cream dark:hover:bg-brand-navy/30`}
                    target={item.target}
                    tabIndex={0}
                >
                    <i className={`${item.icon} layout-menuitem-icon text-brand-gold group-hover:text-brand-gold-dark transition-colors`}></i>
                    <span className="layout-menuitem-text text-brand-navy-deep dark:text-surface-100">{item.label}</span>
                    {item.items && <i className="pi pi-fw pi-angle-down layout-submenu-toggler text-brand-gold"></i>}
                </a>
            ) : null}

            {item.to && !item.items && item.visible !== false ? (
                <Link
                    href={item.to}
                    onClick={(e) => itemClick(e, item)}
                    className={`${item.class || ''} group hover:bg-brand-cream dark:hover:bg-brand-navy/30 transition-all duration-200 ${
                        checkActiveRoute(item)
                            ? 'active-route bg-brand-gold/10 dark:bg-brand-gold/20 border-l-4 border-brand-gold font-semibold'
                            : ''
                    }`}
                    tabIndex={0}
                >
                    <i
                        className={`${item.icon} layout-menuitem-icon transition-colors ${
                            checkActiveRoute(item)
                                ? 'text-brand-gold'
                                : 'text-brand-gold/70 group-hover:text-brand-gold'
                        }`}
                    ></i>
                    <span
                        className={`layout-menuitem-text transition-colors ${
                            checkActiveRoute(item)
                                ? 'text-brand-gold'
                                : 'text-brand-navy-deep dark:text-surface-100'
                        }`}
                    >
                        {item.label}
                    </span>
                    {item.items && <i className="pi pi-fw pi-angle-down layout-submenu-toggler text-brand-gold"></i>}
                </Link>
            ) : null}

            {item.items && item.visible !== false && (
                <CSSTransition
                    nodeRef={nodeRef}
                    classNames="layout-submenu"
                    timeout={300}
                    in={root ? true : isActiveMenu}
                    unmountOnExit
                >
                    <ul ref={nodeRef} className="layout-submenu">
                        {item.items.map((child: any, i: number) => (
                            <AppMenuItem
                                key={child.label || i}
                                item={child}
                                index={i}
                                parentItemKey={itemKey}
                                root={false}
                            />
                        ))}
                    </ul>
                </CSSTransition>
            )}
        </li>
    );
};

export default AppMenuItem;
