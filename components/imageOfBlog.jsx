import Image from 'next/image'
import Link from 'next/link'

export default function ImageOfBlog({ height, width, alt, src, uid }) {

    const myImage = (
        <Image
            height={height}
            width={width}
            alt={alt}
            src={src}
            loading='lazy'
        />
    )

    return (
        <>{uid ? (<Link href={`/post/${uid}`}>{myImage}</Link>)
            : myImage
        }</>
    )
}