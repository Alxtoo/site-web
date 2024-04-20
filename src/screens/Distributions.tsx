import { BsLink45Deg } from 'react-icons/bs'

export const Distributions = () => {
    return (
        <main>
            <h3 className="font-extrabold text-3xl flex mb-4">Distributions</h3>
            <div className='container flex items-center bg-gray-800 rounded-lg'>
                <div className='ubuntu box-border h-auto w-128 p-8 hover:bg-gray-700'>
                    <div className='hidden text'>testing</div>
                    <img src='images/ubuntu-logo.png' alt='ubuntu'></img>
                    <div className='text-center p-8 font-bold'>Ubuntu</div>
                </div>
                <div className='debian box-border h-auto w-128 p-8 hover:bg-gray-700'>
                    <img src='images/debian-logo.png' alt='debian'></img>
                    <div className='text-center p-8 font-bold'>Debian</div>

                </div>
                <div className='arch box-border h-auto w-128 p-8 hover:bg-gray-700'>
                    <img src='images/arch-logo.png' alt='arch'></img>
                    <div className='text-center p-8 font-bold'>Arch</div>
                </div>
                <div className='kali box-border h-auto w-128 p-8 hover:bg-gray-700'>
                    <img src='images/kali-logo.png' alt='kali'></img>
                    <div className='text-center p-8 font-bold'>Kali</div>
                </div>

            </div>
        </main>
    )
}