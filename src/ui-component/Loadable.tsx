import { ComponentType, Suspense } from 'react';

// project imports
import Loader from './Loader';

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

// Define the type for the component
type LoadableComponent<P> = ComponentType<P>;

// Define the type for the props of the component
type LoadableProps<P> = P;

const Loadable =
  <P extends Record<string, unknown>>(Component: LoadableComponent<P>): ComponentType<LoadableProps<P>> =>
  (props: LoadableProps<P>) => (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );

export default Loadable;
