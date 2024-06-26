import { useState } from "react";
import { SideNav } from "./components/SideNav";
import { Stats } from "./components/Stats";

const SidenavLinks = [
  {
    menuLinks: [
      {
        name: 'Dashboards',
        dropdownMenu: [
            {
                name: 'Analytics',
                onClick: () => null
            },
            {
                name: 'Sales',
                onClick: () => null
            }
        ]
      }
    ]
  },
  {
    title: 'pages',
    menuLinks: [
      {
        name: 'pages',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clipRule="evenodd" />
          </svg>
        ),      
        dropdownMenu: [
            {
                name: 'Lorem Ipsum 1',
                onClick: () => null
            },
            {
                name: 'Lorem Ipsum 2',
                onClick: () => null
            }
        ]
      },
      {
        name: 'applications',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M2.273 5.625A4.483 4.483 0 0 1 5.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 3H5.25a3 3 0 0 0-2.977 2.625ZM2.273 8.625A4.483 4.483 0 0 1 5.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 6H5.25a3 3 0 0 0-2.977 2.625ZM5.25 9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H15a.75.75 0 0 0-.75.75 2.25 2.25 0 0 1-4.5 0A.75.75 0 0 0 9 9H5.25Z" />
          </svg>

        ),
        dropdownMenu: [
            {
                name: 'Lorem Ipsum 1',
                onClick: () => null
            },
            {
                name: 'Lorem Ipsum 2',
                onClick: () => null
            }
        ]
      },
      {
        name: 'Ecommerce',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
            <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
            <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
          </svg>

        ),
        dropdownMenu: [
            {
                name: 'Lorem Ipsum 1',
                onClick: () => null
            },
            {
                name: 'Lorem Ipsum 2',
                onClick: () => null
            }
        ]
      },
      {
        name: 'Authentication',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M10.5 3A1.501 1.501 0 0 0 9 4.5h6A1.5 1.5 0 0 0 13.5 3h-3Zm-2.693.178A3 3 0 0 1 10.5 1.5h3a3 3 0 0 1 2.694 1.678c.497.042.992.092 1.486.15 1.497.173 2.57 1.46 2.57 2.929V19.5a3 3 0 0 1-3 3H6.75a3 3 0 0 1-3-3V6.257c0-1.47 1.073-2.756 2.57-2.93.493-.057.989-.107 1.487-.15Z" clipRule="evenodd" />
          </svg>
        ),
        dropdownMenu: [
            {
                name: 'Lorem Ipsum 1',
                onClick: () => null
            },
            {
                name: 'Lorem Ipsum 2',
                onClick: () => null
            }
        ]
      }
    ]
  },
  {
    title: 'Docs',
    menuLinks: [
      {
        name: 'Basic',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z" />
            <path fillRule="evenodd" d="M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 0 0 1.11-.71l.822-1.315a2.942 2.942 0 0 1 2.332-1.39ZM6.75 12.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm12-1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
          </svg>

        ),
        dropdownMenu: [
            {
                name: 'Lorem Ipsum 1',
                onClick: () => null
            },
            {
                name: 'Lorem Ipsum 2',
                onClick: () => null
            }
        ]
      },
      {
        name: 'Components',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M12.378 1.602a.75.75 0 0 0-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03ZM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 0 0 .372-.648V7.93ZM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 0 0 .372.648l8.628 5.033Z" />
          </svg>
        ),
        dropdownMenu: [
            {
                name: 'Lorem Ipsum 1',
                onClick: () => null
            },
            {
                name: 'Lorem Ipsum 2',
                onClick: () => null
            }
        ]
      },
      {
        name: 'Change log',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M9.375 3a1.875 1.875 0 0 0 0 3.75h1.875v4.5H3.375A1.875 1.875 0 0 1 1.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0 1 12 2.753a3.375 3.375 0 0 1 5.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 1 0-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3ZM11.25 12.75H3v6.75a2.25 2.25 0 0 0 2.25 2.25h6v-9ZM12.75 12.75v9h6.75a2.25 2.25 0 0 0 2.25-2.25v-6.75h-9Z" />
          </svg>
        ),
        dropdownMenu: [
            {
                name: 'Lorem Ipsum 1',
                onClick: () => null
            },
            {
                name: 'Lorem Ipsum 2',
                onClick: () => null
            }
        ]
      },
    ]
  },  
]

const StatsData = [
  {
    stat: 'Sales',
    date: '6 May - 7 may',
    price: '$230,220',
    increaseValue: '55%'
  },
  {
    stat: 'Customers',
    date: '6 May - 7 may',
    price: '3.200',
    increaseValue: '12%'
  },
  {
    stat: 'Avg.Revenue',
    date: '6 May - 7 may',
    price: '$1.200',
    increaseValue: '$213'
  }
]

function App() {
  const [showSideNav, setShowSideNav] = useState(false)

  return (
    <div className="h-screen flex p-4">
      <SideNav 
        links={SidenavLinks} 
        showSideNav={showSideNav}
        closeSideNav={() => setShowSideNav(false)}
      />

      {/* Main Content Starts Here */}
      <main className="flex flex-col lg:pl-[17.5rem] lg:pr-6 flex-auto">
        {/* Header Section Starts Here */}
        <header className="bg-gray-800 lg:bg-transparent flex items-center p-4 mb-8 rounded-lg">
          <button
            type="button"
            onClick={() => setShowSideNav(true)}
            className="w-8 h-8 bg-transparent inline-flex lg:hidden items-center justify-center text-white focus:outline-none"
          >
            <span className="sr-only">Hamburger Menu For Mobile</span>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
              <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
            </svg>
          </button>

          <div className="ml-auto inline-flex items-center gap-1"> 
            <div className="hidden lg:block mr-2">
              <input 
                type="text"
                placeholder="Search here"
                className="h-10 bg-transparent border border-gray-400 text-sm placeholder:text-gray-500 text-white lg:text-gray-900 p-4 rounded-md focus:outline-none focus:border-white lg:focus:border-indigo-600"
              />
            </div>    

            <button
              className="w-8 h-8 bg-transparent lg:hover:bg-gray-300 inline-flex items-center justify-center text-white lg:text-gray-900 rounded-lg focus:outline-none"
              onClick={() => null}
            >
              <span className="sr-only">User Icon</span>
              
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
              </svg>
            </button>
            
            <button
              className="w-8 h-8 bg-transparent lg:hover:bg-gray-300 inline-flex items-center justify-center text-white lg:text-gray-900 rounded-lg focus:outline-none"
              onClick={() => null}
            >
              <span className="sr-only">Cog Icon</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
            </button>

            <button
              className="w-8 h-8 bg-transparent lg:hover:bg-gray-300 inline-flex items-center justify-center text-white lg:text-gray-900 rounded-lg focus:outline-none"
              onClick={() => null}
            >
              <span className="sr-only">Bell Icon</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
            </button>
          </div>

        </header>
        {/* Header Section Ends Here */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          <Stats 
            statsDetails={StatsData}
          />
        </div>

        <div className="h-[400px] flex-shrink-0 bg-white p-4 rounded-lg shadow-md mb-6">
            <h2 className="text-gray-700 text-base font-semibold">Channels</h2>
        </div>
        <div className="h-[400px] flex-shrink-0 bg-white p-4 rounded-lg shadow-md mb-6">
            <h2 className="text-gray-700 text-base font-semibold">Revenue</h2>
        </div>

        <div className="h-[400px] flex-shrink-0 bg-white p-4 rounded-lg shadow-md mb-6">
            <h2 className="text-gray-700 text-base font-semibold">Sales by age</h2>
        </div>
        <div className="h-[400px] flex-shrink-0 bg-white p-4 rounded-lg shadow-md mb-6">
            <h2 className="text-gray-700 text-base font-semibold">Top Selling Product</h2>
        </div>
      </main>
      {/* Main Content Ends Here */}
    </div>
  )
}

export default App
