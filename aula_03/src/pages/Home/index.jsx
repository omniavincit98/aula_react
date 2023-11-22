import { Footer } from '../../components/footer/footer'
import { MainText } from '../../components/mainText/mainText'
import { SubText } from '../../components/subText/subText'
import { Title } from '../../components/title/title'
import imagem from './img1.png'
import './styles.js'
import { HomeStyled } from './styles.js'

export function Home() {
    return (
        <>
            <HomeStyled />
            <main>
                <img src={imagem} alt="" />
                <Title />
                <MainText />
                <SubText />
            </main>
            <Footer />
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1024 104">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1024 0L981.333 13.4815C938.667 26.963 853.333 53.9259 768 55.8519C682.667 57.7778 597.333 34.6667 512 23.1111C426.667 11.5556 341.333 11.5556 256 15.4074C170.667 19.2593 85.3333 26.963 42.6666 30.8148L0 34.6667V104H42.6666C85.3333 104 170.667 104 256 104C341.333 104 426.667 104 512 104C597.333 104 682.667 104 768 104C853.333 104 938.667 104 981.333 104H1024V0Z" fill="#3F3D56" />
            </svg>
        </>
    )
}