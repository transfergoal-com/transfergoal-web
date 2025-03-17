import Link from 'next/link';

export const HelloWorld = () => {
    return (
        <div className="text-2xl text-black">
            <div>Hello world</div>
            <Link href={`/player/123434`} className="underline">
                Go to post page
            </Link>
        </div>
    );
};
