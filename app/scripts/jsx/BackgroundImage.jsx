//http://jsfiddle.net/QN9cH/1/
class BackgroundImage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var bgDir = "app/images_doc/background/"
    var bgImageStyle = {
      backgroundImage: ($(window).width() < 1400) ? "url(" + bgDir + this.props.input + "M.jpg)" : "url(" + bgDir + this.props.input + ".jpg)"
    };

    return (<div className= {"bgHolder" + this.props.input}><div className="backgroundImage" style={bgImageStyle}></div></div>);
  }
}
