import { Disclosure} from '@headlessui/react'

const navigation = [
  { name: 'Accueil', href: '/', current: true },
  { name: 'Biographie', href: '/bio', current: false },
  { name: 'Projets', href: '/projets', current: false },
  { name: 'Distributions', href: '/dist', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export const NavBar = () => {
        return (
            <Disclosure as="nav" className="bg-gray-800 h-20">
            {({ open }) => (
                <>
                <div className="mx-auto max-w-8xl px-4 sm:px-8 lg:px-16">
                    <div className="relative flex h-20 items-center justify-between" >
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                        <img
                            className="h-16 w-auto"
                            src="../images/tux.ico"
                            alt="Tux"
                        />
                        </div>
                        <div className="hidden sm:ml-6 py-4 sm:block">
                        <div className="flex space-x-3">
                            {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 py-2.5 hover:text-white',
                                'rounded-md px-5 py-2 text-sm font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </a>
                            ))}
                        </div>
                        </div>
                    </div>
                    </div>
                </div>


                </>
            )}
            </Disclosure>
        )
        }