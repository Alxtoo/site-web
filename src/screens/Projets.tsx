import { BsLink45Deg } from 'react-icons/bs'

export const Projets = () => {
    return (
        <main>
            <h3 className="font-extrabold text-3xl flex justify-center mb-4">Projets</h3>
            <ul>
                <li className='flex items-center'><BsLink45Deg className='mr-1.5'/> <a href="https://python.org/">Python</a></li>
                <li className='flex items-center'><BsLink45Deg className='mr-1.5'/> <a href="https://github.com/">GitHub</a></li>
            </ul>
        </main>
    )
}