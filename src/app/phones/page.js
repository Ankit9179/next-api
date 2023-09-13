const getdata = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  const data = res.json();
  return data;
};
export default async function showdata() {
  const phones = await getdata();
  console.log(phones);
  return (
    <div>
      <h2>phones</h2>
      {phones.map((item, i) => {
        return <h1 key={i}>{item.name}</h1>;
      })}
    </div>
  );
}
