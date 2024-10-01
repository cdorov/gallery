"use client"

import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import React from 'react'
import { UploadButton } from '~/utils/uploadthing'

export default function TopNav() {
    const router = useRouter();
    return (
      <nav className="flex items-center justify-between border-b w-full p-4 text-xl">
        <div>Gallery</div>

        <div className='flex flex-row'>
            <SignedOut>
                <SignInButton></SignInButton>
            </SignedOut>
            <SignedIn>
                <UploadButton endpoint="imageUploader" onClientUploadComplete={() => {router.refresh()}} />
                <UserButton></UserButton>
            </SignedIn>
        </div>
      </nav>
    )
  }