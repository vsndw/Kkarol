'use client';

import { useState, useEffect } from 'react';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { AniMovieLogo } from './icons';
import { ScrollArea } from './ui/scroll-area';

export default function DisclaimerModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasAgreed = localStorage.getItem('hasAgreedToDisclaimer');
    if (hasAgreed !== 'true') {
      setIsOpen(true);
    }
  }, []);

  const handleAgree = () => {
    localStorage.setItem('hasAgreedToDisclaimer', 'true');
    setIsOpen(false);
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent className="p-0 w-[90vw] max-w-md rounded-lg">
        <div className="flex flex-col items-center justify-center p-6 text-center">
            <AniMovieLogo className="h-14 w-14 text-primary mb-4" />
            <AlertDialogHeader>
                <AlertDialogTitle className="text-2xl font-bold">Disclaimer</AlertDialogTitle>
            </AlertDialogHeader>
        </div>
        
        <ScrollArea className="max-h-[50vh] px-6">
            <div className="space-y-4 text-sm text-muted-foreground text-left">
            <p className='font-semibold text-white/80'>
                hej karol kocham cie.
            </p>
            <hr className="my-4 border-t border-b border-t-transparent" />
            <p>
            </p>
            <p>
            </p>
            <p>
            </p>
            
            </div>
        </ScrollArea>

        <AlertDialogFooter className="border-t p-4">
            <Button onClick={handleAgree} className="w-full">
                www letsgo
            </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
