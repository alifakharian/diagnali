import { useNavigate } from "react-router-dom";
import { useProducts } from "../../API/products";

function Products() {
  const { data } = useProducts();
  const navigation = useNavigate();
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
            {data &&
              data.map((item) => (
                <tr
                  key={item.id}
                  className="odd:bg-white even:bg-gray-100 hover:bg-gray-200 align-middle"
                  onClick={() => navigation(`${item.id}`)}
                >
                  <td className="p-2 border">{item.id}</td>
                  <td className="p-2 border">{item.title}</td>
                  <td className="p-2 border">{item.price}</td>
                  <td className="p-2 border">{item.category}</td>
                  <td className="p-2 border">
                    <img src={item.image} className="size-[50px] p-2" />
                  </td>
                  <td className="p-2 border">{item.rating.count}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Products;
