import LocaleSwitcher from "./locale-switcher";


export default function Header() {

    return (
        <>
            <header>
                <nav>
                    <li><a href="https://t.me/+2nijw5YHq_hjODkx" target="_blank" rel="noopener noreferrer">Telegram</a></li>
                    <li><a href="https://twitter.com/etherargentina?s=11&t=j_w3njfNO2boGMHoQgfS3Q" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                </nav>
                <LocaleSwitcher />
            </header>
            <style jsx>{
                `
            /*-------------
            Header
          -------------*/
  
          header{
            position: absolute;
            top: 0;
            left: 0;
            z-index: 10;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #fff;
            padding: 35px 100px 0;
            background-color: #5989BD;
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
  
          header nav li::after {
            content: '';
            position: absolute;
            width: 100%;
            transform: scaleX(0);
            height: 1px;
            bottom: 0;
            left: 0;
            background-color: #fff;
            transform-origin: bottom right;
            transition: transform 0.25s ease-out;
          }
          
          header nav li:hover::after {
            transform: scaleX(1);
            transform-origin: bottom left;
          }
  
          @media (max-width: 1000px){
            header{
              padding: 20px 50px;
            }
          }
  
  
          @media (max-width: 700px){
            header{
              flex-direction: column;		
            }
  
            header h2{
              margin-bottom: 15px;
            }
          }
            `}
            </style>
        </>
    )
}