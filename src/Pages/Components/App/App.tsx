import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Wapper from "../Wapper/Wapper";
export default function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Wapper />
      </QueryClientProvider>
    </>
  );
}
