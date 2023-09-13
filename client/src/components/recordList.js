import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 
const Record = (props) => {
  return (
 <tr>
   <td>{props.record.origUrl}</td>
   <td>
    <a href={`http://localhost:3333/${props.record.shortUrl}`} target="_blank" rel="noreferrer">
      {props.record.shortUrl}
    </a>
    </td>
 </tr>
);}
 
export default function RecordList() {
 const [records, setRecords] = useState([]);
 

 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`http://localhost:3333/url_list`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const records = await response.json();
     setRecords(records);
   }
 
   getRecords();
 
   return;
 }, [records.length]);
 

 async function deleteRecord(id) {
   await fetch(`http://localhost:3333/${id}`, {
     method: "DELETE"
   });
 
   const newRecords = records.filter((el) => el._id !== id);
   setRecords(newRecords);
 }
 

 function recordList() {
   return records.map((record) => {
     return (
       <Record
         record={record}
         deleteRecord={() => deleteRecord(record._id)}
         key={record._id}
       />
     );
   });
 }
 

 return (
   <div>
     <h3>Record List</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>original url</th>
           <th>short url</th>
         </tr>
       </thead>
       <tbody>{recordList()}</tbody>
     </table>
   </div>
 );
}