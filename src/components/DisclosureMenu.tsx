
import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from '@headlessui/react'
import { FC, ReactNode } from 'react'

interface DisclosureMenuProps {
    name: string
    icon?: ReactNode
    dropdownMenu: {
        name: string
        onClick: () => unknown
    }[]
}

export const DisclosureMenu: FC<DisclosureMenuProps> = ({
    name,
    icon,
    dropdownMenu
}: DisclosureMenuProps) => {
    return (
        <Disclosure>
            {({ open }) => (
                <>
                    <DisclosureButton
                        className={`flex items-center p-3 gap-x-4 text-white rounded-lg
                            ${open ? "bg-gray-700" : "bg-transparent hover:bg-gray-600"}
                        `}
                    >
                        {icon || (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 flex-shrink-0">
                            <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z" clipRule="evenodd" />
                        </svg>
                        )}

                        <span className="text-sm font-medium truncate">
                            {name}
                        </span>

                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 20 20" 
                            fill="currentColor" 
                            className={`w-5 h-5 flex-shrink-0 ml-auto transform transition-transform ${!open ? ' -scale-y-100' : ''}`}
                        >
                            <path fillRule="evenodd" d="M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z" clipRule="evenodd" />
                        </svg>
                    </DisclosureButton>

                    <Transition
                        enter="duration-200 ease-out"
                        enterFrom="opacity-0 -translate-y-6"
                        enterTo="opacity-100 translate-y-0"
                        leave="duration-300 ease-out"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 -translate-y-6"
                    >
                        <DisclosurePanel className="flex flex-col py-2">
                            {dropdownMenu.map((menu, i) => {
                                return (
                                    <button 
                                        key={i}
                                        className="bg-transparent hover:bg-gray-600 flex items-center p-3 gap-x-4 text-sm text-gray-400 hover:text-white rounded-lg transition-colors focus:outline-none" 
                                        onClick={menu.onClick}
                                    >
                                        <span className="uppercase">{menu.name.substring(0, 1)}</span>        

                                        <span className="font-normal truncate">
                                            {menu.name}
                                        </span>
                                    </button>
                                )
                            })}
                        </DisclosurePanel>
                    </Transition>
                </>
            )}
        </Disclosure>
    )
}