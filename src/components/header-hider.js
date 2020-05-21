import React from 'react';
import Header from './header'

class Navbar extends React.Component {
    state = {
      auth: false,
      slide: 0,  // How much should the Navbar slide up or down
      lastScrollY: 0,  // Keep track of current position in state
    };
  
    componentWillMount() {
      // When this component mounts, begin listening for scroll changes
      window.addEventListener('scroll', this.handleScroll);
    }
  
    componentWillUnmount() {
      // If this component is unmounted, stop listening
      window.removeEventListener('scroll', this.handleScroll);
    }
  
    handleScroll = () => {
      const { lastScrollY } = this.state; 
      const currentScrollY = window.scrollY;
  
  
      if (currentScrollY > lastScrollY) {
        this.setState({ slide: '-100px' });
      } else {
        this.setState({ slide: '0px' });
      }
      this.setState({ lastScrollY: currentScrollY });
    };
  
     render() {    
      return (
        <Header
          style={{
            transform: `translate(0, ${this.state.slide})`,
            transition: 'transform 90ms linear',
          }}
        />
       );
     }
   }

export default Navbar;