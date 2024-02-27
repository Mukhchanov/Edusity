import React from 'react';
import './styles/_index.scss';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Title from './components/Title';
import About from './components/About';
import Campus from './components/Campus';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <div className="container">
                <Title subtitle={'our program'} title={'What We Offer'} />
                <Programs />
                <About />
                <Title subtitle={'gallery'} title={'Campus Photos'} />
                <Campus />
                <Title subtitle={'testimonials'} title={'What Student Says'} />
                <Testimonials />
                <Title subtitle={'contact us'} title={'Get in Touch'} />
                <Contact />
                <Footer />
            </div>
        </div>
    )
};

export default App;