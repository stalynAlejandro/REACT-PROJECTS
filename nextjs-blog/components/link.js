import Link from 'next/link'

const CustomLink = ({ name, url }) => (
    <li>
        <Link href={url}>
            <a>
                {name}
            </a>
        </Link>
    </li>
)

export default CustomLink