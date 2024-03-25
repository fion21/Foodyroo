// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created by
      <i className="fa-solid fa-heart"></i>
      <a href="https://www.linkedin.com/in/fiolalewis/" target="_blank">
        Fiona Lewis
      </a>
      <i className="fa-solid fa-copyright"></i>
      {year}
      <strong>
        Foody <span> Foody App</span>
      </strong>
    </div>
  );
};

export default Footer;
