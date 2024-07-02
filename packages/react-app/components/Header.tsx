import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="bg-[#F3F3F3]">
    <div className="max-w-3xl mx-auto py-3 px-2">
        <div className="space-y-3 items-center justify-center">
            <Link href={'/'}>
                <Image
                    className="block h-8 w-auto"
                    src="/logo.svg"
                    width="24"
                    height="24"
                    alt="Carus Logo"
                />
            </Link>
            <div className="">
                {/* Nav content */}
            </div>
            <div className="flex items-center">
                {/* {!hideConnectBtn && (
                            <ConnectButton />
                        )} */}
            </div>
        </div>
    </div>
</div>
  );
}

declare global {
  interface Window {
    ethereum: any;
  }
}
