import { useParams } from "react-router-dom";
import { useSingleProduct } from "../../API/products";
import Loading from "./Loaddind";

type Params = {
  id: string;
};

function Singleproduct() {
  const { id } = useParams<Params>();
  const productId = id ? Number(id) : undefined;

  const { data, isLoading, error } = useSingleProduct(productId);

  if (isLoading) return <Loading />;
  if (error) return <Loading />;

  return (
    <>
      <div className="p-4">
        <table className="sm:w-[60%] w-full mx-auto border-collapse text-center">
          <thead className="bg-gray-300">
            <tr>
              <th className="p-2 border">Ref</th>
              <th className="p-2 border">title</th>
              <th className="p-2 border">price</th>
              <th className="p-2 border">category</th>
              <th className="p-2 border">image</th>
              <th className="p-2 border">count</th>
            </tr>
          </thead>
          <tbody>
            <tr key={data?.id} className="bg-gray-100 align-middle">
              <td className="p-2 border">{data?.id}</td>
              <td className="p-2 border">{data?.title}</td>
              <td className="p-2 border">{data?.price}</td>
              <td className="p-2 border">{data?.category}</td>
              <td className="p-2 border">
                <img src={data?.image} className="size-[50px] p-2" />
              </td>
              <td className="p-2 border">{data?.rating.count}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Singleproduct;
