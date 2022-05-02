import Image from 'next/image';
import LogoInferior from '../../assets/images/Logo_P4.png';
import ImagenBarraInferior from '../../assets/images/bottom-bg.png';
export const MenuFooter = () => {
  return (

<>
    <section className="bottom-background">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="bottom-background__img"> <Image alt="footerLogo" src="https://firebasestorage.googleapis.com/v0/b/quetions-app.appspot.com/o/bottom-bg.png?alt=media&token=46761428-fe6e-478d-af6f-54e32aa0603a" width={500} height={100}  layout="responsive"/></div>
        </div>
      </div>
    </div>
  </section>

    <footer className="footer">
    <div className="container">
        <div className="row">
            <div className="col-sm-6 col-lg-2">
                 <div className='text-center'>
                     <div className="footer-logo"><a className="footer-logo__link"><Image className="" src="https://firebasestorage.googleapis.com/v0/b/quetions-app.appspot.com/o/Logo_P4.png?alt=media&token=eda2e083-e5d7-4bf3-852c-3c1d2406ac79"  width="150" height="150" alt="logo"/></a></div>
                      </div>
                <ul className="footer-socials">
                    <li className="footer-socials__item"><a className="footer-socials__link" href="https://www.facebook.com/Fundación-Soy-Tú-Salud-107327561900263" target="_blank" rel="noreferrer"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li className="footer-socials__item"><a className="footer-socials__link" href="https://www.linkedin.com/in/fundación-soy-tú-salud-845592233/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                    <li className="footer-socials__item"><a className="footer-socials__link" href="https://twitter.com/FundacinSoyTSa1" target="_blank" rel="noreferrer"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li className="footer-socials__item"><a className="footer-socials__link" href="https://www.instagram.com/fundacionsoytusalud/" target="_blank" rel="noreferrer"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                </ul>
                
                
            </div>
            <div className="col-sm-6 col-lg-3">
                <h4 className="footer__title">Contactos</h4>
                <div className="footer-contacts">
                    <p className="footer-contacts__address">Medellin</p>
                    <p className="footer-contacts__phone">Telefono: <a href="tel:+3207148401">+57 320 702 3823</a></p>
                    <p className="footer-contacts__mail">Email: <a href="mailto:soutu@soutu.org">info@soytusalud.org</a></p>
                </div>
            </div>
            <div className="col-sm-6 col-lg-3">
            </div>
            <div className="col-sm-6 col-lg-3">
                <h4 className="footer__title">Te Acompaño</h4>
                <p>Ayúdanos a cambiar la vida de los menos favorecidos en Colombia</p><a className="button footer__button button--filled" href="#">TE ACOMPAÑO</a>
            </div>
        </div>
        <div className="row align-items-baseline">
            <div className="col-md-6">
                <p className="footer-copyright">Copyrights Soy Tú © 2022. Todos los derechos reservado.</p>
            </div>
            
        </div>
    </div>
</footer>

</>
  )
}
