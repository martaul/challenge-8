// import { Link } from "react-router-dom";

// const Card = ({ car }) => {
//   return (
//     <div className="col-4">
//       <div className="card mt-5">
//         <img
//           id="cover"
//           src={"http://localhost:8000/" + car.image}
//           className="card-img-top"
//           alt="mobil"
//         />
//         <div className="card-body">
//           <p className="card-text">{car.manufacture}</p>
//           <h5 className="card-title">
//             Rp.{" "}
//             {car.rentPerDay.toLocaleString("id-ID", {
//               styles: "currency",
//               currency: "IDR",
//             })}{" "}
//             / hari
//           </h5>
//           <div className="d-flex pt-2">
//             <img src="/images/fi_key.svg" alt="key" />
//             <p className="card-text px-2">Start rent - Finish rent</p>
//           </div>
//           <div className="d-flex pt-2">
//             <img src="/images/fi_clock.svg" alt="clock" />
//             <p className="card-text px-2">Update at</p>
//           </div>
//           <div className="d-flex justify-content-between pt-3">
//             <button className="btn btn-outline-primary" id="hapus">
//               <img src="/images/fi_trash-2.svg" alt="hapus" /> Delete
//             </button>
//             <Link to={"/edit/" + car.id} className="btn btn-primary" id="edit">
//               <img src="/images/fi_edit.svg" alt="edit" /> Edit
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Card;
