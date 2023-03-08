import LocaleSwitcher from "./locale-switcher";


export default function Header() {

  return (
    <>
      <header>
        <nav>
          <li><a href="#faqs">FAQS</a></li>
          <li><a href="#apply">APLICÁ</a></li>
        </nav>
        <LocaleSwitcher />
      </header>
      <style jsx>{
        `
          header{
            position: absolute;
            top: 0;
            left: 0;
            z-index: 10;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 100px;
            background-color: #50AEE2;
            color: #152640;
          }
  
          header nav{
            display: flex;
          }
  
          header nav li{
            margin: 0 15px;
            display: inline-block;
            position: relative;
            padding-bottom: 3px;
          }
  
          header nav li:first-child{
            margin-left: 0;	
          }
  
          header nav li:last-child{
            margin-right: 0;	
          }
          
          header nav li a{
            font-family: 'becker-wood-type';
            font-style: normal;
            font-weight: 400;
            font-size: 25px;
            line-height: 46px;
          }

          @media (max-width: 1000px){
            header{
              padding: 15px 50px;
            }
          }
  
  
          @media (max-width: 700px){
            header h2{
              margin-bottom: 15px;
            }
          }
            `}
      </style>
    </>
  )
}