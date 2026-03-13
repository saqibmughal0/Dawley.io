// "use client";

// import { Provider } from "react-redux";
// import { store } from "./index";

// export default function ReduxProvider({ children }) {
//   return <Provider store={store}>{children}</Provider>;
// }

"use client"; // MUST be at the top

import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

export default function ReduxProvider({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}

