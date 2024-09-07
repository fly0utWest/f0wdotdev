'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { MessageData } from '@/shared/model';
import { ipGrabber } from '../lib/ipGrabber';

const useShoutbox = () => {
  const [message, setMessage] = useState<null | MessageData>({
    text: '',
    userAgent: '',
    ip: '',
  });
  const [failure, setFailure] = useState<null | boolean>(null);
  const [success, setSuccess] = useState<null | boolean>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const sendMessage = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    try {
      const result = await axios.post('/api/sendmessage', { message });

      if (result.status === 200) {
        setFailure(false);
        setSuccess(true);
      } else {
        setSuccess(false);
        setFailure(true);
      }
    } catch (error: unknown) {
      setSuccess(false);
      setFailure(true);
      console.error(error);
    } finally {
      setMessage((prevState) => ({
        ...prevState,
        text: '',
      }));
      setLoading(false);
    }
  };

  useEffect(() => {

    const fetchIp = async () => {
      const ipAddr = await ipGrabber();

      if (ipAddr) {
        setMessage((prevState) => ({ ...prevState, ip: ipAddr }));
      }
    };

    setMessage((prevState) => ({
      ...prevState,
      userAgent: window.navigator.userAgent,
    }));
    fetchIp();
  }, []);

  return {message, failure, success, loading, sendMessage, setMessage };
};

export default useShoutbox;
