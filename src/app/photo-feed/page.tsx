import Image from 'next/image';
import photo7 from './photos/7.jpg';
import wondersImages from './wonders';
import Link from 'next/link';
export default function page() {
  return (
    <div className='relative container max-w-[400px] h-[400px]'>
      {wondersImages.map((image) => (
        <Link href={`/photo-feed/${image.id}`}>
          <Image alt={image.name} src={image.src} />
        </Link>
      ))}
    </div>
  );
}
