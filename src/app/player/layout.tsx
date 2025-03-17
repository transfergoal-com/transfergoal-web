import { ReactNode } from 'react';

export default function PlayerPageLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return <div className="my-0 mx-auto max-w-[1140px] flex flex-col items-center">{children}</div>;
}
