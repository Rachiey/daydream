import '../app/globals.css'; // Import your global styles
import type { AppProps } from 'next/app';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'; // Import the HTML5 drag-and-drop backend

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DndProvider backend={HTML5Backend}>  {/* Wrap the component in DndProvider */}
      <Component {...pageProps} />
    </DndProvider>
  );
}

export default MyApp;
