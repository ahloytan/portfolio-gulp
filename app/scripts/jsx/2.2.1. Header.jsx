class Header extends React.Component {
  constructor(props) {
    super(props);
    //https://reactjs.org/docs/faq-functions.html
    this.dir =  "app/images_doc/logo/";
    this.state = {
      imgSrc: ($(window).width() < 769) ? this.dir + "logoM.png" : this.dir + "logo.png",
      count: 1
    };
  }

  activate() {
  }
  checkChangeImg(dir){
    $(window).resize(function() {
      ($(window).width() < 768) ? $('.headerLogo').attr('src', dir + 'logoM.png') : $('.headerLogo').attr('src', dir + 'logo.png');
    });
  }
  render() {
    var pages = ["home", "bio", "about", "portfolio", "contact"]
    var doLoop = pages.map((d, i) => {
      return <div key={i} onClick={() => this.props.clickScroll(d)}>{d}</div>;
    });

    {this.checkChangeImg(this.dir)}

    return (<div className="header">
    <div className="navBar">
      {/*https://snowball.digital/blog/responsive-images-in-react-with-srcset*/}
        <img className="headerLogo" src={this.state.imgSrc} onClick={() => this.activate()}/> {doLoop}
      </div>
    </div>);
  }
}
