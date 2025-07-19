'use client';

import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import PageTitle from '@/components/PageTitle';
import { useState } from 'react';

import { verifyEmailRequest } from '@/api/auth';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';


export default function VerifyEmail() {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();
  const [completed, setCompleted] = useState(true);

  const handleOnComplete = async () => {
    setCompleted(false);
  };

  const handleOnSubmit = async () => {
    try {
      const response = await verifyEmailRequest({
        email: localStorage.getItem('verify_email'),
        otp,
      });

      if (response.success === false) {
        toast.error(response.error);
        setCompleted(true);
        setOtp('');
      } else {
        localStorage.setItem('currentUser', JSON.stringify(response.user));
        localStorage.setItem('token', response.token);
        navigate('/');
        setCompleted(true);
        setOtp('');
        localStorage.removeItem('verify_email');
      }
    } catch (error) {
      toast.error(error.message);
      setCompleted(true);
      setOtp('');
    }
  };

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
              value={otp}
              onChange={(value) => {
                setOtp(value);
                console.log('Current OTP:', value);
              }}
              onComplete={handleOnComplete}
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

            <Button
              disabled={completed}
              className='w-full'
              onClick={handleOnSubmit}
            >
              Verify Email
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
