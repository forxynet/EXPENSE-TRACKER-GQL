import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import GridBackground from "./components/ui/GridBackground.jsx";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  // TOOD > update the uri on production
  uri:
    import.meta.env.VITE_NODE_ENV === "development"
      ? "http://localhost:4000/graphql"
      : "/graphql", //"http://localhost:4000/graphql",
  cache: new InMemoryCache(), // Apollo Client uses to cache query results after fetching them.
  credentials: "include", // This tells Apollo Client to send along with every request to the server
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <GridBackground>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </GridBackground>
    </BrowserRouter>
  </StrictMode>
);
