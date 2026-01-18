import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';
import Header2 from './header/Header2.jsx'


function LandingLayout() {
    return (
        <>

            <div >
                {/* Navigation Header */}
                <Header2 />

                {/* Main Content */}
                <main className='pt-20'>
                    <Outlet />
                </main>

                {/* Footer */}
                <Footer />
            </div>

        </>
    )
}

export default LandingLayout;