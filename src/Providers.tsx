import React from 'react';
import {AuthProvider} from './shared/AuthProvider';
import {Routes} from './Providers/Routes';

interface ProvidersProps {}

export const Providers: React.FC<ProvidersProps> = ({}) => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};
