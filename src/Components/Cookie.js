import React from 'react';
import cookie from '../assets/Image/cookie.svg'
function Cookie() {
    const [show, setShow] = React.useState(true);

    const acceptCookie = () => {
        localStorage.setItem('radio-cookie', 'true');
        setShow(false);
    }

    React.useEffect(() => {
        if (localStorage.getItem('radio-cookie')) {
            setShow(false);
        }
    }, []);

    const declineCookie = () => {
        localStorage.removeItem('radio-cookie');
        setShow(false);
    }

    return (
        <>
            {show && (
                <div className='py-2 z-20 sticky flex justify-center bottom-0 w-full'>
                    <div className='border-0.5 p-4 w-11/12 md:w-11/12 bg-white justify-center text-center'>
                        <div className='flex items-center justify-between'>
                            <img src={cookie} alt="cookie" className='w-[20px] h-[20px] md:w-[40px] md:h-[40px]' />
                            <p className='text-[9px] sm:text-[12px] w-[230px] sm:w-[350px] md:w-[400px] px-2 md:text-xs'>
                                Our website use cookies. By continuing navigating, we assume your
                                permission to deploy cookies as detailed in our Privacy Policy.
                            </p>
                            <div className='flex  gap-x-1 md:gap-x-4'>
                                <button className='font-base  text-xs text-white px-1 p-2 rounded-md bg-gradient-to-r from-red-700 to-purple-800' onClick={acceptCookie}>Accept <p className="hidden sm:inline-flex">cookies</p></button>
                                <button className='font-base  text-xs text-white px-1 p-2 rounded-md bg-[#d1d5db]' onClick={declineCookie}>Decline</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Cookie