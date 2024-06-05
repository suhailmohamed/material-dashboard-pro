import { FC, ComponentProps } from "react"
import { DisclosureMenu } from "./DisclosureMenu"

interface SideNavProps {
    links: {
        title?: string
        menuLinks: ComponentProps<typeof DisclosureMenu>[]
    }[]
    showSideNav: boolean
    closeSideNav: () => unknown
}

export const SideNav: FC<SideNavProps> = ({
    links,
    showSideNav = false,
    closeSideNav
}: SideNavProps) => {
    return (
        <>
            <div 
                className={`fixed w-64 flex flex-col p-5 bg-gray-800 transform transition-all overflow-y-auto scrollbar-hide z-50
                    left-0 inset-y-0 lg:inset-y-4 lg:left-4 lg:rounded-xl -translate-x-full lg:translate-x-0
                    ${showSideNav ? ' translate-x-0' : ''}    
                `}
            >
                <div className="flex-shrink-0 flex py-6 gap-x-2">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
                        className="w-6 h-6 fill-white"
                    >
                        <path fillRule="evenodd" d="M2.25 4.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875V17.25a4.5 4.5 0 1 1-9 0V4.125Zm4.5 14.25a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" clipRule="evenodd" />
                        <path d="M10.719 21.75h9.156c1.036 0 1.875-.84 1.875-1.875v-5.25c0-1.036-.84-1.875-1.875-1.875h-.14l-8.742 8.743c-.09.089-.18.175-.274.257ZM12.738 17.625l6.474-6.474a1.875 1.875 0 0 0 0-2.651L15.5 4.787a1.875 1.875 0 0 0-2.651 0l-.1.099V17.25c0 .126-.003.251-.01.375Z" />
                    </svg>

                    <h3 className="font-semibold text-white">Material Dashboard Pro</h3>
                </div>

                <div className="flex-auto flex flex-col gap-4 border-t border-gray-50/10 divide-y divide-gray-50/10">

                    {links.map((link, i) => {
                        return (
                            <div 
                                key={i} 
                                className="flex flex-col pt-4 gap-2"
                            >
                                {link.title && (
                                    <h4 className="text-sm font-semibold uppercase text-white">
                                        {link.title}
                                    </h4>
                                )}
                            
                                {link.menuLinks.map((menu, menuIndex) => {
                                    return (
                                        <DisclosureMenu 
                                            key={menuIndex}
                                            name={menu.name}
                                            icon={menu.icon}
                                            dropdownMenu={menu.dropdownMenu}
                                        />
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
            
            {showSideNav && (
                <div 
                    className="fixed inset-0 bg-black/40"
                    onClick={closeSideNav}
                />
            )}
        </>
    )
}