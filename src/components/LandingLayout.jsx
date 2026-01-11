import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';

function LandingLayout() {
    return (
        <>

            <div >
                {/* Navigation Header */}
                <Header />

                {/* Main Content */}
                <main >
                    <Outlet />
                </main>

                {/* Footer */}
                <Footer />
            </div>

        </>
    )
}

export default LandingLayout;