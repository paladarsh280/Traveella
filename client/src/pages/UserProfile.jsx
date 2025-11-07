
import React from 'react';
import NavbarAfterloggedin from '../components/afterLoggedInPage/navbarafterloggedin';
import user_profileintro from '../images/user_profileintro.png';
import user_profile from '../images/user_profile.png';
import Footer from '../components/common/Footer.jsx';
import UserForm from '../components/userProfilePage/UserForm.jsx';
import curveline from '../images/curveline.png';
import Recommendation from '../components/afterBeforeCommon/Recommendation.jsx';
import logout from "../images/logout.png";
import ResetPassword from '../images/ResetPassword.png'
import user_profileimg2 from '../images/user_profileimg2.png';
import user_profileimg3 from '../images/user_profileimg3.png';
import Envelopes from '../images/Envelopes.png';
import ReviewSection from '../components/userProfilePage/ReviewSection.jsx';
import NewsletterAndReview from '../components/blogsFullPage/NewsLetterAndReview.jsx';
export default function UserProfile() {
    return (
        // Root container: w-full aur overflow-x-hidden responsiveness ke liye zaroori hai
        <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center justify-start font-inter overflow-x-hidden">
            <NavbarAfterloggedin />

            {/* Main content wrapper: Yeh content ko center mein rakhega aur badhe screens par zyada failne se rokega */}
            <div className="w-full max-w-7xl mx-auto">
                <img
                    src={user_profileintro}
                    alt="User Profile"
                    className="w-full object-cover block h-44 sm:h-56 md:h-72 lg:h-80 xl:h-96 mt-2 sm:mt-4 md:mt-5 lg:mt-5"
                />
                <div className="relative">
                    {/* Profile image position: Yeh pehle se responsive tha, accha kaam! */}
                    <div className="absolute left-4 sm:left-8 md:left-12 lg:left-16 -top-12 sm:-top-24 md:-top-28 lg:-top-32">
                        <div className="h-20 w-20 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-44 lg:w-44 bg-white rounded-full overflow-hidden border-4 border-gray-100">
                            <img
                                src={user_profile}
                                alt="User Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* User Info section: padding ke liye px-4 sm:px-8 add kiya */}
                <div className="flex flex-wrap items-center justify-between mt-12 sm:mt-20 px-4 sm:px-8 gap-4">
                    <h1 className="font-bold text-lg sm:text-2xl">Hello User !!</h1>
                    <button className="inline-flex items-center gap-1 px-3 py-2 sm:px-4 sm:py-2 bg-white text-black rounded-md hover:text-gray-600 hover:bg-gray-200 transition-colors duration-200 font-semibold border border-black">
                        Edit
                        {/* Responsive text: mobile par "Profile", desktop par " Profile" */}
                        <span className="hidden sm:inline"> Profile</span>
                        <span className="sm:hidden">Profile</span>
                    </button>
                </div>

                {/* Colored bars: Padding add ki gayi */}
                <div className="flex gap-2 mt-4 px-4 sm:px-8 justify-start w-full">
                    <div className="h-4 w-12 rounded-full bg-blue-500"></div>
                    <div className="h-4 w-12 rounded-full bg-red-500"></div>
                    <div className="h-4 w-12 rounded-full bg-yellow-500"></div>
                    <div className="h-4 w-12 rounded-full bg-green-500"></div>
                </div>
            </div>

            {/* Form ko bhi main container ki tarah constrain kiya */}
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 mt-4">
                <UserForm />
            </div>




            <div className='flex flex-col md:flex-row items-center justify-center md:justify-evenly w-full max-w-5xl mx-auto gap-4  '>
                {/* Blue Box */}
                <div className='lg:h-[82px] sm:h-full md:h-full  w-full md:flex-1 bg-[#6C63FF73] rounded-lg'></div>

                {/* Buttons container */}
                <div className='flex flex-col sm:flex-row gap-4 w-full md:w-auto'>
                    {/* Logout Button: flex-inline ko inline-flex kiya */}
                    <button className='inline-flex items-center justify-center gap-3 h-[60px] w-full sm:w-[170px] text-white  bg-black rounded-2xl px-4'>
                        <img
                            src={logout}
                            alt="logout"
                            className='h-[35px] w-[30px] sm:h-[25px] sm:w-[35px] md:h-[25px] md:w-[40px] lg:h-[40px] lg:w-[45px]'
                        />
                        <p className='text-white text-2xl'>Log Out</p>
                    </button>

                    {/* Reset Password Button: flex-inline ko inline-flex kiya */}
                    <button className='inline-flex items-center justify-center gap-3 h-[60px] w-full sm:w-auto text-white  bg-black rounded-2xl px-4'>
                        <img src={ResetPassword} alt="Reset Password" className='h-[30px] w-[50px] object-contain' />
                        <p className='text-white text-xl'>Reset Password</p>
                    </button>
                </div>
            </div>
            {/*        
            <div className=' w-full max-w-5xl flex justify-evenly bg-[#DDD3EC] mt-[50px] space-y-4'>
                <div className='mt-[60px] ' >
                    <p className='text-2xl font-bold text-black '>7 Reasons to Plan a Trip to Lowa in 2024</p>
                    <p className='text-lg text-[#05073C] mt-5 mb-5'>River cruises, railroad adventures, and Frank Lloyd Wright architecture.</p>
                    <button className='w-[130px] h-[60px] bg-[#05073C] text-white rounded-2xl '>Read more </button>
                </div>
                <img src={user_profileimg2} alt={user_profileimg2} className='w-[450px] translate-x-3'/>

            </div> */}
            <div className='w-full max-w-5xl flex flex-col md:flex-row justify-between items-stretch bg-[#DDD3EC] mt-8 md:mt-[50px]'>
                <div className='flex items-center p-6 md:pl-12 md:py-[60px] text-center md:text-left max-w-md'>
                    <div>
                        <p className='text-xl sm:text-2xl font-bold text-black'>7 Reasons to Plan a Trip to Lowa in 2024</p>
                        <p className='text-base sm:text-lg text-[#05073C] mt-3 sm:mt-5 mb-4 sm:mb-5'>River cruises, railroad adventures, and Frank Lloyd Wright architecture.</p>
                        <button className='w-[130px] h-[60px] bg-[#05073C] text-white rounded-2xl hover:bg-opacity-90 transition-opacity'>Read more</button>
                    </div>
                </div>
                <img src={user_profileimg2} alt={user_profileimg2} className='w-full md:w-auto md:max-w-[450px] h-64 md:h-auto object-cover' />
            </div>



            {/* Recommendation ko bhi constrain kiya */}
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 mt-8">
                <Recommendation />
            </div>

            <NewsletterAndReview/>

<div className='m-8'> <ReviewSection/>
        </div>
               
            {/* Footer: w-screen se w-full kiya */}
            <div className='w-full mt-8'>
                <Footer />
            </div>

        </div>
    );
}
