'use client';

import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function VerifyEmail() {
  return (
    <>
      <PageTitle title='Verify - Email | verify your email to otp' />
      <div className='min-h-screen flex items-center justify-center bg-background px-4'>
        <Card className='w-full max-w-md'>
          <CardHeader>
            <CardTitle className='text-3xl font-bold text-center'>
              Verify Your Email
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className='text-sm font-semibold text-muted-foreground text-center mr-4 mb-4'>
              Please enter the 6-digit code sent to your email.
            </p>

            <InputOTP
              maxLength={6}
              pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
              className='justify-between mb-6'
            >
              <InputOTPGroup className='w-full items-center justify-center'>
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <InputOTPSlot
                    key={index}
                    index={index}
                    className='text-xl mr-2 mb-4 border-muted rounded-md w-12 h-12'
                  />
                ))}
              </InputOTPGroup>
            </InputOTP>

            <Button className='w-full'>Verify Email</Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
