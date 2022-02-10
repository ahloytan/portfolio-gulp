//https://www.tutorialspoint.com/reactjs/reactjs_components.htm
class App extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        "flaticon": "https://www.flaticon.com/"
      }
    }
    showOverlay() {
      $(".menuOverlay").toggleClass("visible");
      $('.cd-menu-icon').toggleClass('is-clicked');
      // $('body').toggleClass("hideExcess");
    }

    render() {
      return (
        <main className = "siteContainer">
        <HBGMenu overlay={this.showOverlay}/>
        <SlideIn/>
        <Portfolio/>
        <BackgroundImage input="paris"/>
        <Bio title = {this.state.flaticon}/>
        <BackgroundImage input="rome"/>
        <About/>
        <BackgroundImage input="hongkong"/>
        <Contact/>
        </main>);
      }
    }
