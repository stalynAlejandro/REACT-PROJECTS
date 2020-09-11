import Link from './link'

const Header = () => (
    <header>
        <ul>
            <Link name='Home' url='/'  />
            <Link name='About' url="/about" />
        </ul>
    </header>
)

export default Header