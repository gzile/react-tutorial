const Footer = (props) => {

  return (<footer style={{ backgroundColor: '#75a3b1', width: '100%', textAlign: 'center' }}>
      <p>Copyright {props.year}</p>
    </footer>);
}

export default Footer;