import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function TopNav() {
    return (
      <nav className='flex w-full items-center justify-between p-4 text-xl'>
        <Link className='text-white' href='/'>Home</Link>
        <Link className='text-white' href='/about'>About</Link>
        <Link className='text-white' href='/projects'>Projects</Link>
        <div>
            <SignedOut>
                <SignInButton mode='modal' />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
      </nav>
    );
  }