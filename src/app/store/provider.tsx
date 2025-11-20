'use client';

import { Provider } from 'react-redux';
import { store } from './store';

interface ProvidersProps {
  children: React.ReactNode;
}

/**
 * -------------------------------------------------------------------
 * Providers Component
 * -------------------------------------------------------------------
 * This component wraps your entire Next.js client-side application
 * with the Redux <Provider>. This makes the Redux store available
 * to all components in the component tree.
 *
 * Why 'use client'?
 * - Next.js App Router defaults to Server Components.
 * - Redux requires access to the browser (stateful, event-based).
 * - Therefore, the Provider **must** be a Client Component.
 *
 * Usage:
 * Place <Providers> in layout.tsx so your entire app gets the store.
 * 
 * Example (layout.tsx):
 * <html>
 *   <body>
 *     <Providers>
 *       {children}
 *     </Providers>
 *   </body>
 * </html>
 *
 * This ensures Redux (including RTK Query) works globally.
 * -------------------------------------------------------------------
 */
export function Providers({ children }: ProvidersProps) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
