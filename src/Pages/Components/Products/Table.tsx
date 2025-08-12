export default function Table() {
  const data = [
    { id: 1, name: "محصول ۱", price: "100,000" },
    { id: 2, name: "محصول ۲", price: "200,000" },
    { id: 3, name: "محصول ۳", price: "300,000" },
    { id: 4, name: "محصول ۴", price: "400,000" },
    { id: 5, name: "محصول ۵", price: "500,000" },
  ];

  return (
    <div className="p-4">
      <table className="w-full border-collapse text-center">
        <thead className="bg-gray-300">
          <tr>
            <th className="p-2 border">Ref number</th>
            <th className="p-2 border">title</th>
            <th className="p-2 border">price</th>
            <th className="p-2 border">category</th>
            <th className="p-2 border">image</th>
            <th className="p-2 border">count</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className="odd:bg-white even:bg-gray-100 hover:bg-gray-200 align-middle"
            >
              <td className="p-2 border">{item.id}</td>
              <td className="p-2 border">{item.name}</td>
              <td className="p-2 border">{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
