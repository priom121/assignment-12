

const Counter = () => {
 return (
 <div>
   <div className="overflow-x-auto  py-10 w-2/3 mx-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="text-2xl text-blue-500">
        <th>Total Biodata</th>
        <th>Girls Biodata</th>
        <th>Boys Biodata</th>
        <th>marriages</th>
      </tr>
    </thead>
    <tbody>
      <tr className="bg-base-200 text-xl font-semibold">
        <th>100</th>
        <td>60+</td>
        <td>40+</td>
        <td>75+</td>
      </tr>
    </tbody>
  </table>
</div>                                                                                       
 </div>
 );
};

export default Counter;