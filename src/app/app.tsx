import {
  ChakraProvider,
  extendTheme,
  type ThemeConfig,
} from '@chakra-ui/react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { WorkerProvider } from './aligner-worker/AlignerWorker';
import { DimBrightness } from './DimBrightness';
import { CreateCollection } from './import/CreateCollection';
import { MainMenu } from './main-menu/MainMenu';
import { ReadCollection, readCollectionLoader } from './read/ReadCollection';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainMenu />,
  },
  {
    path: 'index.html',
    element: <MainMenu />,
  },
  {
    path: 'import',
    element: <CreateCollection />,
  },
  // {
  //   path: 'sync',
  //   element: <DropBoxSyncPage />,
  // },
  {
    path: 'read/:collectionName',
    element: <ReadCollection />,
    loader: readCollectionLoader,
  },
]);

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <WorkerProvider>
        <RouterProvider router={router} />
      </WorkerProvider>
      <DimBrightness />
    </ChakraProvider>
  );
}

export default App;
