import { FaDiscord, FaTwitter, FaTwitch} from 'react-icons/fa';

export const SocialLinks = () => {
    return(
        <section className="mt-5">
            <h3 className="font-extrabold flex justify-center text-2xl">Mes réseaux sociaux</h3>

            <ul className="mt-5">
                <li className='flex items-center hover:text-[#14E9B2]'><FaTwitter className='mr-1.5'/> <a className="hover:underline font-bold" href="https://twitter.com/alxtoo_">Twitter</a></li>
                <li className='flex items-center hover:text-[#8C14E9]'><FaTwitch className='mr-1.5'/> <a className="hover:underline font-bold" href="https://twitch.tv/ialexito_">Twitch</a></li>
                <li className='flex items-center hover:text-[#141EE9]'><FaDiscord className='mr-1.5'/> <a className="hover:underline font-bold" href="https://discord.gg/H324rWvJfT">Discord</a></li>
            </ul>
        </section>
    )
}