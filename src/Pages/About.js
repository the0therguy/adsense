import AdComponent from "../Components/AdComponent";
import GoogleAdRaw from "../Components/GoogleAdRaw";
import CookieConsent, {OPTIONS} from "react-cookie-consent";
import {useCookies} from "react-cookie";

const About = () => {
    const [cookies, setCookie] = useCookies(['myCookie']);

    setCookie('myCookie', 'myValue', { path: '/' });
    console.log(cookies)
    return (
        <>
            <h1>HI</h1>
            <CookieConsent
                debug={true}
                disableStyles={true}
                location={OPTIONS.BOTTOM}
                buttonClasses="btn btn-primary"
                containerClasses="alert alert-warning col-lg-12"
                contentClasses="text-capitalize"
            >
                This website uses cookies to enhance the user experience.{" "}
                <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>
            </CookieConsent>
            <div
                className="justify-self-center xs:block md:block lg:block xs:col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4 w-[300px] md:w-[300px] lg:w-[418px] p-2 md:px-[59px] md:py-[41.5px] lg:border-0.5 h-[333px]">
                <div className="bg-gray-200 h-full md:h-[250px] md:w-[300px]">
                    <AdComponent/>
                </div>
                <p style={{fontSize: '10px'}} className="font-light text-right pt-2 text-gray-300">
                    ADVERTISEMENT
                </p>
            </div>
            <div>
                <div className="bg-gray-200 h-full md:h-[250px] md:w-[300px]">
                    <GoogleAdRaw/>
                </div>
                <p style={{fontSize: '10px'}} className="font-light text-right pt-2 text-gray-300">
                    ADVERTISEMENT
                </p>
            </div>
        </>
    )
}
export default About