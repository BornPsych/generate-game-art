import React from 'react';
import { createRoot } from 'react-dom/client';

import Example from './example';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Example />);
