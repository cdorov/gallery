import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import React from 'react'

export default function TopNav() {
    return (
      <nav className="flex items-center justify-between border-b w-full p-4 text-xl">
        <div>Gallery</div>

        <div>
            <SignedOut>
                <SignInButton></SignInButton>
            </SignedOut>
            <SignedIn>
                <UserButton></UserButton>
            </SignedIn>
        </div>
      </nav>
    )
  }