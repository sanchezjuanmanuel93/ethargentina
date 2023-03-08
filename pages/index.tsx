import Head from 'next/head'
import { Header } from "../components/header"
import { useTranslation, Trans } from 'next-i18next'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'
import logo from '../public/assets/home/logo.svg'
import art from '../public/assets/home/services/arte.png';
import mate from '../public/assets/home/services/mate.png';
import comida from '../public/assets/home/services/comida.png';
import relax from '../public/assets/home/services/relax.png';
import juego from '../public/assets/home/services/juego.png';
import workshop from '../public/assets/home/services/workshop.png';

interface Props {

}

const Home = (
  _props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const { t } = useTranslation('home');

  return (
    <>
      <Head>
        <title>ETH Argentina</title>
        <meta name="description" content="Ethereum argentina website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section className="home">
        <Image
          alt="Logo"
          src={logo}
        />
        <h3>{t('subTitle')}</h3>
        <h1>{t('title')}</h1>
        <span className='home-date'>{t('eventDate')}</span>
      </section>

      <section className="services">
        <h3>El evento más grande de argentina</h3>
        <ul className="grid">
          <li>
            <Image alt='Arte' src={art} width={150} />
            <h4>Arte</h4>
          </li>
          <li>
            <Image alt='Mate' src={mate} width={150} />
            <h4>Mate</h4>
            <h4>Coffee</h4>
          </li>
          <li>
            <Image alt='Comida' src={comida} width={150} />
            <h4>Comida</h4>
          </li>
          <li>
            <Image alt='Relax' src={relax} width={150} />
            <h4>Relax</h4>
          </li>
          <li>
            <Image alt='Juegos' src={juego} width={150} />
            <h4>Juegos</h4>
          </li>
          <li>
            <Image alt='Workshops' src={workshop} width={150} />
            <h4>Workshops</h4>
          </li>
        </ul>
      </section>

      <section className="be-part">
        <h1>Aplica</h1>
        <h3>Formá parte del evento más grande de Argentina</h3>
        <div>
          <a href="#"><span>Sponsors</span></a>
          <a href="#"><span>Voluntarios</span></a>
          <a href="#"><span>Speakers</span></a>
        </div>
      </section>

      <section className="location">
        <h3>Agosto 16 al 19 2023</h3>
        <h4>En el CEC Centro de convenciones de Buenos Aires</h4>
      </section>

      <section className="more-information">
        <h3>Más info en breve</h3>
      </section>

      <footer>
        <ul>
          <li>Telegram</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>
      </footer>
      <style jsx>{`
        *{
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html{
          font: normal 16px sans-serif;
          color: #555;
        }

        ul, nav{
          list-style: none;
        }

        a{
          text-decoration: none;
          color: inherit;
          cursor: pointer;

          opacity: 0.9;
        }

        a:hover{
          opacity: 1;
        }

        a.btn{
          color: #fff;
          border-radius: 4px;
          text-transform: uppercase;
          background-color: #2196F3;
          font-weight: 800;
          text-align: center;
        }

        hr{
          width: 150px;
          height: 2px;
          background-color: #2196F3;
          border: 0;
          margin-bottom: 80px;
        }

        section{
          display: flex;
          flex-direction: column;
          align-items: center;

          padding: 125px 100px;
        }

        @media (max-width: 1000px){

          section{
            padding: 100px 50px;
          }

        }

        @media (max-width: 600px){

          section{
            padding: 80px 30px;
          }

        }

        section h3.title{
          color: #414a4f;
          text-transform: capitalize; 
          font: bold 32px;
          margin-bottom: 35px;
          text-align: center;
        }

        section p{
          max-width: 800px;
          text-align: center;
          margin-bottom: 35px;
          padding: 0 20px;
          line-height: 2;
        }

        ul.grid{
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }

        /*----------------
          Home Section
        ----------------*/

        .home{
          position: relative;
          justify-content: center;
          min-height: 100vh;
          color: #fff;
          text-align: center;
          background-color: #fff;
          background-image: url('assets/home/background-bottom.png');
          background-position: bottom;
          background-repeat: no-repeat;
          background-size: 100%;
        }

        .home h1{
          font: bold 60px 'becker-wood-type';
          margin-bottom: 15px;
          letter-spacing: .2rem;
          color: #74ACDF;
        }

        .home h3{
          font-family: 'futurist-fixed-width';
          font-style: normal;
          font-weight: 5;
          font-size: 40px;
          line-height: 107.5%;
          text-align: center;
          letter-spacing: 0.055em;
          color: #000000;
        }

        .home .home-date{
          font-family: 'futurist-fixed-width';
          font-style: normal;
          font-weight: 5;
          font-size: 20px;
          line-height: 50px;
          text-align: center;
          color: #1A6D92;
        }

        .home a.btn{
          padding: 20px 46px;
          background-color: #FFF;
          color: #5989BD;
        }

        @media (max-width: 800px){

          .home{
            min-height: 600px;
          }

          .home h1{
            font-size: 48px;
          }

          .home h3{
            font-size: 18px;
          }

          .home a.btn{
            padding: 15px 40px;
          }

        }

        @media (max-width: 600px){

          .home h3 {
            margin-top: 50px;
          }

        }

        /*-------------
          Services
        -------------*/
        .services{
          background-color: #0B1628;
        }

        .services h3{
            font: bold 60px 'becker-wood-type';
            font-style: normal;
            font-weight: 400;
            font-size: 36px;
            line-height: 49px;
            text-align: center;
            letter-spacing: 0.08em;
            color: #FFFFFF;
            mix-blend-mode: hard-light;
            padding-bottom: 50px;
        }

        .services .grid{
          display: flex;
          justify-content: space-around;
        }

        .services .grid li{
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-wrap: nowrap;
        }

        .services .grid li h4{
          font-family: 'futurist-fixed-width';
          font-style: normal;
          font-weight: 5;
          font-size: 1rem;
          line-height: 30px;
          text-align: center;
          color: #B4F4FE;
        }
        
        @media (max-width: 1200px){
        
          .services .grid{
            display: grid;
            grid-template-columns: auto auto auto;
            grid-gap: 10px;
          }

          .services .grid li{
            margin-bottom: 65px;
          }
        
          .services .grid li:last-child{
            margin-bottom: 0;
          }
        
        }

        @media (max-width: 600px){
        
          .services .grid {
            display: flex;
            flex-basis: 100%;
          }
        
        }

        /*-------------
        Be part
      -------------*/
        .be-part{
          background-color: #0B1628;
        }

        .be-part h1{
          font: bold 60px 'becker-wood-type';
          font-style: normal;
          font-weight: 400;
          font-size: 60px;
          line-height: 101px;
          text-align: center;
          color: #B4F4FE;
        }

        .be-part h3{
          margin-top: 50px;
          font-family: 'futurist-fixed-width';
          font-style: normal;
          font-weight: 5;
          font-size: 25px;
          line-height: 40px;
          text-align: center;
          color: #B4F4FE;
          width: 60%;
        }

        .be-part div{
          margin-top: 50px;
          display: flex;
          border: 1px solid #B4F4FE;
          border-radius: 53.5px;
          width: 75%;
          justify-content: space-between;
          padding: 5px;
        }

        .be-part div span{
          background: #50AEE2;
          font-family: 'futura-md-bt';
          font-style: normal;
          font-weight: 700;
          font-size: 25px;
          line-height: 43px;
          text-align: center;
          background-color: #0B1628;
          padding: 5px;
          border-radius: 53.5px;
        }

        .be-part div span:hover{
          background: #50AEE2;
          color: #0B1628;
          border-radius: 53.5px;
        }

        @media (max-width: 800px){
          .be-part div span{
            font-size: 1rem;
            padding: 3px;
          }
          .be-part div{
            padding: 3px;
          }
        }
        /*-------------
        Location
        -------------*/     
        .location{
          background-color: #74ACDF;
        }

        .location h3{
          margin-top: 50px;
          font-family: 'futurist-fixed-width';
          font-style: normal;
          font-weight: 5;
          font-size: 25px;
          line-height: 40px;
          text-align: center;
          color: #0B1628;
          width: 60%;
        }

        .location h4{
          font-family: 'futurist-fixed-width';
          font-style: normal;
          font-weight: 5;
          font-size: 20px;
          line-height: 31px;
          text-align: center;
          color: #0B1628;
          mix-blend-mode: hard-light;
          width: 50%;
          margin-top:50px;
        }

        /*-------------
          More Information
        -------------*/
        .more-information{
          background-color: #152640;
        }

        .more-information h3{
          font: bold 60px 'becker-wood-type';
          font-style: normal;
          font-weight: 400;
          font-size: 36px;
          line-height: 49px;
          text-align: center;
          letter-spacing: 0.08em;
          color: #FFFFFF;
          mix-blend-mode: hard-light;
        }
        
        /*-------------
          Footer
        -------------*/

        footer{
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          color: #fff;
          background-color: #0B1628;
          padding: 60px 0;
        }

        footer ul{
          display: flex;
          margin-bottom: 25px;
          font-size: 32px;
        }

        footer ul li{
          margin: 0 8px;	
        }

        footer ul li:first-child{
          margin-left: 0;	
        }

        footer ul li:last-child{
          margin-right: 0;	
        }

        footer p{
          font-size: 14px;
          color: #FFF;
          margin-bottom: 10px;
        }

        footer p a{
          color: #fff;
        }

        @media (max-width: 700px){

          footer{
            padding: 80px 15px;
          }

        }
        `}</style>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['home'])),
  },
})


export default Home;